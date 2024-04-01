import { Resend } from 'resend';
import { NextRequest, NextResponse } from "next/server";

import { EmailTemplate } from '../../components/email-template';

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);
const fromEmail = process.env.NEXT_PUBLIC_FROM_EMAIL || "contact@dangt.dev";

interface POST_FUCTION extends NextRequest {
  req: {
    body: {
      email: string;
      subject: string;
      message: string;
    }
  }
}

export async function POST(req: POST_FUCTION) {
  const data = req.body;

  try {
    const response = await resend.emails.send({
      from: fromEmail,
      to: ['tommy.pekxsvn@gmail.com'],
      subject: data.subject,
      react: EmailTemplate({ message: data.message })
    });

    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}
