import { EmailTemplate } from "../../components/email-template";
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = "contact@dangt.dev";

export async function POST() {
  try {
    const data = await resend.emails.send({
      from: fromEmail,
      to: ['tommy.pekxsvn@gmail.com'],
      subject: 'Hello world',
      react: "EmailTemplate({ firstName: 'John' }),"
    });

    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}
