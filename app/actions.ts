"use server";

import { Resend } from 'resend';

// This looks for a variable named RESEND_API_KEY in your .env.local or Vercel settings


export async function sendEmail(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;

  try {
    if (!process.env.RESEND_API_KEY) return { success: false };
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { error } = await resend.emails.send({
      from: 'Crystal Contact <onboarding@resend.dev>',
      to: 'crystalcc2022@gmail.com',
      subject: `New Event Inquiry: ${name}`,
      replyTo: email,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    });
    return { success: !error };
  } catch (error) {
    console.error("Resend Error:", error);
    return { success: false };
  }
}
