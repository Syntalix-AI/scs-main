# SEO / AEO Action Plan: syntalixconsultancy.com (2026-10-04)

Current score is 90/100. With the quick wins below it is projected at about 94, and about 96 once the strategic items are done. Details and evidence are in `FULL-AUDIT-REPORT.md`.

## 1. Immediate (live problem)
| # | Action | Owner | Effort |
|---|---|---|---|
| 1 | Fix HTTPS on `kordstudio.syntalixconsultancy.com` (server `32.192.206.34` refuses :443). Until it is back, hide or unlink the KORD card on the homepage. | User (KORD hosting) / Claude (hide card) | 15 min |

## 2. Quick wins (high impact, low effort)
| # | Action | Where | Effort |
|---|---|---|---|
| 2 | Render each FAQ question as `<h3>` inside `<summary>`, and keep answers at 30–55 words. This affects all 6 service pages, the homepage and contact. | `src/components/Faq.astro`, `src/data/services.ts` | 30 min |
| 3 | Add a 40–55 word "What is <service>?" answer paragraph under a question H2 near the top of each service page, starting with the term ("LLM engineering is…"). | `src/data/services.ts` (new `definition` field), `src/pages/services/[slug].astro` | 1–2 h |
| 4 | Add `datePublished` and `dateModified` to the WebPage, Service and Article nodes, and a visible "Updated <date>" on case studies. | `src/lib/schema.ts`, `src/data/sitemap-dates.mjs` | 30 min |
| 5 | In GSC, request indexing for the 10 remaining URLs: 2 case studies, /portfolio, /blog, 3 posts, /about, /careers, /contact. | GSC (Claude via Chrome, or the user) | 15 min |

## 3. Strategic (high impact, more effort)
| # | Action | Effort |
|---|---|---|
| 6 | Expand both case studies to 700+ words: client brief, constraints, architecture, stack choices, what shipped and when, the client quote and a live link. No metrics unless the client confirms them. | 1 day (Claude drafts, user fact-checks) |
| 7 | Cite 2–3 primary sources per blog post and service page (vendor docs, papers, government data) to lift citation readiness from 59–66 to 80+. | 2–3 h |
| 8 | Publish 1–2 commercial-intent posts a month, each linking to a service: RAG development in India, AI agent development cost, fine-tuning vs RAG, how to choose an AI consulting firm. | ongoing |
| 9 | Grow third-party entity mentions: ask Jeff, Muadd and Aryan for Clutch reviews, and get listed in Indian and global AI-agency directories. These feed the Knowledge Graph and AI answers. | ongoing |

## 4. Maintenance / backlog
| # | Action |
|---|---|
| 10 | Mark `generate_lead` as a GA4 key event (Admin → Data display → Key events). This needs the Google account that owns G-P819Y0LVBH. |
| 11 | Optional: defer the lead-form script on blog posts until the form is near the viewport (TBT 216 ms → under 150 ms). |
| 12 | Add `PAGESPEED_API_KEY` to `~/.agentic-seo/.env` so future audits get real-user (CrUX) data. |
| 13 | Only if there is a staffed office: create a Google Business Profile and add it to `sameAs`. |
| 14 | Re-run this audit in 4–6 weeks, after GSC has indexed everything and CrUX has data. |

## Not to do
- Don't create Wikipedia, Wikidata or X profiles just for SEO.
- Don't add a WebSite SearchAction: Google retired the sitelinks search box, and the site has no search.
- Don't remove FAQPage schema. It won't produce rich results for a commercial site, but it is valid and helps AI engines.
- Don't "fix" the Fiverr and Clutch 403s: they only block bots.
