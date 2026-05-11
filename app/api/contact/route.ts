import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  const { name, email, phone, role, message } = await request.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: 587,
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  await transporter.sendMail({
    from: `"PMC Website" <${process.env.SMTP_USER}>`,
    to: process.env.SMTP_TO ?? 'jacob.harbin@propertyconsultantsllc.com',
    replyTo: email,
    subject: `New website message from ${name} (${role})`,
    html: `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: #0f2d5e; padding: 24px 32px; border-radius: 8px 8px 0 0;">
          <h2 style="color: white; margin: 0;">New Contact Form Submission</h2>
          <p style="color: #93c5fd; margin: 4px 0 0;">Property Management Consultants Website</p>
        </div>
        <div style="background: #f8f7f4; padding: 32px; border-radius: 0 0 8px 8px; border: 1px solid #e5e7eb; border-top: none;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; color: #6b7280; font-size: 13px; width: 100px;">Name</td>
              <td style="padding: 8px 0; color: #111827; font-weight: 600;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #6b7280; font-size: 13px;">Email</td>
              <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #1d6fb8;">${email}</a></td>
            </tr>
            ${phone ? `<tr>
              <td style="padding: 8px 0; color: #6b7280; font-size: 13px;">Phone</td>
              <td style="padding: 8px 0;"><a href="tel:${phone}" style="color: #1d6fb8;">${phone}</a></td>
            </tr>` : ''}
            <tr>
              <td style="padding: 8px 0; color: #6b7280; font-size: 13px;">I am...</td>
              <td style="padding: 8px 0; color: #111827;">${role}</td>
            </tr>
          </table>
          <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 20px 0;" />
          <p style="color: #6b7280; font-size: 13px; margin: 0 0 8px;">Message</p>
          <p style="color: #111827; white-space: pre-wrap; margin: 0;">${message}</p>
          <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 20px 0;" />
          <p style="color: #9ca3af; font-size: 12px; margin: 0;">
            Hit reply to respond directly to ${name} at ${email}.
          </p>
        </div>
      </div>
    `,
  });

  return NextResponse.json({ success: true });
}
