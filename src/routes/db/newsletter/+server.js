import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: parseInt(process.env.DB_PORT, 10) || 3307,
});

export async function POST({ request }) {
  const formData = await request.formData();
  const email = formData.get('email');

  console.log('Received email:', email);

  if (!email) {
    return new Response(
      JSON.stringify({ success: false, error: 'Email is required.' }),
      { status: 400 }
    );
  }

  try {
    const [result] = await pool.query(
      'INSERT INTO newsletter (email) VALUES (?)',
      [email]
    );
    return new Response(JSON.stringify({ success: true, data: result.insertId }), {
      status: 200,
    });
  } 
  catch (error) {
    console.error('Database error:', error);
    return new Response(
      JSON.stringify({ success: false, error: 'Failed to save email.' }),
      { status: 500 }
    );
  }
}
