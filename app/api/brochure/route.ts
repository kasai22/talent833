import { readFile } from "node:fs/promises";
import path from "node:path";
import { getBrochure, isEmail } from "@/lib/content/brochures";
import { contact } from "@/lib/site";

/**
 * POST /api/brochure  { email, offering, website? }
 * Emails the offering's brochure to the visitor (as an attachment) and alerts the team.
 *
 * Environment variables (set in Vercel → Settings → Environment Variables, and .env.local for dev):
 *   RESEND_API_KEY        required — from resend.com
 *   BROCHURE_FROM         required — a sender on a domain verified in Resend,
 *                         e.g. "Talent833 Partners <brochures@talent833.com>"
 *   BROCHURE_NOTIFY_TO    optional — where lead alerts go (defaults to the site contact email)
 */

const RESEND_URL = "https://api.resend.com/emails";

type Body = { email?: unknown; offering?: unknown; website?: unknown };

const escapeHtml = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

async function sendEmail(apiKey: string, payload: Record<string, unknown>) {
  const res = await fetch(RESEND_URL, {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  if (!res.ok) throw new Error(`Resend ${res.status}: ${await res.text()}`);
}

export async function POST(request: Request) {
  let body: Body;
  try {
    body = (await request.json()) as Body;
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  const email = typeof body.email === "string" ? body.email.trim() : "";
  const offering = typeof body.offering === "string" ? body.offering : "";
  const brochure = getBrochure(offering);

  // Honeypot: real visitors never see or fill the "website" field. Pretend success for bots.
  if (typeof body.website === "string" && body.website !== "") {
    return Response.json({ ok: true, download: brochure?.file ?? null });
  }
  if (!brochure) return Response.json({ error: "Unknown brochure." }, { status: 400 });
  if (!isEmail(email)) return Response.json({ error: "Please enter a valid email address." }, { status: 400 });

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.BROCHURE_FROM;
  const notifyTo = process.env.BROCHURE_NOTIFY_TO || contact.email;
  if (!apiKey || !from) {
    console.error("[brochure] RESEND_API_KEY or BROCHURE_FROM is not set; no email sent.");
    return Response.json({ error: "Email isn't set up yet.", download: brochure.file }, { status: 503 });
  }

  const filePath = path.join(process.cwd(), "public", brochure.file);
  const filename = `Talent833 - ${brochure.title}${path.extname(brochure.file)}`;

  try {
    const content = (await readFile(filePath)).toString("base64");
    const title = escapeHtml(brochure.title);

    await sendEmail(apiKey, {
      from,
      to: [email],
      reply_to: contact.email,
      subject: `Your brochure: ${brochure.title}`,
      html: `<p>Hello,</p>
<p>Thank you for your interest in Talent 833 Partners. Your <strong>${title}</strong> brochure is attached.</p>
<p>If you'd like to talk about a learning partnership for your organisation, just reply to this email or call us on ${escapeHtml(contact.phone)}.</p>
<p>Warm regards,<br/>Talent 833 Partners</p>`,
      attachments: [{ filename, content }],
    });

    // The visitor already has their brochure; a failed alert shouldn't turn that into an error.
    await sendEmail(apiKey, {
      from,
      to: [notifyTo],
      reply_to: email,
      subject: `Brochure request: ${brochure.title}`,
      html: `<p><strong>${escapeHtml(email)}</strong> requested the <strong>${title}</strong> brochure on the website.</p>
<p>Reply to this email to contact them directly.</p>`,
    }).catch((err) => console.error("[brochure] lead alert failed:", err));
  } catch (err) {
    console.error("[brochure] send failed:", err);
    return Response.json({ error: "We couldn't send the email.", download: brochure.file }, { status: 502 });
  }

  return Response.json({ ok: true, download: brochure.file });
}
