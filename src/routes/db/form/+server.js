import pg from "pg";
import dotenv from "dotenv";

dotenv.config();

const { Pool } = pg;

const pool = new Pool({
  user: process.env.DB_USERNAME,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT || 5432, // Default PostgreSQL port
});

export async function POST({ request }) {
  const formData = await request.formData();

  // Common fields
  const fullname = formData.get("fullname");
  const email = formData.get("email");
  const phoneNumber = formData.get("phoneNumber");

  // Fields specific to each table
  const inspectionDate = formData.get("date");
  const amount = formData.get("amount");
  const preferredSize = formData.get("preferredSize");
  const message = formData.get("message");

  try {
    // Insert into inspection table
    if (inspectionDate) {
      const result = await pool.query(
        "INSERT INTO inspection (fullname, email, phone_number, inspection_date) VALUES ($1, $2, $3, $4) RETURNING *",
        [fullname, email, phoneNumber, inspectionDate]
      );
      return new Response(
        JSON.stringify({ success: true, data: result.rows[0] }),
        {
          status: 200,
        }
      );
    }

    // Insert into invest table
    if (amount) {
      const result = await pool.query(
        "INSERT INTO invest (fullname, email, phone_number, amount) VALUES ($1, $2, $3, $4) RETURNING *",
        [fullname, email, phoneNumber, amount]
      );
      return new Response(
        JSON.stringify({ success: true, data: result.rows[0] }),
        {
          status: 200,
        }
      );
    }

    // Insert into request_information table
    if (preferredSize) {
      const result = await pool.query(
        "INSERT INTO request_information (fullname, email, phone_number, preferred_size) VALUES ($1, $2, $3, $4) RETURNING *",
        [fullname, email, phoneNumber, preferredSize]
      );
      return new Response(
        JSON.stringify({ success: true, data: result.rows[0] }),
        {
          status: 200,
        }
      );
    }

    // Insert into contact table
    if (message) {
      const result = await pool.query(
        "INSERT INTO contact_us (fullname, email, phone_number, message) VALUES ($1, $2, $3, $4) RETURNING *",
        [fullname, email, phoneNumber, message]
      );
      return new Response(
        JSON.stringify({ success: true, data: result.rows[0] }),
        {
          status: 200,
        }
      );
    }

    // Handle case where none of the expected fields are provided
    return new Response(
      JSON.stringify({ success: false, error: "No valid form data provided." }),
      { status: 400 }
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
        {
          status: 500,
        }
      );
    }
  }
}
