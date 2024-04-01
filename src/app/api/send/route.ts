import { Resend } from 'resend';

import { EmailTemplate } from '../../components/email-template';

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

interface EmailData {
  email: string;
  subject: string;
  message: string;
};

export const sendMail = async (data: EmailData) => {
  try {
    const response = await resend.emails.send({
      from: fromEmail,
      to: ['tommy.pekxsvn@gmail.com'],
      subject: data.subject,
      react: EmailTemplate({ message: data.message })
    });
    // const response = await fetch(endpoint, options);
    console.log("RES DATA:", response);
    // const resData = await response;
    // console.log("RES DATA:", resData);
    return 1
  } catch (e) {
    return 2;
  }
}