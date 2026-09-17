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
  botcheck?: string | boolean;
};

const EMAIL_RE = /^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/;
const NAMED_EMAIL_RE =
  /^(?:.+?\s*)?<([^\s@<>]+@[^\s@<>]+\.[^\s@<>]+)>$|^([^\s@<>]+@[^\s@<>]+\.[^\s@<>]+)$/;

function badRequest(message: string) {
  return NextResponse.json({ ok: false, error: message }, { status: 400 });
}

/* Vercel secret values sometimes arrive with wrapping quotes or stray
   whitespace. Normalize before handing them to Resend. */
function cleanEnv(value: string | undefined) {
  return String(value ?? "")
    .trim()
    .replace(/^['"]|['"]$/g, "")
    .trim();
}

function parseAddress(raw: string | undefined, fallback: string) {
  const value = cleanEnv(raw) || fallback;
  const match = value.match(NAMED_EMAIL_RE);
  if (!match) return null;
  const email = match[1] || match[2];
  if (!EMAIL_RE.test(email)) return null;
  return value.includes("<") ? value : email;
}

export async function POST(request: Request) {
  const apiKey = cleanEnv(process.env.RESEND_API_KEY);
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

  if (body.botcheck) {
    /* Silent success for bots that trip the honeypot. */
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
  if (!EMAIL_RE.test(email)) {
    return badRequest("Invalid email.");
  }
  if (message.length > 5000) {
    return badRequest("Message is too long.");
  }

  const to = parseAddress(process.env.CONTACT_TO_EMAIL, contact.email);
  const from = parseAddress(
    process.env.CONTACT_FROM_EMAIL,
    "Enigma <onboarding@resend.dev>",
  );

  if (!to || !from) {
    return NextResponse.json(
      { ok: false, error: "Email addresses are misconfigured." },
      { status: 503 },
    );
  }

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
      `Source: www.getenigmaai.com`,
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
