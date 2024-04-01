import { Resend } from 'resend';

import { EmailTemplate } from '../../components/email-template';

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);
const fromEmail = process.env.NEXT_PUBLIC_FROM_EMAIL || "contact@dangt.dev";


export async function POST(req: Request) {
  const { data } = await req.json();

  try {
    const response = await resend.emails.send({
      from: fromEmail,
      to: ['tommy.pekxsvn@gmail.com'],
      subject: data.subject || "null",
      react: EmailTemplate({ message: data.message || "plop" }),
      text: "Text",
    });

    return Response.json(response);
  } catch (error) {
    return Response.json({ error });
  }
}
