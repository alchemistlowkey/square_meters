import { fail, redirect } from "@sveltejs/kit";
import pool from "$lib/db";

export const actions = {
  newsletter: async ({ request }) => {
    const formData = await request.formData();

    const email = formData.get("email");
    if (!email) {
        return fail(400, { email, missing: true });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return fail(400, { email, incorrect: true });
    }

    let client;
    try {
        client = await pool.connect();
        const query = 'INSERT INTO newsletter (email) VALUES ($1)';
        await client.query(query, [email]);

        return { success: true };

    } catch (error) {
        console.error('Database error:', error);
        return fail(500, { error: 'Failed to submit the form.' });
    } finally {
        if (client) {
            client.release();
        }
    }
  },
};
