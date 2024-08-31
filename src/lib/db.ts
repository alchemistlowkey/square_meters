import pg from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const { Pool } = pg;

const pool = new Pool({
  user: process.env.DB_USERNAME,       // Adjusted to match .env
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,   // Adjusted to match .env
  password: process.env.DB_PASSWORD,   // Adjusted to match .env
  port: process.env.DB_PORT || 5432,    // Default PostgreSQL port
});

export default pool;