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

export async function load({ params }) {
  const { id } = params; // Get the blog post ID from the URL parameters

  try {
    const result = await pool.query("SELECT * FROM blog_posts WHERE id = $1", [
      id,
    ]);
    const post = result.rows[0];

    if (!post) {
      return {
        status: 404,
        error: new Error("Post not found"),
      };
    }

    return {
      post: {
        title: post.title,
        date: post.date,
        image_url: post.image_url,
        description: post.description,
      },
    };
  } catch (error) {
    console.error("Error fetching blog post:", error);
    return {
      status: 500,
      error: new Error("Failed to fetch blog post"),
    };
  }
}
