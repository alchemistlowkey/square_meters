import pg from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const { Pool } = pg;
const pool = new Pool({
  user: process.env.DB_USERNAME,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT || 5432,
});

export async function GET() {
  try {
    const result = await pool.query('SELECT * FROM blog_posts ORDER BY created_at DESC'); // Adjust based on your table structure
    return new Response(JSON.stringify({ posts: result.rows }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return new Response(JSON.stringify({ success: false, message: 'Failed to fetch blog posts' }), {
      status: 500,
    });
  }
}
