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
  host: "smtp.zoho.com",
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
      html: `
    <div style="font-family: 'Poppins', sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd;">
      <h2 style="text-align: center; color: #333;">Thank you for subscribing to our newsletter!</h2>
      <div style="text-align: center; padding: 20px;">
        <img src="https://squaremetres.ng/images/logo_desktop.png" alt="Square Metres Logo" style="margin-bottom: 20px;">
      </div>
      <div style="background-color: #f9f9f9; padding: 20px; border-radius: 10px;">
        <p style="font-size: 18px;">Hello <strong>Lucky Samuel</strong>,</p>
        <p style="font-size: 16px;">Thank you for subscribing to our newsletter at Square Metres.</p>
        <p style="font-size: 14px;">If you did not request this subscription, you can safely ignore this email.</p>
      </div>
      <p style="font-size: 14px; text-align: center; color: #999;">&copy; 2024 Square Metres. All rights reserved.</p>
    </div>
  `,
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
