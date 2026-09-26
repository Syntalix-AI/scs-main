# syntalixconsultancy.com

The Syntalix Consultancy website. Astro 7, zero client-side framework, deployed on Vercel.

## Run it

```bash
npm install
npm run dev          # http://localhost:4321
npm run build        # builds, then runs the SEO guardrail (fails on any error)
node scripts/serve-static.mjs 4400   # serve the built site locally with Vercel-style routing
node scripts/url-parity.mjs http://localhost:4400   # every pre-relaunch URL still resolves
```

## Environment

Copy `.env.example` to `.env` for local work, and set the same variables in Vercel (Production and Preview):

| Variable | Purpose |
|---|---|
| `RESEND_API_KEY` | Sends contact-form email. The form fails loudly without it. |
| `CONTACT_FROM` | Sender. Defaults to `Syntalix Consultancy <noreply@syntalixconsultancy.com>`; the domain must be verified in Resend. |
| `CONTACT_TO` | Recipient. Defaults to `info@syntalixconsultancy.com`. |

## Where things live

- `src/data/`: site facts (`site.ts`), services, client projects, case studies, testimonials, sitemap dates. Most copy is edited here.
- `src/content/blog/`: blog posts in Markdown with frontmatter (schema in `src/content.config.ts`).
- `src/components/`, `src/layouts/Base.astro`: UI, built from the Syntalix design system (tokens in `src/styles/tokens.css`).
- `src/lib/schema.ts`: JSON-LD for every page, rendered in the HTML.
- `src/pages/sitemap.xml.ts`, `public/robots.txt`, `public/llms.txt`, `src/pages/llms-full.txt.ts`: crawl files.
- `src/pages/api/contact.ts`: the only server route (Resend, validation, honeypot, rate limit).
- `vercel.json`: security headers, preview `noindex`, redirects.
- `scripts/seo-check.mjs`: build guardrail. `scripts/baseline.json`: URLs and metadata before the relaunch.
- `docs/seo/`: Search Console baseline and notes.

## Content rules

- Client work describes what we delivered. No client metrics, outcomes or claims.
- No individual team names or profiles. Blog posts are by "Syntalix Team".
- Real testimonials only, with sources. Never an aggregate rating.
- Images: editorial still life (generated) or real screenshots of live client sites.
