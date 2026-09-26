# Full SEO Audit: syntalixconsultancy.com

- **Scope:** full site. All 21 sitemap URLs were crawled live, plus a review of the Next.js source at `main@7c14062`.
- **Date:** 2026-09-26
- **Business type:** Agency / AI-ML consultancy (India-based, serving India and international clients)
- **Overall SEO health:** **65 / 100: Needs Improvement** (score confidence: Medium, because Core Web Vitals could not be measured)

The site is technically clean: HTTPS, security headers, a 308 redirect from the bare domain to `www`, a valid sitemap and robots.txt, canonicals on every page, and an llms.txt that scored 100/100. The score is held back by four things:

1. Page-level structured data never reaches the server-rendered HTML.
2. There is little depth where it matters for trust: thin case studies, unverified testimonials, and a "0 Projects Delivered" counter in the server HTML.
3. Internal links to blog posts and case studies are weak.
4. The design is heavy on lead capture, including an auto-popup on every visit.

---

## A) Audit Summary

### Top issues
1. **Page-level JSON-LD is injected client-side only.** Service, FAQ and Breadcrumb schema on the service pages and `/about` are not in the server-rendered HTML. (Confirmed)
2. **Trust and E-E-A-T gaps.** Case studies are about 200 words with anonymous clients. Testimonials carry Google "G" badges but don't link to Google reviews. There are no named authors on the blog. (Confirmed)
3. **The stats counter renders "0+ / 0% / 0/7" in the server HTML**, and that is what non-JS crawlers and AI bots see. (Confirmed)
4. **An auto-popup lead form opens 5 seconds after every page load**, with no "already dismissed" memory. This is an intrusive-interstitial risk on mobile. (Confirmed)
5. **Blog posts and case studies are nearly orphaned.** Blog posts get 3 inbound links each and case studies get 1. None are linked from the homepage or the service pages. (Confirmed)

### Top opportunities (quick wins)
1. Swap `next/script` for a plain `<script type="application/ld+json">` on 7 pages. This takes about 15 minutes and makes all page schema visible to every crawler.
2. Render the counter's final numbers on the server and animate them on the client.
3. Trim 9 meta descriptions that run over 160 characters, and fix the duplicated title on `/contact`.
4. Add `BlogPosting` schema to blog posts and `Article` schema to case studies.
5. Noindex or delete `/typography`, which is a dev page that is currently indexable.

---

## B) Findings Table

| # | Area | Finding | Severity | Confidence |
|---|------|---------|----------|------------|
| 1 | Schema | Page-level JSON-LD is rendered via `next/script` and missing from the SSR HTML | 🔴 Critical | Confirmed |
| 2 | Content | Homepage counter SSR text is "0 + Projects Delivered / 0 % / 0 /7" | ⚠️ Warning | Confirmed |
| 3 | Content/E-E-A-T | Case studies are thin (~190–205 words) with no client, dates, stack or people | ⚠️ Warning | Confirmed |
| 4 | Content/E-E-A-T | Testimonials show Google badges but aren't linked or verifiable | ⚠️ Warning | Likely |
| 5 | UX/Technical | Auto-popup modal on every visit after 5 s (`PopUpForm.jsx:11`) | ⚠️ Warning | Confirmed |
| 6 | Internal links | Blog posts have 3 inbound links and case studies have 1; none come from home or service pages | ⚠️ Warning | Confirmed |
| 7 | Schema | No `BlogPosting`/`Article` schema on blog posts or case studies | ⚠️ Warning | Confirmed |
| 8 | Schema | `Organization` uses LocalBusiness-only props (`priceRange`, `openingHours`) | ⚠️ Warning | Confirmed |
| 9 | Schema | `WebSite.SearchAction` targets `/blog?q=`, but the blog has no search | ⚠️ Warning | Confirmed |
| 10 | Technical | `/typography` is live with 200 + `index, follow` (dev/demo page) | ⚠️ Warning | Confirmed |
| 11 | On-page | 9 meta descriptions are over 160 chars (up to 213) | ⚠️ Warning | Confirmed |
| 12 | On-page | `/contact` title duplicates the brand ("… \| Syntalix Consultancy \| Syntalix Consultancy") | ⚠️ Warning | Confirmed |
| 13 | Content | `/careers` has 37 words and `/contact` has 72 | ⚠️ Warning | Confirmed |
| 14 | Performance | Navbar logo `<Image fill>` has no `sizes`, so a 40 px logo is served at `w=3840` | ⚠️ Warning | Confirmed |
| 15 | Images | Service PNGs are 380–440 KB each in `public/services` | ⚠️ Warning | Confirmed |
| 16 | Technical | 6 pages have no `<main>` landmark (home, team, 4× case studies) | ℹ️ Info | Confirmed |
| 17 | Schema | `/team` emits a second, separate `Organization` node | ℹ️ Info | Confirmed |
| 18 | Schema | `FAQPage` on home and service pages: no rich results for commercial sites since 2023 | ℹ️ Info | Confirmed |
| 19 | Technical | `http://` → `https://` → `https://www` is a 2-hop chain | ℹ️ Info | Confirmed |
| 20 | Entity | `sameAs` Clutch URL returned 403 in the July audit, and the Google Search Console verification token is empty | ℹ️ Info | Likely |
| 21 | Content | "Why Customer's Love Us" has a grammar error (`Testimonials.jsx:238`) | ℹ️ Info | Confirmed |
| 22 | Repo hygiene | About 1 MB of stale audit HTML/JSON dumps plus an 18 MB `public/PNGs` folder that no code references are committed | ℹ️ Info | Confirmed |

---

## C) Detailed Findings

### Technical SEO: 78/100

**Passes**
- ✅ HTTPS with HSTS preload, CSP, X-Frame-Options, nosniff, Referrer-Policy and Permissions-Policy. Security headers score 100/100.
- ✅ The bare domain returns a 308 to `www` in one hop. Unknown URLs return a real 404.
- ✅ `robots.txt` allows search engines and AI assistants (GPTBot, ClaudeBot, PerplexityBot, Google-Extended, and others), blocks CCBot and Bytespider, and disallows `/api/`. The sitemap is declared.
- ✅ The sitemap lists 21 URLs and all of them return 200 with a self-referencing canonical.
- ✅ Preview deploys are sent `X-Robots-Tag: noindex` through `VERCEL_ENV` (`next.config.mjs`).
- ✅ Broken links: 0 of 19 checked on the homepage.

**Issues**
- **`/typography` is indexable.** *Evidence:* HTTP 200, `<meta name="robots" content="index, follow">`, title "Typography - Syntalix Consultancy Services". *Impact:* a thin, off-topic URL in the index and a crawl-budget leak. *Fix:* delete `src/app/(routes)/typography`, or add `robots: { index: false }` to its metadata. The same applies to the `SyntalixFontDemo` and `TypographyShowcase` components.
- **Missing `<main>` landmark** on `/`, `/team`, `/case-studies` and `/case-studies/*`. *Impact:* crawlers and AI extractors use `<main>` to isolate primary content, and it also matters for accessibility. *Fix:* wrap page content in `<main>`.
- **HTTP redirect chain.** `http://syntalixconsultancy.com` takes 2 hops (http→https→www). This is minor because HSTS preload removes it for returning browsers. It can be fixed with a single-hop redirect in Vercel domain settings.
- **Google Search Console verification is empty** (`layout.js`, `verification.google: ''`). If GSC is verified through DNS this is fine. Otherwise, fill it in or remove the key.

### Content Quality / E-E-A-T: 55/100

| Page | Words | Verdict |
|------|------:|---------|
| Service pages (6) | 818–1168 | ✅ Good depth |
| Blog posts (3) | 1034–1088 | ✅ Good, but no named author |
| `/about` | 396 | ⚠️ Light for a trust page |
| Case studies (3) | 188–204 | 🔴 Thin |
| `/case-studies` | 129 | ⚠️ Thin hub |
| `/contact` | 72 | ℹ️ Acceptable for contact |
| `/careers` | 37 | ⚠️ Thin |

- **Case studies are the weakest pages on the site.** At about 200 words each, they describe "a leading financial and legal advisory firm" and "a national retail brand" without names, timelines, team, stack detail, architecture or quotes. For an AI consultancy founded in 2025, case studies are the main proof of experience. *Fix:* expand each to 800+ words with the problem, approach, architecture diagram, stack, timeline, measurable results and a client quote. Use a named client with permission, or an anonymized but specific one ("Series-B fintech, 40-person ops team").
- **Unverifiable testimonials.** Five testimonials (for example "Jeff Schwartz, Tech Entrepreneur, US") each show a Google "G" icon, but there is no link to a Google Business Profile or review source. *Impact:* if these are not real Google reviews, the badge misrepresents their source. That is a trust and consumer-protection risk (FTC and ASCI endorsement rules) and a quality-rater red flag. *Fix:* link each one to its real source (GBP, Clutch, Fiverr, LinkedIn recommendation). Otherwise remove the Google badge and use only testimonials you can attribute.
- **Counter shows zeros to crawlers.** `CounterComp.jsx` renders `0` until `inView`, so the server HTML reads "Our Track Record | 0 + Projects Delivered | 0 % Client Satisfaction | 0 /7 Support". AI crawlers that don't run JS (GPTBot, ClaudeBot, PerplexityBot) index those zeros. *Fix:* render `end` on the server and animate on the client, or wrap the number in `<noscript>`.
- **No author entities on the blog.** Posts are attributed to "Syntalix Consultancy Services". *Fix:* add named authors with a bio page, LinkedIn `sameAs`, and `Person` schema.
- **Blog volume is low.** There are 3 posts, the latest dated 2026-06-08, so nothing has been published in about 3.5 months. Topical authority for "LLM engineering India" and "agentic AI" needs a steady cadence (2–4 posts per month) that links into the service pages.

### On-Page SEO: 70/100

- ✅ All 21 pages have exactly one H1 and a unique, descriptive title. `/about`'s H1 is `sr-only`. That's acceptable, but a visible H1 would be better.
- **Meta descriptions over 160 chars:** home (186), `/services` (195), `/services/ai-consulting` (213), `/services/agentic-systems` (189), `/services/llm-engineering` (185), `/services/ai-ml-infrastructure` (182), `/blog/rise-of-agentic-ai` (181), `/portfolio` (178), `/case-studies` (176). Google truncates these at about 155–160 characters.
- **Case-study meta descriptions are short** (85–95 chars). Expand them to 140–155.
- **`/contact` title:** "Contact Us | Syntalix Consultancy | Syntalix Consultancy". `contact/metadata.js` already includes the brand and the root template appends it again. Set `title: 'Contact Us'`.
- **Blog title length:** "What is LLM Engineering and Why Your Business Needs It | Syntalix Consultancy" is 77 characters. Consider `title: { absolute: ... }` for long post titles.
- **Internal linking** (contextual links, excluding nav and footer):

| Target | Total inbound | Contextual inbound |
|---|---:|---:|
| Blog posts (each) | 3 | 3 (blog index + sibling posts only) |
| Case studies (each) | 1 | 1 (hub only) |
| `/services/aeo-optimization` | 20 | 1 |
| `/services/ai-consulting` | 20 | 2 |
| `/portfolio`, `/team`, `/about` | 20 | 0 |

  *Fix:* add a "Related case study" block and a "Further reading" block to each service page. Add a "Latest insights" strip to the homepage. Add contextual links from blog posts to the matching service page, and put the case studies and blog in the footer.

### Schema / Structured Data: 45/100

**What exists in server HTML (every page):** `Organization` and `WebSite`. The homepage adds `FAQPage`. `/case-studies` and `/team` add `BreadcrumbList`.

- 🔴 **Page schema is client-injected only.** The 6 service pages and `/about` use `import Script from "next/script"` with `<Script type="application/ld+json">`. `next/script` defaults to `afterInteractive`, so the JSON only exists inside the RSC flight payload (`self.__next_f.push(...)`) and is added to the DOM after hydration. The live HTML of `/services/llm-engineering` contains exactly **two** `<script type="application/ld+json">` tags, and neither is the breadcrumb or the FAQ. Google may pick these up after rendering. Bing is inconsistent, and AI crawlers generally won't. *Fix:* in these 7 files, replace `<Script id=... type="application/ld+json" dangerouslySetInnerHTML=...>` with a plain `<script type="application/ld+json" dangerouslySetInnerHTML=...>`, or with the existing `BreadcrumbSchema` / `FAQSchema` components from `src/components/SchemaOrg.jsx`:
  - `src/app/(routes)/about/page.jsx`
  - `src/app/(routes)/services/{aeo-optimization,agentic-systems,ai-consulting,ai-ml-infrastructure,llm-engineering,web-mobile-development}/page.jsx`
- **Missing types:**
  - `Service` (with `provider` → `#organization` and `areaServed`) on each service page
  - `BlogPosting` (headline, datePublished, dateModified, author `Person`, image, publisher) on blog posts
  - `Article` on case studies
  - `BreadcrumbList` on blog and case-study detail pages
- **Invalid properties on `Organization`:** `priceRange` and `openingHours` belong to `LocalBusiness`. Either drop them or change the type to `ProfessionalService` (a LocalBusiness subtype), which suits a consultancy with a physical address. `serviceType` is also not an Organization property.
- **`SearchAction`** points to `/blog?q={search_term_string}`, but `BlogListingClient` doesn't read `q`. Google also retired the sitelinks search box in Nov 2024. Remove `potentialAction`.
- **`FAQPage`:** Google restricted FAQ rich results to government and health sites in Aug 2023. The markup is harmless and still helps AI extraction, but it won't produce SERP features, so it shouldn't be counted on for CTR.
- **`/team`** outputs its own `Organization` block. Reference `{"@id": ".../#organization"}` instead of redefining the entity.
- **`areaServed`** lists 25 cities and states. That's fine in schema, but without city landing pages it adds little and can look like keyword stuffing next to the 30+ city `keywords` meta. The `keywords` meta tag is ignored by Google and can be removed.

### Performance: 60/100 (Low confidence)

PageSpeed Insights was rate-limited (environment limitation), so there is no field or lab CWV data. The observed signals are:
- The navbar logo is served at `w=3840` because `<Image fill>` has no `sizes`. That's a wasted, priority-loaded request on every page. *Fix:* add `sizes="40px"`.
- The hero right column is a client-side form, so LCP is likely the H1 text, which is good. The `IntroAnimation` is correctly disabled.
- Dependencies include `three`, `@react-three/fiber`, `@react-three/drei`, `framer-motion`, `swiper`, `flowbite-react` and `@google/generative-ai`. Confirm that three.js isn't in the homepage bundle (`ThreeScene.jsx` exists), and remove unused packages.
- `FadeInSection` hides content until it scrolls into view, which leaves large blank areas on screen and can hurt CLS and perceived performance.
- There are 19 JS chunks on the homepage.
- *Next step:* rerun `pagespeed.py` with a `PAGESPEED_API_KEY`, or check Search Console → Core Web Vitals.

### Images: 70/100
- ✅ All `<img>` elements on every crawled page have an `alt` attribute.
- ⚠️ `public/services/*.png` files are 380–440 KB. `next/image` optimizes them on request, but the source files should be WebP/AVIF at 1600 px or less.
- ⚠️ Two homepage images are hot-linked from `assets.lummi.ai` (stock). Self-host them, and consider real team or office photography for E-E-A-T.
- ℹ️ `public/PNGs/` (18 MB, `Grad_*.png`) isn't referenced anywhere in `src`. Delete it.
- ℹ️ The folder `public/portfolio png/` has a space in the path, which produces `%20` URLs. Rename it to `public/portfolio/`.

### AI Search Readiness (GEO): 80/100
- ✅ `llms.txt` and `llms-full.txt` are present and complete (score 100).
- ✅ AI assistants are explicitly allowed. The legal entity (LLPIN ACR-6280) is stated consistently.
- ⚠️ The client-injected schema (#1) and the zero counters (#2) directly weaken what non-JS AI crawlers extract.
- ⚠️ AI engines favour content that is easy to cite: specific numbers, named entities, and dated facts. Deeper case studies and named authors are the biggest improvement available here.

---

## D) Design Review (for the planned revamp)

These notes come from desktop screenshots taken at 1440 px. Mobile layout was reviewed from code only, because the browser window couldn't be resized below ~1255 px.

| Observation | Why it matters | Revamp direction |
|---|---|---|
| **Four competing lead captures:** hero form, auto-popup at 5 s, sticky WhatsApp button, and the "Get in Touch" nav CTA | Feels pushy for a B2B consultancy, and the popup covers content on every visit | Keep one primary CTA ("Book a 30-min AI scoping call") and one secondary (WhatsApp). Drop the auto-popup, or show it once per session on exit-intent (desktop only) |
| **Generic indigo→violet gradient SaaS look** (buttons, counter band, pills) | Indistinguishable from thousands of AI-agency templates, with no ownable brand | Pick a tighter palette built around the logo's purple, one accent colour and plenty of neutrals, and use gradients sparingly |
| **Large empty gaps** (hidden until `FadeInSection` triggers) | Page looks broken mid-scroll, and there's 7,955 px of height for modest content | Remove the fade-gating, or make it subtle (opacity 0.9→1, no layout hiding). Tighten vertical rhythm |
| **9 nav items + theme toggle + CTA** | Cognitive load, and it gets cramped on mid widths | Services (mega-menu of 6) · Work (Case Studies + Portfolio) · Insights (Blog) · Company (About, Team, Careers) · Contact CTA |
| **Mixed icon styles** in the services grid (grey line-art on white squares, e.g. a sailboat for "Desktop Software") | Looks assembled from different kits | Use one icon set (Lucide is already installed) in brand colour |
| **Testimonials with stock-style avatars and Google badges** | Trust risk (see Content) | Use real logos and quotes with source links, or a "clients we've worked with" logo wall |
| **Tech logo cloud** (HTML5, CSS3, Java…) | Signals commodity dev shop rather than AI specialist | Replace with outcome metrics or client logos. Keep the stack to one line on service pages |
| **Home hero H1:** "Software, AI & ML Development Company in India" | Keyword-led but not differentiated | Keep the keyword in the H1 but add a sharp value line, e.g. "Production LLM & agentic systems, shipped in weeks" |
| **Homepage doesn't surface work** | The strongest proof (case studies) is two clicks deep | Add a case-study carousel with metric cards directly under the hero |
| Copy errors: "Why Customer's Love Us" | Polish and trust | Fix to "Why Customers Love Us" |

A revamp is the right moment to fix the structural SEO items together: `<main>` landmarks, server-rendered stats, schema components, internal-link modules, and one lead form.

---

## E) Environment Limitations
- **PageSpeed Insights API:** rate-limited (HTTP 429) with no key, so CWV scores are directional only.
- **Mobile screenshots:** the Chrome window wouldn't resize below ~1255 px, so mobile was reviewed from Tailwind classes only.
- **Playwright** isn't installed, so `capture_screenshot.py` and `analyze_visual.py` were skipped.
- **Backlinks, GSC and GA data** were not accessed. Search Console coverage and queries should be checked next.

## F) Score Breakdown

| Category | Weight | Score | Weighted |
|---|---:|---:|---:|
| Technical SEO | 25% | 78 | 19.5 |
| Content Quality | 20% | 55 | 11.0 |
| On-Page SEO | 15% | 70 | 10.5 |
| Schema | 15% | 45 | 6.8 |
| Performance | 10% | 60 (low conf.) | 6.0 |
| Images | 10% | 70 | 7.0 |
| AI Search Readiness | 5% | 80 | 4.0 |
| **Total** | | | **≈ 65** |
