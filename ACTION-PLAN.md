# SEO Action Plan: syntalixconsultancy.com

- **Audit date:** 2026-09-26
- **Current score:** ≈ 65/100
- **Target after Phase 1–2:** 80+

See `FULL-AUDIT-REPORT.md` for the evidence behind each item.

## 🔴 Critical: this week (quick wins, ~1 day of dev)

| # | Task | Files | Effort |
|---|------|-------|--------|
| 1 | Replace `next/script` `<Script type="application/ld+json">` with a plain `<script>` (or the `SchemaOrg.jsx` components) so page schema ships in the SSR HTML | `about/page.jsx`, `services/*/page.jsx` (6) | 15 min |
| 2 | Render the counter's final values on the server and animate on the client | `components/Home/CounterComp.jsx` | 15 min |
| 3 | Stop the auto-popup on every visit: remove it, or show once per session (`sessionStorage`) and desktop-only | `components/Home/PopUpForm.jsx` | 15 min |
| 4 | Verify testimonial sources. Remove the Google badges unless each one links to a real Google review | `components/Home/Testimonials.jsx` | 30 min + business input |

## ⚠️ High: within 2 weeks

| # | Task | Files | Effort |
|---|------|-------|--------|
| 5 | Add `BlogPosting` + `BreadcrumbList` schema to blog posts, and `Article` + `BreadcrumbList` to case studies | `blog/[slug]/page.jsx`, `case-studies/[slug]/page.jsx` | 1 h |
| 6 | Add `Service` schema to each service page (provider → `#organization`) | `services/*/page.jsx` | 1 h |
| 7 | Clean up Organization schema: drop `priceRange`, `openingHours`, `serviceType` and `potentialAction` (SearchAction), or switch to `ProfessionalService`. Make `/team` reference `#organization` instead of redefining it | `app/layout.js`, `team/page.jsx` | 30 min |
| 8 | Noindex or delete `/typography` and the demo components | `app/(routes)/typography` | 5 min |
| 9 | Trim 9 meta descriptions to ≤155 chars and expand the 3 case-study descriptions to 140–155 | page metadata | 30 min |
| 10 | Fix the `/contact` duplicate title (`title: 'Contact Us'`) | `contact/metadata.js` | 2 min |
| 11 | Add `sizes="40px"` to the navbar logo `<Image fill>` (currently served at 3840 w) | `components/Navbar.jsx:95,175` | 2 min |
| 12 | Wrap page content in `<main>` on home, team and case-study pages | `app/page.js`, `team/page.jsx`, `case-studies/**` | 15 min |

## 🟡 Medium: within 1 month (strategic)

| # | Task | Effort |
|---|------|--------|
| 13 | Expand each case study to 800+ words (client context, architecture, stack, timeline, metrics, quote) and add 2–3 more | Content, 1–2 days each |
| 14 | Internal-link modules: "Related case study" + "Further reading" on service pages, "Latest insights" on the homepage, and blog → service contextual links. Add Case Studies and Blog to the footer | 0.5 day |
| 15 | Named blog authors with bio pages, `Person` schema and LinkedIn `sameAs` | 0.5 day + content |
| 16 | Blog cadence of 2–4 posts per month, each targeting a service keyword cluster (e.g. "RAG development company India", "AI agent development cost") | Ongoing |
| 17 | Expand `/careers` (open roles or a talent-pool pitch, culture, process) and `/about` (founders, story, registered-entity details) | 0.5 day |
| 18 | Get a PageSpeed API key and measure CWV. Audit the bundle for `three`/`@react-three/*`, `flowbite-react` and `@google/generative-ai`, and remove what's unused | 0.5 day |

## 🟢 Low: backlog / maintenance

| # | Task |
|---|------|
| 19 | Convert `public/services/*.png` (380–440 KB) to WebP. Self-host the `lummi.ai` stock images, or replace them with real photos |
| 20 | Delete the unreferenced `public/PNGs/` (18 MB) and rename `public/portfolio png/` → `public/portfolio/` |
| 21 | Remove stale audit dumps from the repo root (`page*.html`, `parse_*_output.json`, `seo-report*.html`) |
| 22 | Fix the `sameAs` Clutch URL (403) and fill in or remove the empty GSC `verification.google` |
| 23 | Remove the `keywords` meta (ignored by Google, and the 30+ city list looks stuffed) |
| 24 | Fix the copy: "Why Customer's Love Us" → "Why Customers Love Us" |
| 25 | Single-hop HTTP redirect (`http://` → `https://www.`) in Vercel domain settings |

## 🎨 Design revamp: fold these SEO items in
If the redesign goes ahead, build these in from the start instead of patching them later:
- One lead-capture pattern (hero CTA + contact page), with no timed popup
- Case-study metric cards directly under the hero
- A simpler IA: Services · Work · Insights · Company · Contact
- Server-rendered stats, `<main>` landmarks, and schema components per template
- Reusable "related content" internal-link blocks
- Real photography and attributable testimonials
