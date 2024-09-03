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

  const firstname = formData.get("firstname");
  const lastname = formData.get("lastname");
  const email = formData.get("email");
  const phoneNumber = formData.get("phoneNumber");

  try {
      const result = await pool.query(
        "INSERT INTO agent (firstname, lastname, email, phone_number) VALUES ($1, $2, $3, $4) RETURNING *",
        [firstname, lastname, email, phoneNumber]
      );
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
        JSON.stringify({ success: false, error: "Failed to save data." }),
        {
          status: 500,
        }
      );
    }
  }
}
