// src/routes/db/formBlog/+server.js

import pg from 'pg';
import fs from 'fs/promises';
import path from 'path';
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

// Set the directory where uploaded images will be stored
const UPLOAD_DIR = './static/uploads/'; // Ensure this directory exists in your project

// Ensure the upload directory exists
await fs.mkdir(UPLOAD_DIR, { recursive: true });

export async function POST({ request }) {
  const formData = await request.formData();
  const blogTitle = formData.get('blogTitle');
  const blogDescription = formData.get('blogDescription');
  const blogDate = formData.get('blogDate');
  const blogImage = formData.get('blogImage');
  const blogAuthor = formData.get('blogAuthor');


  // Check if all fields are provided
  if (!blogTitle || !blogDescription || !blogDate || !blogImage || !blogAuthor) {
    return new Response(JSON.stringify({ success: false, message: 'Missing fields' }), {
      status: 400,
    });
  }

  // Process the image file
  const imageName = `${Date.now()}-${blogImage.name}`;
  const imagePath = path.join(UPLOAD_DIR, imageName);

  try {
    // Convert the blogImage to a buffer and save it
    const imageBuffer = Buffer.from(await blogImage.arrayBuffer());
    await fs.writeFile(imagePath, imageBuffer);

    // Insert the blog post data into the database
    const result = await pool.query(
      `INSERT INTO blog_posts (title, description, date, image_url, author) 
      VALUES ($1, $2, $3, $4, $5) RETURNING *`,
      [blogTitle, blogDescription, blogDate, `/uploads/${imageName}`, blogAuthor]
    );

    // Return the blog post data on success
    return new Response(JSON.stringify({ success: true, data: result.rows[0] }), {
      status: 201,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('Error processing blog post:', error);
    return new Response(
      JSON.stringify({ success: false, message: 'Failed to save blog post' }),
      { status: 500 }
    );
  }
}
