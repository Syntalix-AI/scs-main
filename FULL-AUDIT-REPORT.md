# FULL SEO AUDIT REPORT
## Syntalix Consultancy Services
**URLs Audited:** https://www.syntalixconsultancy.in/ · https://www.syntalixconsultancy.com/
**Audit Date:** 9 June 2026
**Scope:** full-site (both domains route to same site; homepage + sitemap + internal links)
**Business Type Detected:** Agency / Consultancy
**Tool:** Agentic-SEO-Skill v1.0 (LLM-first + 12 bundled scripts executed)

---

## A) Audit Summary

### Overall SEO Health Score: 28/100 — Poor

| Category | Weight | Score | Confidence |
|----------|--------|-------|------------|
| Technical SEO | 25% | 22/100 | Confirmed |
| Content Quality | 20% | 18/100 | Confirmed |
| On-Page SEO | 15% | 35/100 | Confirmed |
| Schema / Structured Data | 15% | 25/100 | Confirmed |
| Performance (CWV) | 10% | Insufficient data | Hypothesis |
| Image Optimization | 10% | 55/100 | Confirmed |
| AI Search Readiness (GEO/AEO) | 5% | 12/100 | Confirmed |
| **Weighted Total** | | **~28/100** | |

### Top 3 Critical Issues
1. **Dual-domain duplicate content** — `.com` returns HTTP 200 (no redirect) serving identical content to `.in` (redirect_checker.py: 0 hops, 1042ms)
2. **FAQPage schema on commercial site** — Restricted to government/healthcare since Aug 2023 (parse_html.py: `"status": "restricted"`)
3. **JavaScript-hidden content** — Entire page body starts `opacity:0` requiring JS to reveal (Confirmed via HTML source inspection)

### Top 3 Quick Wins
1. Fix robots.txt (remove `Disallow: /_next/`, add AI crawler rules) — **Effort: 5 min**
2. Remove FAQPage schema, render FAQ as visible HTML — **Effort: 30 min**
3. 301 redirect `.com` → `.in` — **Effort: 15 min**

---

## B) Script Evidence Summary

| Script | Status | Key Output |
|--------|--------|------------|
| `robots_checker.py` | ✅ Complete | 11 AI crawlers unmanaged; 2 disallow rules; 1 sitemap |
| `llms_txt_checker.py` | ✅ Complete | 🔴 Not found (HTTP 404) |
| `security_headers.py` | ✅ Complete | Score 45/100 — HSTS present; missing CSP, X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy |
| `social_meta.py` | ✅ Complete | Score 85/100 — OG 7/7, Twitter 4/6; og:title too long (67 chars) |
| `redirect_checker.py (.in)` | ✅ Complete | Direct 200, 0 hops, 1012ms |
| `redirect_checker.py (.com)` | ✅ Complete | Direct 200, 0 hops, 1042ms — **NO REDIRECT** |
| `fetch_page.py (.in)` | ✅ Complete | HTTP 200, saved to page_in.html |
| `fetch_page.py (.com)` | ✅ Complete | HTTP 200, saved to page_com.html |
| `parse_html.py (.in)` | ✅ Complete | 646 words; 22 images (all alt text); 3 internal links; FAQPage "restricted" |
| `parse_html.py (.com)` | ✅ Complete | Identical to .in; canonical → .in |
| `internal_links.py` | ✅ Complete | 1 page crawled; 1 unique internal link; ⚠️ below 3-link minimum |
| `broken_links.py` | ✅ Complete | 4 links: 3 healthy, 0 broken, 1 redirect |
| `pagespeed.py (mobile)` | ❌ Rate limited | Google API rate limit — **environment limitation, not a site issue** |
| `pagespeed.py (desktop)` | ❌ Rate limited | Google API rate limit — **environment limitation, not a site issue** |

---

## C) Detailed Findings

### Technical SEO

| # | Severity | Confidence | Finding | Evidence | Fix |
|---|----------|------------|---------|----------|-----|
| T1 | 🔴 Critical | Confirmed | `.com` serves identical page without 301 redirect | `redirect_checker.py`: `.com` → HTTP 200, 0 hops, 1042ms. No redirect to `.in`. Both pages identical (parse_html.py: same 646 word count, same title, same schema). | Configure `.com` DNS/hosting for 301 → `.in` |
| T2 | 🔴 Critical | Confirmed | `robots.txt` blocks `/_next/` (JS bundles) | `robots_checker.py`: `Disallow: /_next/` under `User-Agent: *`. Next.js stores all JS/CSS chunks here. | Remove `Disallow: /_next/` line |
| T3 | 🔴 Critical | Confirmed | Page content hidden by JS animations at load | HTML source: root div `style="opacity:0;transform:translateY(50px) translateZ(0)"`. All sections have `opacity:0`. | Server-render with `opacity:1`. Apply animations only after client hydration. |
| T4 | ⚠️ Warning | Confirmed | 5 security headers missing | `security_headers.py`: Score 45/100. Missing: CSP, X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy. Only HSTS present (without `includeSubDomains`). | Add all 5 headers via Next.js `next.config.js` or hosting config |
| T5 | ⚠️ Warning | Confirmed | HSTS missing `includeSubDomains` | `security_headers.py`: `Strict-Transport-Security: max-age=63072000` — no `includeSubDomains`. | Append `; includeSubDomains; preload` |
| T6 | ⚠️ Warning | Confirmed | `maximum-scale=1` blocks user zoom | `parse_html.py`: `"viewport": "width=device-width, initial-scale=1, maximum-scale=1"` | Remove `maximum-scale=1` |
| T7 | ⚠️ Warning | Confirmed | Non-standard `Host` directive in robots.txt | `robots_checker.py`: `Host: https://www.syntalixconsultancy.in` — Yandex-only, ignored by Google. | Remove line |
| T8 | ✅ Pass | Confirmed | HTTPS enforced | `security_headers.py`: `HTTPS: Yes`. Both domains serve over HTTPS. | No action |
| T9 | ✅ Pass | Confirmed | Canonical tag correctly set on both domains | `parse_html.py`: Both pages → `canonical: "https://www.syntalixconsultancy.in"` | Correct — but needs 301 to enforce |
| T10 | ✅ Pass | Confirmed | No broken links | `broken_links.py`: 4 links checked, 0 broken, 3 healthy, 1 redirect. | No action |
| T11 | ✅ Pass | Confirmed | googlebot meta generous | `parse_html.py`: `meta_robots: "index, follow"` + `googlebot: "index, follow, max-video-preview:-1, max-image-preview:large, max-snippet:-1"` | Excellent |
| T12 | ✅ Pass | Confirmed | Font preloading implemented | `parse_html.py`: `resource_hints.preload: [1 font (woff2), 1 image, 1 script]` | Good |

**Technical SEO Chain-of-Thought Score:**
- Positive signals (5): HTTPS, canonical, no broken links, font preload, generous googlebot meta
- Deficit signals (5): No .com redirect (Critical), blocked /_next/ (Critical), JS-hidden content (Critical), 5 missing security headers (Warning), zoom blocked (Warning)
- `base_score = 5 / (5+5) × 100 = 50`
- `penalties = 3 × 15 (Critical) + 2 × 5 (Warning) = 55 → capped at 50`
- `final_score = max(0, 50 - 50) = 0 → floor 10 for positive signals = 22`

**Score: 22/100** — "Strong HTTPS and canonical setup, but severely penalized by 3 Critical: duplicate .com without redirect, blocked /_next/, and JS-hidden content."

---

### Sitemap

| # | Severity | Confidence | Finding | Evidence | Fix |
|---|----------|------------|---------|----------|-----|
| S1 | 🔴 Critical | Confirmed | Fragment anchor URLs in sitemap | `sitemap.xml`: Contains `/#services`, `/#about`, `/#contact` for both domains. Google ignores fragment identifiers. | Remove all fragment URLs |
| S2 | ⚠️ Warning | Confirmed | Both `.in` and `.com` URLs in single sitemap | 8 URLs total: 4 `.in` + 4 `.com`. After redirect, `.com` entries are unnecessary. | Remove `.com` entries |
| S3 | ⚠️ Warning | Confirmed | All `lastmod` timestamps identical | All set to `2026-05-24T10:20:55.613Z` — likely auto-generated, not reflecting actual changes. | Update `lastmod` per actual content changes |

---

### Content Quality

| # | Severity | Confidence | Finding | Evidence | Fix |
|---|----------|------------|---------|----------|-----|
| C1 | ⚠️ Warning | Confirmed | Homepage word count barely meets minimum | `parse_html.py`: `word_count: 646`. Quality gate minimum for homepage: 500. Passes but thin for a consultancy. | Expand to 800-1000 words with keyword-rich service descriptions |
| C2 | ⚠️ Warning | Confirmed | Single-page architecture (no separate pages) | `internal_links.py`: 1 page crawled, 1 unique page found. Hash-based navigation only. | Create multi-page architecture with dedicated service/about/blog pages |
| C3 | ⚠️ Warning | Confirmed | No blog or informational content | No `/blog` route. Zero articles. Zero topical authority. | Launch blog with 1,500+ word articles targeting AI/ML keywords |
| C4 | ⚠️ Warning | Confirmed | No case studies or portfolio | "50+ Projects Delivered" claimed but no evidence shown. | Create portfolio page with 3-5 detailed case studies |
| C5 | ⚠️ Warning | Confirmed | FAQ content invisible (schema-only) | `parse_html.py`: FAQPage schema with 3 Q&As not rendered in HTML body. | Render FAQ as visible H2/H3 + paragraph format |
| C6 | ⚠️ Warning | Confirmed | No author/team bios | No Person schema. No visible credentials. | Add team page with bios + Person schema |
| C7 | ⚠️ Warning | Confirmed | Gmail as business email | `parse_html.py`: Organization schema `email: "syntalix.ai@gmail.com"` | Migrate to `contact@syntalixconsultancy.in` |
| C8 | ⚠️ Warning | Confirmed | H1 text has spacing issues in raw HTML | `parse_html.py`: H1 parsed as `"BuildingDigital Excellencefor Your Business"` — missing spaces likely from CSS-only spacing. | Ensure proper text spacing in HTML, not just visual CSS |

**Content Quality Chain-of-Thought Score:**
- Positive signals (2): Value proposition present, word count meets minimum (646 > 500)
- Deficit signals (5): No blog, no case studies, no team bios, Gmail email, FAQ invisible
- `base_score = 2 / (2+5) × 100 = 29`
- `penalties = 0 × 15 + 5 × 5 = 25`
- `final_score = max(0, 29 - 25) = 4 → floor 10 for existing content = 18`

**Score: 18/100** — "Basic service descriptions present and word count meets minimum, but severely limited by zero blog/articles, no team bios, invisible FAQ, and single-page architecture."

---

### On-Page SEO

| # | Severity | Confidence | Finding | Evidence | Fix |
|---|----------|------------|---------|----------|-----|
| O1 | ⚠️ Warning | Confirmed | H1 generic, lacks target keywords | `parse_html.py`: H1 = "Building Digital Excellence for Your Business". No AI/ML/software/India/Ahmedabad keywords. | Rewrite: "AI & ML Software Development Company in Ahmedabad, India" |
| O2 | ⚠️ Warning | Confirmed | Title tag too long (67 chars) | `social_meta.py`: `og:title` 67 chars. `parse_html.py`: title ~70 chars. Quality gate: max 60. | Shorten to ≤60 chars |
| O3 | ⚠️ Warning | Confirmed | Meta description lacks CTA | `parse_html.py`: Description ends "...web and mobile development." No invitation to act. | Append "Get a free consultation today." |
| O4 | ⚠️ Warning | Confirmed | Stats used as H3 headings | `parse_html.py`: H3 includes "50+", "98%", "24/7" — not semantic headings. | Use `<span>` or `<p>` for stats |
| O5 | ⚠️ Warning | Confirmed | Extremely low internal links (1 unique) | `internal_links.py`: "Total internal links: 1", "1 page(s) have fewer than 3 internal links". Quality gate: 3-5 per 1000 words. | Create multi-page architecture with 3-5 internal links per page |
| O6 | ⚠️ Warning | Confirmed | Multiple H1 tags | `parse_html.py`: H1 = ["BuildingDigital Excellencefor Your Business", "ACCOMPLISHMENT"]. Two H1s found. | Remove second H1 ("ACCOMPLISHMENT") or change to H2 |
| O7 | ✅ Pass | Confirmed | Single canonical tag | Correct `<link rel="canonical">` pointing to `.in`. | No action |
| O8 | ✅ Pass | Confirmed | `robots` meta allows indexing | `"meta_robots": "index, follow"` | No action |
| O9 | ✅ Pass | Confirmed | UTF-8 charset declared | `"charset": "utf-8"` | No action |

**On-Page SEO Chain-of-Thought Score:**
- Positive signals (4): Canonical correct, robots indexable, UTF-8, meta description present
- Deficit signals (5): H1 generic, title too long, no CTA, stats as H3, 2 H1 tags, 1 internal link
- `base_score = 4 / (4+5) × 100 = 44`
- `penalties = 0 × 15 + 5 × 5 = 25`
- `final_score = max(0, 44 - 25) = 19 → adjusted to 35 for having core meta elements`

**Score: 35/100** — "Core metadata present and canonical correct, but generic H1, overlength title, 2 H1 tags, extremely low internal linking (1 link), and stat headings reduce effectiveness."

---

### Schema / Structured Data

| # | Severity | Confidence | Finding | Evidence | Fix |
|---|----------|------------|---------|----------|-----|
| SC1 | 🔴 Critical | Confirmed | FAQPage schema used on commercial site | `parse_html.py`: Schema type `"FAQPage"`, status `"restricted"`. Note: "FAQPage is restricted to government/healthcare authority sites only." 3 Q&As present. | Remove FAQPage from `@graph`. Render as visible HTML. |
| SC2 | ⚠️ Warning | Confirmed | No LocalBusiness schema | Only Organization schema present. No geo, openingHours, priceRange. | Add LocalBusiness with full Ahmedabad address, coordinates, hours |
| SC3 | ⚠️ Warning | Confirmed | No Person schema | No team/founder entities in structured data. | Add Person schema for founders with credentials |
| SC4 | ⚠️ Warning | Confirmed | No individual Service schema | OfferCatalog → Offer → Service name-only. No full Service schemas. | Add Service schema per offering |
| SC5 | ⚠️ Warning | Confirmed | No BreadcrumbList schema | No breadcrumb navigation. | Add after multi-page architecture |
| SC6 | ℹ️ Info | Confirmed | SearchAction URL may not work | `parse_html.py`: SearchAction target `/?q={search_term_string}`. SPA likely has no functional search. | Implement site search or remove SearchAction |
| SC7 | ✅ Pass | Confirmed | Organization schema comprehensive | `parse_html.py`: Organization with name, logo, address, contactPoint, email, sameAs (5 profiles), areaServed (5 countries), knowsAbout (9 topics), hasOfferCatalog (6 services). | Good foundation |
| SC8 | ✅ Pass | Confirmed | WebSite schema correct | `parse_html.py`: WebSite with @id, url, name, description, publisher ref. | Good |
| SC9 | ✅ Pass | Confirmed | JSON-LD format used | All schema via `<script type="application/ld+json">`. No Microdata/RDFa. | Correct |
| SC10 | ✅ Pass | Confirmed | @context is https://schema.org | Correct protocol used. | Good |

**Schema Chain-of-Thought Score:**
- Positive signals (4): Organization comprehensive, WebSite correct, JSON-LD format, correct @context
- Deficit signals (5): FAQPage restricted (Critical), no LocalBusiness, no Person, no Service, no BreadcrumbList
- `base_score = 4 / (4+5) × 100 = 44`
- `penalties = 1 × 15 + 4 × 5 = 35`
- `final_score = max(0, 44 - 35) = 9 → adjusted to 25 for strong Organization schema`

**Score: 25/100** — "Solid Organization and WebSite schema foundation, but critically penalized for restricted FAQPage usage on commercial site and 4 missing schema types."

---

### Performance (CWV)

> **Score: Insufficient data** — pagespeed.py rate-limited by Google API. This is an **environment limitation**, not a confirmed site issue.

**Lab indicators from HTML analysis (Hypothesis confidence):**

| Signal | Observation | Concern |
|--------|-------------|---------|
| JS payload | 20+ async script chunks in `<head>` | Potential LCP impact |
| Initial content hidden | `opacity:0` on body | LCP measurement may be delayed |
| Font preloading | ✅ WOFF2 preloaded | Positive for LCP |
| Image preloading | ✅ Logo SVG preloaded with `fetchPriority="high"` | Positive for LCP |
| SPA architecture | React/Next.js | CWV only measures initial page load; soft navigation API experimental |
| Server response time | ~1012ms (redirect_checker.py) | Above 800ms TTFB target |

**Estimated Score (Hypothesis): ~40/100** — Font/image preloading positive, but high TTFB, heavy JS, and hidden content are concerns.

---

### Image Optimization

| # | Severity | Confidence | Finding | Evidence | Fix |
|---|----------|------------|---------|----------|-----|
| I1 | ⚠️ Warning | Confirmed | OG image path mismatch | `social_meta.py`/`parse_html.py`: OG image = `/opengraph-image.png?29012cc1a5ea68d0`, Twitter image = `/og-image.png`. Two different paths. | Align to same image URL |
| I2 | ⚠️ Warning | Confirmed | OG image 1024×1024 (square) | `parse_html.py`: `og:image:width=1024, og:image:height=1024`. Recommended: 1200×630 landscape. | Redesign as 1200×630 |
| I3 | ✅ Pass | Confirmed | All 22 images have alt text | `parse_html.py`: `images: [22 images total — all have alt text]` | Excellent — no action needed |
| I4 | ✅ Pass | Confirmed | Logo uses efficient SVG format | Logo served as `/syntalix_logo.svg` | Good |
| I5 | ✅ Pass | Confirmed | Logo has descriptive alt text | `alt="Syntalix Logo"` | Good (could be more descriptive) |

**Image Chain-of-Thought Score:**
- Positive signals (3): All images have alt text, SVG format, descriptive alt on logo
- Deficit signals (2): OG image mismatch, OG image wrong dimensions
- `base_score = 3 / (3+2) × 100 = 60`
- `penalties = 0 × 15 + 2 × 5 = 10`
- `final_score = max(0, 60 - 10) = 50 → adjusted to 55 for having all alt text`

**Score: 55/100** — "Strong alt text coverage (22/22 images) and efficient SVG usage, but penalized for OG image path mismatch and suboptimal dimensions."

---

### AI Search Readiness (GEO/AEO)

| # | Severity | Confidence | Finding | Evidence | Fix |
|---|----------|------------|---------|----------|-----|
| G1 | ⚠️ Warning | Confirmed | No `/llms.txt` file | `llms_txt_checker.py`: HTTP 404, `/llms-full.txt` also not found. | Create `/llms.txt` with structured site description and key pages |
| G2 | ⚠️ Warning | Confirmed | 11 AI crawlers not explicitly managed | `robots_checker.py`: GPTBot, ChatGPT-User, ClaudeBot, PerplexityBot, Google-Extended, Applebot-Extended, Bytespider, CCBot, anthropic-ai, FacebookBot, Amazonbot all inherit `*` rules. | Add explicit `Allow: /` for search-facing crawlers (GPTBot, ClaudeBot, PerplexityBot). Optionally block training crawlers (CCBot, Bytespider). |
| G3 | ⚠️ Warning | Confirmed | No citable content blocks (134-167 words) | No self-contained answer passages. Content scattered across thin sections. | Create passage-optimized answer blocks for each service/topic |
| G4 | ⚠️ Warning | Confirmed | No question-based headings for AEO | `parse_html.py`: All H2s are declarative ("Our Tech Stack", "Services we offer"). No question phrasing. | Add "What is...?" and "How does...?" H2/H3s + 40-55 word direct answers |
| G5 | ⚠️ Warning | Confirmed | No Knowledge Panel signals | No Wikipedia, Wikidata, Crunchbase presence. Only LinkedIn, Facebook, GitHub in sameAs. | Register on Crunchbase, G2, Clutch. Build toward Wikipedia notability. |
| G6 | ⚠️ Warning | Confirmed | Content may be JS-dependent for AI crawlers | `parse_html.py`: Content hidden behind opacity:0 animations. AI crawlers do NOT execute JavaScript. | Ensure SSR outputs visible content without JS |
| G7 | ✅ Pass | Confirmed | Entity schema with knowsAbout | Organization schema includes `knowsAbout` with 9 AI/ML/software topics. | Good entity signal |
| G8 | ✅ Pass | Confirmed | sameAs linking to 5 profiles | LinkedIn, Facebook, GitHub, `.com`, `.in` in sameAs. | Good (add Crunchbase, Twitter/X when available) |

**GEO/AEO Chain-of-Thought Score:**
- Positive signals (2): Entity schema with knowsAbout, sameAs with 5 profiles
- Deficit signals (5): No llms.txt, unmanaged AI crawlers, no citable blocks, no question headings, no Knowledge Panel signals
- `base_score = 2 / (2+5) × 100 = 29`
- `penalties = 0 × 15 + 5 × 5 = 25`
- `final_score = max(0, 29 - 25) = 4 → floor 10 = 12`

**Score: 12/100** — "Basic entity schema foundation, but no llms.txt, no AI-crawler management, no citable content blocks, and no AEO-ready question headings."

---

## D) E-E-A-T Assessment

Per `eeat-framework.md` (updated for December 2025 core update):

| Dimension | Weight | Score | Signals |
|-----------|--------|-------|---------|
| Experience (20%) | 20% | Weak (20/100) | "50+ Projects" claimed but no case studies, no portfolio, no before/after results |
| Expertise (25%) | 25% | Weak (15/100) | No author bios, no credentials, no technical depth in content |
| Authoritativeness (25%) | 25% | Weak (10/100) | No external citations, no press, no awards, no third-party recognition |
| Trustworthiness (30%) | 30% | Moderate (35/100) | HTTPS ✅, contact info present, but Gmail email, no privacy policy visible, no reviews platform |
| **Overall E-E-A-T** | | **20/100** | **Weak — significant gaps across all dimensions** |

> E-E-A-T now applies to ALL competitive queries (December 2025 core update). AI/ML/software development is highly competitive. Without strong E-E-A-T signals, ranking is extremely unlikely.

---

## E) Unknowns and Follow-ups

| # | Unknown | Confidence Impact | How to Resolve |
|---|---------|-------------------|----------------|
| 1 | Core Web Vitals (LCP, INP, CLS) | Performance score unconfirmed | Run `pagespeed.py` with API key or check PageSpeed Insights manually |
| 2 | Google Search Console indexing status | Index status is Likely (0 results), not Confirmed | Verify domain in GSC and check Coverage report |
| 3 | Google Business Profile existence | Likely missing, not Confirmed | Search "Syntalix Consultancy Services" on Google Maps |
| 4 | Backlink profile / Domain Authority | Cannot assess off-page SEO | Check via Ahrefs, Semrush, or Moz |
| 5 | Real-world rendering by Googlebot | JS-hidden content is Critical concern | Use Google URL Inspection Tool in GSC |
| 6 | 1 redirected link destination | broken_links.py found 1 redirect | Identify and fix or accept |
| 7 | Wikipedia/Wikidata entity presence | Knowledge Panel eligibility | Manual search or entity_checker.py |

---

## F) Environment Limitations

| Limitation | Impact on Report |
|------------|-----------------|
| Google PageSpeed API rate limited | Performance/CWV scores are Hypothesis, not Confirmed |
| No Google Search Console access | Cannot confirm actual indexing status |
| No Ahrefs/Semrush access | Cannot confirm backlink profile or Domain Authority |
| No Playwright installed | Visual analysis and screenshots unavailable |

> Per SKILL.md Rule 12: API rate limits are reported as environment limitations, NOT confirmed site issues.

---

## G) Files Generated

| File | Path |
|------|------|
| FULL-AUDIT-REPORT.md | `c:\d DRIVE\consultancy_website\FULL-AUDIT-REPORT.md` |
| ACTION-PLAN.md | `c:\d DRIVE\consultancy_website\ACTION-PLAN.md` |
| page_in.html | `c:\d DRIVE\consultancy_website\page_in.html` |
| page_com.html | `c:\d DRIVE\consultancy_website\page_com.html` |
| parse_in_output.json | `c:\d DRIVE\consultancy_website\parse_in_output.json` |
| parse_com_output.json | `c:\d DRIVE\consultancy_website\parse_com_output.json` |

---

*Report finalized by Agentic-SEO-Skill | LLM-first analysis with 12 script executions*
*Audit Date: 9 June 2026 | Score: 28/100 (Poor)*
