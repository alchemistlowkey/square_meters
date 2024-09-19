import pg from "pg";
import dotenv from "dotenv";
import nodemailer from "nodemailer";

dotenv.config();

const { Pool } = pg;

const pool = new Pool({
  user: process.env.DB_USERNAME,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT || 5432, // Default PostgreSQL port
});

// Nodemailer transporter with Zoho Mail settings
const transporter = nodemailer.createTransport({
  host: 'smtp.zoho.com',
  port: 465, // or 587 for non-SSL
  secure: true, // true for 465, false for 587
  auth: {
    user: process.env.ZOHO_USER, // Zoho email
    pass: process.env.ZOHO_PASS, // Zoho email password or app-specific password
  },
});

export async function POST({ request }) {
  const formData = await request.formData();
  const email = formData.get("email");

  try {
    const result = await pool.query(
      "INSERT INTO newsletter (email) VALUES ($1) RETURNING *",
      [email]
    );

    // Send notification emails

    // Email to the sender (user)
    await transporter.sendMail({
      from: process.env.ZOHO_USER,
      to: email,
      subject: "Subscription Confirmation",
      text: "Thank you for subscribing to our newsletter!",
    });

    // Email to the admin (receiver)
    await transporter.sendMail({
      from: process.env.ZOHO_USER,
      to: process.env.ADMIN_EMAIL, // Set admin email in your .env file
      subject: "New Newsletter Subscriber",
      text: `A new subscriber has joined: ${email}`,
    });

    return new Response(
      JSON.stringify({ success: true, data: result.rows[0] }),
      {
        status: 200,
      }
    );
  } catch (error) {
    if (error.code === "23505") {
      // Check for duplicate entry error
      return new Response(JSON.stringify({ success: false, exists: true }), {
        status: 409, // Conflict status
      });
    } else {
      console.error("Database error:", error);
      return new Response(
        JSON.stringify({ success: false, error: "Failed to save email." }),
        {
          status: 500,
        }
      );
    }
  }
}
