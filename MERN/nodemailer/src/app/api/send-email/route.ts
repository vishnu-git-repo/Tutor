import { NextRequest, NextResponse } from 'next/server';
import { transporter } from '@/utils/transporter';

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json();
    console.log("name : ", name)
    console.log("email : ", email)
    console.log("subject : ", subject)
    console.log("message : ", message)
    console.log("GOOGLE_MAIL : ", process.env.GOOGLE_MAIL)
    console.log("GOOGLE_APP_PASSWORD : ", process.env.GOOGLE_APP_PASSWORD)
    
    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const mailOptions = {
      from: process.env.GOOGLE_MAIL || "test.vishnu@gmail.com",
      to: email,
      subject: subject,
      text: `${message}\n\nBest Regards,\n${name}`,
    };

    console.log("Attempting to send email...");
    const result = await transporter.sendMail(mailOptions);
    console.log("Email sent successfully : ", result);
    
    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Email sending error:', error);
    return NextResponse.json(
      { error: 'Failed to send email', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}
