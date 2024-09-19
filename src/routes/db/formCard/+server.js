import pg from "pg";
import dotenv from "dotenv";
import nodemailer from "nodemailer";

dotenv.config();

const { Pool } = pg;

const pool = new Pool({
  user: process.env.DB_USERNAME,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT || 5432, // Default PostgreSQL port
});

// Configure Nodemailer with Zoho Mail settings
const transporter = nodemailer.createTransport({
  host: "smtp.zoho.com",
  port: 465, // or 587 for non-SSL
  secure: true, // true for 465, false for 587
  auth: {
    user: process.env.ZOHO_USER, // Your Zoho email
    pass: process.env.ZOHO_PASS, // Your Zoho email password or app-specific password
  },
});

export async function POST({ request }) {
  const formData = await request.formData();

  const firstname = formData.get("firstname");
  const lastname = formData.get("lastname");
  const email = formData.get("email");
  const phoneNumber = formData.get("phoneNumber");

  try {
    // Insert data into PostgreSQL database
    const result = await pool.query(
      "INSERT INTO agent (firstname, lastname, email, phone_number) VALUES ($1, $2, $3, $4) RETURNING *",
      [firstname, lastname, email, phoneNumber]
    );

    // Send email to admin (receiver)
    const adminMailOptions = {
      from: process.env.ZOHO_USER, // Your Zoho email
      to: process.env.ADMIN_EMAIL, // Admin email
      subject: "New Agent Submission",
      text: `A new agent has been registered:
      First Name: ${firstname}
      Last Name: ${lastname}
      Email: ${email}
      Phone Number: ${phoneNumber}`,
    };

    // Send confirmation email to the user (sender)
    const userMailOptions = {
      from: process.env.ZOHO_USER, // Your Zoho email
      to: email, // User's email
      subject: "Thank you for registering as an agent",
      html: `
      <div style="font-family:Arial,sans-serif;color:#333;">
        <p>Hi ${firstname},</p>
        <p>Thank you for registering as an agent. We will get in touch with you shortly.</p>
        <p>Best regards,</p>
        <div style="border-top:1px solid #ccc;padding-top:10px;">
          <table cellpadding="0" cellspacing="0" width="100%" style="max-width:600px;">
            <tr>
              <td style="padding:12px 0;">
                <table cellpadding="0" cellspacing="0" style="width:100%;">
                  <tr>
                    <td style="width:160px;text-align:center;">
                      <img width="110" src="https://squaremetres.ng/images/logo_desktop.png" alt="Square Metres Logo">
                    </td>
                    <td style="padding-left:20px;">
                      <table cellpadding="0" cellspacing="0">
                        <tr>
                          <td>
                            <p style="font-size:20px;color:#5363f2;font-weight:bold;margin:0;">Square Metres</p>
                            <p style="font-size:14px;color:grey;margin:5px 0;">Your trusted real estate partner.</p>
                          </td>
                        </tr>
                        <tr>
                          <td style="padding-top:8px;">
                            <p>
                              <a href="https://www.facebook.com/squaremetresng" target="_blank">
                                <img src="https://static.zohocdn.com/toolkit/assets/f365fd888609adb4592a.png" width="20" alt="Facebook">
                              </a>
                              <a href="https://x.com/squaremetresng" target="_blank">
                                <img src="https://static.zohocdn.com/toolkit/assets/2a322e4d20895f8456e3.png" width="20" alt="Twitter">
                              </a>
                              <a href="https://www.linkedin.com/company/square-meters-real-estate-limited" target="_blank">
                                <img src="https://static.zohocdn.com/toolkit/assets/44994ddd001121ef78ab.png" width="20" alt="LinkedIn">
                              </a>
                              <a href="https://www.youtube.com/@squaremetresng" target="_blank">
                                <img src="https://static.zohocdn.com/toolkit/assets/bfa7da0565ea269e27e3.png" width="20" alt="YouTube">
                              </a>
                              <a href="https://www.instagram.com/squaremetresng/" target="_blank">
                                <img src="https://static.zohocdn.com/toolkit/assets/3581a585b3c1ed74caa7.png" width="20" alt="Instagram">
                              </a>
                            </p>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td style="padding-top:8px;">
                <p style="font-size:14px;color:grey;margin:0;">
                  <img src="https://static.zohocdn.com/toolkit/assets/8c62b345a3e98fbffcaa.png" width="16" alt="Phone">
                  08066267094
                </p>
                <p style="font-size:14px;color:grey;margin:0;">
                  <img src="https://static.zohocdn.com/toolkit/assets/e9f50d5df538b77aaf67.png" width="16" alt="Email">
                  <a href="mailto:dev@squaremetres.ng">dev@squaremetres.ng</a>
                </p>
                <p style="font-size:14px;color:grey;margin:0;">
                  <img src="https://static.zohocdn.com/toolkit/assets/3c660a292e9d9e5ec69a.png" width="16" alt="Website">
                  <a href="https://www.squaremetres.ng">www.squaremetres.ng</a>
                </p>
                <p style="font-size:14px;color:grey;margin:0;">
                  <img src="https://static.zohocdn.com/toolkit/assets/603ad3f106f2ae6eaf88.png" width="16" alt="Address">
                  7/9 Molade Okoya Thomas, Victoria Island, Lagos
                </p>
              </td>
            </tr>
            <tr>
              <td style="padding-top:10px;">
                <p style="font-size:12px;color:grey;margin:0;">
                  The content of this email is confidential and intended for the recipient specified in the message only. It is strictly forbidden to share any part of this message with any third party, without a written consent of the sender. If you received this message by mistake, please reply and delete the message.
                </p>
              </td>
            </tr>
          </table>
        </div>
      </div>
      `,
    };

    // Send both emails
    await transporter.sendMail(adminMailOptions);
    await transporter.sendMail(userMailOptions);

    return new Response(
      JSON.stringify({ success: true, data: result.rows[0] }),
      { status: 200 }
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
        { status: 500 }
      );
    }
  }
}
