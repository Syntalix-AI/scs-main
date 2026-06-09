import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';
import { Resend } from 'resend';

export async function POST(request) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY || "re_123");
    const { name, email, message, budget } = await request.json();

    const data = await resend.emails.send({
      from: 'Syntalix <onboarding@resend.dev>',
      to: ['syntalixconsultancy@gmail.com'],
      reply_to: email,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Budget:</strong> ${budget ? `₹${budget}` : 'Not specified'}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    return NextResponse.json({ message: "Email sent successfully" });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
