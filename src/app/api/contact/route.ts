import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json();

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "All fields are required." }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Shah Nawrose Portfolio" <${process.env.EMAIL_USER}>`,
      to: "shhnwrz@gmail.com",
      replyTo: email,
      subject: `[Portfolio] ${subject}`,
      html: `
<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background-color:#f1f5f9;font-family:Arial,Helvetica,sans-serif">

  <div style="max-width:580px;margin:40px auto;background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08)">

    <!-- Header -->
    <div style="background:linear-gradient(135deg,#6366f1,#22d3ee);padding:32px 32px 28px">
      <p style="margin:0 0 6px 0;color:rgba(255,255,255,0.85);font-size:12px;letter-spacing:0.08em;text-transform:uppercase">Portfolio Contact Form</p>
      <h1 style="margin:0;color:#ffffff;font-size:22px;font-weight:700">New message from ${name}</h1>
    </div>

    <!-- Body -->
    <div style="padding:28px 32px">

      <!-- Details table -->
      <table style="width:100%;border-collapse:collapse;margin-bottom:24px">
        <tr>
          <td style="padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px 8px 0 0;width:80px;font-size:12px;font-weight:600;color:#64748b;text-transform:uppercase;letter-spacing:0.05em">Name</td>
          <td style="padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-top-right-radius:8px;border-left:none;font-size:14px;color:#0f172a;font-weight:500">${name}</td>
        </tr>
        <tr>
          <td style="padding:10px 14px;background:#ffffff;border:1px solid #e2e8f0;border-top:none;font-size:12px;font-weight:600;color:#64748b;text-transform:uppercase;letter-spacing:0.05em">Email</td>
          <td style="padding:10px 14px;background:#ffffff;border:1px solid #e2e8f0;border-top:none;border-left:none;font-size:14px">
            <a href="mailto:${email}" style="color:#6366f1;text-decoration:none;font-weight:500">${email}</a>
          </td>
        </tr>
        <tr>
          <td style="padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-top:none;border-radius:0 0 0 8px;font-size:12px;font-weight:600;color:#64748b;text-transform:uppercase;letter-spacing:0.05em">Subject</td>
          <td style="padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-top:none;border-left:none;border-radius:0 0 8px 0;font-size:14px;color:#0f172a;font-weight:500">${subject}</td>
        </tr>
      </table>

      <!-- Message box -->
      <div style="background:#f8fafc;border:1px solid #e2e8f0;border-left:4px solid #6366f1;border-radius:8px;padding:18px 20px">
        <p style="margin:0 0 10px;font-size:11px;font-weight:700;color:#64748b;text-transform:uppercase;letter-spacing:0.08em">Message</p>
        <p style="margin:0;font-size:14px;color:#1e293b;line-height:1.8;white-space:pre-line">${message}</p>
      </div>
    </div>

    <!-- Footer -->
    <div style="background:#f8fafc;border-top:1px solid #e2e8f0;padding:16px 32px;text-align:center">
      <p style="margin:0;font-size:12px;color:#94a3b8">
        Hit <strong style="color:#6366f1">Reply</strong> to respond directly to ${name} &nbsp;·&nbsp; Shah Nawrose Portfolio
      </p>
    </div>

  </div>

</body>
</html>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Email send error:", err);
    return NextResponse.json({ error: "Failed to send message. Please try again." }, { status: 500 });
  }
}
