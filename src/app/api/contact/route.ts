import { NextResponse } from "next/server";
import { Resend } from "resend";
import { contact } from "@/content/site";

export const runtime = "nodejs";

type Body = {
  first?: string;
  last?: string;
  email?: string;
  company?: string;
  message?: string;
  /* Honeypot mirrored from the client. */
  company_website?: string;
};

function badRequest(message: string) {
  return NextResponse.json({ ok: false, error: message }, { status: 400 });
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { ok: false, error: "Email is not configured." },
      { status: 503 },
    );
  }

  let body: Body;
  try {
    body = (await request.json()) as Body;
  } catch {
    return badRequest("Invalid JSON body.");
  }

  if (String(body.company_website ?? "").trim()) {
    /* Silent success for bots that fill the honeypot. */
    return NextResponse.json({ ok: true });
  }

  const first = String(body.first ?? "").trim();
  const last = String(body.last ?? "").trim();
  const email = String(body.email ?? "").trim();
  const company = String(body.company ?? "").trim();
  const message = String(body.message ?? "").trim();

  if (!first || !last || !email || !message) {
    return badRequest("Missing required fields.");
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return badRequest("Invalid email.");
  }
  if (message.length > 5000) {
    return badRequest("Message is too long.");
  }

  const to = process.env.CONTACT_TO_EMAIL || contact.email;
  const from =
    process.env.CONTACT_FROM_EMAIL || "Enigma <onboarding@resend.dev>";

  const resend = new Resend(apiKey);
  const name = `${first} ${last}`;
  const { error } = await resend.emails.send({
    from,
    to: [to],
    replyTo: email,
    subject: contact.assistant.subject,
    text: [
      `Name: ${name}`,
      `Email: ${email}`,
      `Company: ${company || "(not provided)"}`,
      `Source: enigma.foundry360.us`,
      "",
      message,
    ].join("\n"),
  });

  if (error) {
    return NextResponse.json(
      { ok: false, error: error.message || "Send failed." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
