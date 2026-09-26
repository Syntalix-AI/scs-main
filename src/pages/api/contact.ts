import type { APIRoute } from 'astro';
import { z } from 'zod';
import { Resend } from 'resend';

export const prerender = false;

const TO = import.meta.env.CONTACT_TO ?? 'info@syntalixconsultancy.com';
const FROM = import.meta.env.CONTACT_FROM ?? 'Syntalix Consultancy <noreply@syntalixconsultancy.com>';

const Lead = z.object({
  name: z.string().trim().min(1, 'Please add your name.').max(120),
  email: z.string().trim().email('Please add a valid work email.').max(200),
  company: z.string().trim().max(160).optional().default(''),
  need: z.string().trim().max(80).optional().default(''),
  budget: z.string().trim().max(40).optional().default(''),
  message: z.string().trim().max(4000).optional().default(''),
  role: z.string().trim().max(80).optional().default(''),
  portfolio: z.string().trim().max(300).optional().default(''),
  source: z.string().trim().max(40).optional().default('site'),
  company_website: z.string().max(0).optional().default(''), // honeypot: must stay empty
});

// Best-effort limiter per serverless instance: 5 submissions per IP per 10 minutes.
const hits = new Map<string, number[]>();
function limited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < 10 * 60_000);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > 5;
}

const esc = (s: string) => s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!);

function reply(request: Request, status: number, body: Record<string, unknown>) {
  const wantsJson = (request.headers.get('accept') ?? '').includes('application/json');
  if (wantsJson) return new Response(JSON.stringify(body), { status, headers: { 'Content-Type': 'application/json' } });
  return new Response(null, { status: 303, headers: { Location: status < 300 ? '/thank-you' : '/contact?error=1#contact-form' } });
}

export const POST: APIRoute = async ({ request, clientAddress }) => {
  const key = import.meta.env.RESEND_API_KEY;
  if (!key) {
    console.error('contact: RESEND_API_KEY is not set');
    return reply(request, 500, { error: 'Our form is temporarily unavailable. Please email info@syntalixconsultancy.com.' });
  }
  if (limited(clientAddress ?? 'unknown')) return reply(request, 429, { error: 'Too many messages. Please try again in a few minutes.' });

  const form = Object.fromEntries((await request.formData()).entries());
  const parsed = Lead.safeParse(form);
  if (!parsed.success) {
    // Honeypot filled: pretend success so bots learn nothing.
    if (parsed.error.issues.some((i) => i.path[0] === 'company_website')) return reply(request, 200, { ok: true });
    return reply(request, 400, { error: parsed.error.issues[0]?.message ?? 'Please check the form.' });
  }
  const d = parsed.data;
  const rows: [string, string][] = [['Name', d.name], ['Email', d.email], ['Company', d.company], ['Need', d.need], ['Budget', d.budget], ['Role', d.role], ['Portfolio', d.portfolio], ['Form', d.source]];
  const html = `<h2>New enquiry from the website</h2><table>${rows.filter(([, v]) => v).map(([k, v]) => `<tr><td><b>${k}</b></td><td>${esc(v)}</td></tr>`).join('')}</table>${d.message ? `<p><b>Project details</b></p><p>${esc(d.message).replace(/\n/g, '<br>')}</p>` : ''}`;

  try {
    const resend = new Resend(key);
    const sent = await resend.emails.send({ from: FROM, to: [TO], replyTo: d.email, subject: `New enquiry: ${d.name}${d.company ? `, ${d.company}` : ''}`, html });
    if (sent.error) throw new Error(sent.error.message);
    await resend.emails.send({
      from: FROM, to: [d.email], replyTo: TO, subject: 'We have your message | Syntalix Consultancy',
      html: `<p>Hi ${esc(d.name)},</p><p>Thanks for reaching out to Syntalix Consultancy. We have your message and will reply within 24 hours to set up a free 30-minute scoping call.</p><p>If it is urgent, message us on WhatsApp: <a href="https://wa.me/919259750107">+91 92597 50107</a>.</p><p>The Syntalix Team</p>`,
    }).catch((e) => console.error('contact: auto-reply failed', e));
    return reply(request, 200, { ok: true });
  } catch (e) {
    console.error('contact: send failed', e);
    return reply(request, 502, { error: 'We could not send your message. Please email info@syntalixconsultancy.com.' });
  }
};
