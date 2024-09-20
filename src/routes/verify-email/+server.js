import { json } from "@sveltejs/kit";
import pg from "pg";
import dotenv from "dotenv";

dotenv.config();

const { Pool } = pg;

const pool = new Pool({
  user: process.env.DB_USERNAME,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT || 5432,
});

export async function GET({ url }) {
  const token = url.searchParams.get("token");
  const email = url.searchParams.get("email");

  if (!token || !email) {
    return json({ message: "Missing token or email." }, { status: 400 });
  }

  try {
    const result = await pool.query(
      "UPDATE agent SET is_verified = TRUE WHERE email = $1 AND verification_token = $2 RETURNING *",
      [email, token]
    );

    if (result.rowCount === 0) {
      return json({ message: "Invalid token or email." }, { status: 400 });
    }

    return json({ message: "Email verified successfully." }, { status: 200 });
  } catch (error) {
    console.error("Database error:", error);
    return json({ message: "Internal Server Error" }, { status: 500 });
  }
}
