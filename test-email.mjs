import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

async function testEmail() {
  console.log('User:', process.env.EMAIL_USER);
  console.log('Pass:', process.env.EMAIL_PASS ? '******' : 'MISSING');

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    const info = await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: 'Test Email from Portfolio',
      text: 'This is a test to see if nodemailer is actually working.',
    });
    console.log('Message sent: %s', info.messageId);
    console.log('Accepted by:', info.accepted);
    console.log('Rejected by:', info.rejected);
  } catch (err) {
    console.error('Error:', err);
  }
}

testEmail();
