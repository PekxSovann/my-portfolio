import { Resend } from 'resend';

import { EmailTemplate } from '../../components/email-template';

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

// export async function POST(req: any, res: any) {
//   const { body } = req.json();
//   const { email, subject, message } = body;

//   try {
//     console.log(body);
//     const data = await resend.emails.send({
//       from: fromEmail,
//       to: ['tommy.pekxsvn@gmail.com', email],
//       subject: subject,
//       react: EmailTemplate({ subject, message}),
//     });

//     return Response.json(data);
//   } catch (error) {
//     return Response.json({ error });
//   }
// }

// export async function POST() {
//   // const { body } = req.json();
//   // const { email, subject, message } = body;

//   // console.log("BODY: ", body)
//   try {
//     // console.log(body);
//     const data = await resend.emails.send({
//       from: fromEmail,
//       to: ['tommy.pekxsvn@gmail.com'],
//       subject: "subject",
//       react: EmailTemplate({ subject: "Test Subject", message: "Plop!" })
//     });

//     return Response.json(data);
//   } catch (error) {
//     return Response.json({ error });
//   }
// }

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