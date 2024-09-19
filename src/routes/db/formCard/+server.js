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

// Configure Nodemailer with Zoho Mail settings
const transporter = nodemailer.createTransport({
  host: "smtp.zoho.com",
  port: 465, // or 587 for non-SSL
  secure: true, // true for 465, false for 587
  auth: {
    user: process.env.ZOHO_USER, // Your Zoho email
    pass: process.env.ZOHO_PASS, // Your Zoho email password or app-specific password
  },
});

export async function POST({ request }) {
  const formData = await request.formData();

  const firstname = formData.get("firstname");
  const lastname = formData.get("lastname");
  const email = formData.get("email");
  const phoneNumber = formData.get("phoneNumber");

  try {
    // Insert data into PostgreSQL database
    const result = await pool.query(
      "INSERT INTO agent (firstname, lastname, email, phone_number) VALUES ($1, $2, $3, $4) RETURNING *",
      [firstname, lastname, email, phoneNumber]
    );

    // Send email to admin (receiver)
    const adminMailOptions = {
      from: process.env.ZOHO_USER, // Your Zoho email
      to: process.env.ADMIN_EMAIL, // Admin email
      subject: "New Agent Submission",
      text: `A new agent has been registered:
      First Name: ${firstname}
      Last Name: ${lastname}
      Email: ${email}
      Phone Number: ${phoneNumber}`,
    };

    // Send confirmation email to the user (sender)
    const userMailOptions = {
      from: process.env.ZOHO_USER, // Your Zoho email
      to: email, // User's email
      subject: "Thank you for registering as an agent",
      text: `Hi ${firstname},\n\nThank you for registering as an agent. We will get in touch with you shortly.\n\nBest regards,\nSquare Metres`,
    };

    // Send both emails
    await transporter.sendMail(adminMailOptions);
    await transporter.sendMail(userMailOptions);

    return new Response(
      JSON.stringify({ success: true, data: result.rows[0] }),
      { status: 200 }
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
        JSON.stringify({ success: false, error: "Failed to save data." }),
        { status: 500 }
      );
    }
  }
}
