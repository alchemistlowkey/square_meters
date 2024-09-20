import pg from "pg";
import dotenv from "dotenv";
import nodemailer from "nodemailer";
import { randomBytes } from "crypto";

dotenv.config();

const { Pool } = pg;
const pool = new Pool({
  user: process.env.DB_USERNAME,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT || 5432,
});

const transporter = nodemailer.createTransport({
  host: "smtp.zoho.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.ZOHO_USER,
    pass: process.env.ZOHO_PASS,
  },
});

export async function POST({ request }) {
  const formData = await request.formData();
  const firstname = formData.get("firstname");
  const lastname = formData.get("lastname");
  const email = formData.get("email");
  const phoneNumber = formData.get("phoneNumber");

  const verificationToken = randomBytes(20).toString("hex");

  try {
    // Insert agent data into the database
    const result = await pool.query(
      "INSERT INTO agent (firstname, lastname, email, phone_number, verification_token) VALUES ($1, $2, $3, $4, $5) RETURNING *",
      [firstname, lastname, email, phoneNumber, verificationToken]
    );

    // Send email to admin
    await transporter.sendMail({
      from: process.env.ZOHO_USER,
      to: process.env.ADMIN_EMAIL,
      subject: "New Agent Submission",
      text: `A new agent has been registered:
      First Name: ${firstname}
      Last Name: ${lastname}
      Email: ${email}
      Phone Number: ${phoneNumber}`,
    });

    // Send verification email to user
    await transporter.sendMail({
      from: process.env.ZOHO_USER,
      to: email,
      subject: "Verify Your Email Address",
      html: `<p>Hello ${firstname},</p>
        <p>Thank you for registering as an agent. Please verify your email by clicking the link below:</p>
        <p><a href="http://squaremetres.ng/verify-email?token=${verificationToken}&email=${email}">Verify Email</a></p>
        <p>If you did not request this registration, please ignore this email.</p>
        <div style="border-top:1px solid #ccc;padding-top:10px;">
          <!-- Include branding and contact information -->
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
                  <a href="tel:+2348066267094">08066267094</a>
                </p>
                <p style="font-size:14px;color:grey;margin:0;">
                  <img src="https://static.zohocdn.com/toolkit/assets/e9f50d5df538b77aaf67.png" width="16" alt="Email">
                  <a href="mailto:hello@squaremetres.ng">hello@squaremetres.ng</a>
                </p>
                <p style="font-size:14px;color:grey;margin:0;">
                  <img src="https://static.zohocdn.com/toolkit/assets/3c660a292e9d9e5ec69a.png" width="16" alt="Website">
                  <a href="https://www.squaremetres.ng">www.squaremetres.ng</a>
                </p>
                <p style="font-size:14px;color:grey;margin:0;">
                  <img src="https://static.zohocdn.com/toolkit/assets/603ad3f106f2ae6eaf88.png" width="16" alt="Address">
                  <a href="https://www.google.com/maps/search/?api=1&query=7/9+Molade+Okoya+Thomas,+Victoria+Island,+Lagos">7/9 Molade Okoya Thomas, Victoria Island, Lagos</a>
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
          <p style="font-size:14px;color:grey;margin:0;">Square Metres Team</p>
        `,
    });

    return new Response(
      JSON.stringify({ success: true, data: result.rows[0] }),
      { status: 200 }
    );
  } catch (error) {
    if (error.code === "23505") {
      // Duplicate entry
      return new Response(JSON.stringify({ success: false, exists: true }), {
        status: 400,
      });
    }

    console.error("Database insertion error:", error);
    return new Response(
      JSON.stringify({
        success: false,
        error: "An error occurred during registration",
      }),
      { status: 500 }
    );
  }
}

// The above code snippet is a Cloudflare Worker serverless function that handles form submissions for agent registration. The function inserts the form data into a PostgreSQL database and sends a verification email to the user. The email contains a link to verify the user's email address. The function also sends an email notification to the admin with the details of the new agent registration.
