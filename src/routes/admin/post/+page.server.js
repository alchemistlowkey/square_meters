import dotenv from "dotenv";

dotenv.config();

export async function load({ url }) {
  const token = url.searchParams.get("token");

  // Check if the provided token matches the one in .env
  if (token !== process.env.ADMIN_TOKEN) {
    return {
      status: 302,
      redirect: "/403",
    };
  }

  // If token is valid, allow access to the page
  return {
    status: 200,
  };
}
