import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json();

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required.' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format.' },
        { status: 400 }
      );
    }

    const userEmail = process.env.EMAIL_USER;
    const userPass = process.env.EMAIL_PASS;

    if (!userEmail || !userPass) {
      console.error('Email credentials not configured in environment variables.');
      return NextResponse.json(
        { error: 'Server misconfiguration. Email service unavailable.' },
        { status: 500 }
      );
    }

    // Configure the SMTP transport
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: userEmail,
        pass: userPass,
      },
    });

    // Email to yourself containing the message
    const mailOptions = {
      from: userEmail, // Sender address must match the authenticated user for Gmail
      to: userEmail, // Send it to yourself
      replyTo: email, // If you hit "Reply" in Gmail, it goes to the user who filled the form
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 10px;">
          <h2 style="color: #333; border-bottom: 2px solid #00f0ff; padding-bottom: 10px;">New Message via Portfolio</h2>
          
          <div style="margin-top: 20px;">
            <p><strong>From:</strong> ${name} &lt;${email}&gt;</p>
            <p><strong>Subject:</strong> ${subject}</p>
          </div>
          
          <div style="margin-top: 20px; padding: 15px; background-color: #f9f9f9; border-left: 4px solid #8b5cf6; white-space: pre-wrap;">
            ${message}
          </div>
          
          <div style="margin-top: 30px; font-size: 12px; color: #888;">
            <p>This email was sent automatically from your portfolio website's contact form.</p>
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { success: true, message: 'Message sent successfully!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send message. Please try again later.' },
      { status: 500 }
    );
  }
}
