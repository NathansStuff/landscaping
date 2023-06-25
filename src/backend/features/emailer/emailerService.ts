import nodemailer from 'nodemailer';

export async function sendEmail(name: string, email: string, message: string, mobile: string): Promise<string> {
  try {
    const user = process.env.EMAIL_USER ?? '';
    const pass = process.env.EMAIL_PASSWORD ?? '';
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user,
        pass,
      },
    });

    // Setup email data
    await transporter.sendMail({
      from: '"Contact Form Notification" <pslandscaping@gmail.com>',
      to: process.env.EMAIL_RECIPIENT ?? '',
      subject: 'Contact Form Notification',
      text: `Name: ${name}\nEmail: ${email}\nMobile: ${mobile}\nMessage: ${message}`,
    });

    return `success: ${name} ${email} ${message}`;
  } catch (error) {
    console.error(error);
    return `error: ${error}`;
  }
}
