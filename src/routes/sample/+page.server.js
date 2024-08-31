import { fail, redirect } from "@sveltejs/kit";

export const actions = {
  create: async ({ request }) => {
    const formData = await request.formData();

    const name = formData.get("name");
    const email = formData.get("email");
    if (!name || !email) {
        return fail(400, { name, email, missing: true });
    }

    if (email.length < 8) {
        return fail(400, { name, email, short: true });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return fail(400, { name, email, incorrect: true });
    }

    const id = crypto.randomUUID();

    // throw redirect(303, '/agency')
    
    return {
        success: true,
    };
  },
};
