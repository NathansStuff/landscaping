import nodemailer from 'nodemailer';

export function sendEmail(name: string, email: string, message: string): void {
  console.log('Sending email');
  const user = process.env.EMAIL_USER ?? '';
  const pass = process.env.EMAIL_PASSWORD ?? '';
  console.log('user', user);
  console.log('pass', pass);
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
  transporter.sendMail({
    from: '"Contact Form Notification" <pslandscaping@gmail.com>',
    to: process.env.EMAIL_RECIPIENT ?? 'jezza121@hotmail.com',
    subject: 'Contact Form Notification',
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  });
}
