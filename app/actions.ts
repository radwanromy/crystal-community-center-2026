"use server";

import { Resend } from 'resend';

// This looks for a variable named RESEND_API_KEY in your .env.local or Vercel settings
const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;

  try {
    await resend.emails.send({
      from: 'Crystal Contact <onboarding@resend.dev>',
      to: 'crystalcc2022@gmail.com',
      subject: `New Event Inquiry: ${name}`,
      replyTo: email,
      html: `
        <h3>New Message from Website</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });
    return { success: true };
  } catch (error) {
    console.error("Resend Error:", error);
    return { success: false };
  }
}