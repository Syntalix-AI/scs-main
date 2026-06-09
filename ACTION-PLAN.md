# SEO ACTION PLAN
## Syntalix Consultancy Services
**Domains:** syntalixconsultancy.in · syntalixconsultancy.com
**Date:** 9 June 2026
**Overall Score:** 28/100 (Poor)
**Priority Order:** Critical → High → Medium → Low

---

## 🔴 CRITICAL — Fix Immediately (Blocks Indexing/Rankings)

### 1. 301 Redirect `.com` → `.in`
- **Finding:** `.com` serves full duplicate page (HTTP 200) without redirect
- **Evidence:** `redirect_checker.py`: `.com` → HTTP 200, 0 hops, 1042ms. `parse_html.py`: Both pages identical (646 words, same title, same schema). Canonical on `.com` points to `.in` but no redirect enforces it.
- **Impact:** Duplicate content. PageRank split. Crawler budget waste. Google may index wrong domain.
- **Fix:** Configure 301 redirect at DNS/hosting: `syntalixconsultancy.com/*` → `syntalixconsultancy.in/*`
- **Severity:** 🔴 Critical | **Confidence:** Confirmed | **Effort:** Low | **Type:** Quick Win

### 2. Remove FAQPage Schema
- **Finding:** FAQPage schema on commercial site — restricted since August 2023
- **Evidence:** `parse_html.py`: Schema type `"FAQPage"`, status `"restricted"`. Note: "FAQPage is restricted to government/healthcare authority sites only." 3 Q&As in JSON-LD not rendered in HTML.
- **Impact:** Will not generate rich results. May trigger schema spam signals.
- **Fix:** Remove `FAQPage` from `@graph`. Render Q&As as visible HTML with H2/H3 question headings.
- **Severity:** 🔴 Critical | **Confidence:** Confirmed | **Effort:** Low | **Type:** Quick Win

### 3. Fix JS-Hidden Content
- **Finding:** Entire page body starts with `opacity:0` requiring JS animations to become visible
- **Evidence:** HTML source: root div `style="opacity:0;transform:translateY(50px) translateZ(0)"`. All section containers have `opacity:0`.
- **Impact:** Googlebot may see blank page. AI crawlers (GPTBot, ClaudeBot) do NOT execute JS at all.
- **Fix:** Server-render with `opacity:1`. Apply animations via `useEffect`/client-only after hydration.
- **Severity:** 🔴 Critical | **Confidence:** Confirmed | **Effort:** Medium | **Type:** Strategic

### 4. Fix robots.txt (Remove `/_next/` Block)
- **Finding:** `Disallow: /_next/` prevents Googlebot from loading JS bundles
- **Evidence:** `robots_checker.py`: `User-Agent: *` with `Disallow: /_next/`. Next.js stores all JS/CSS chunks under `/_next/`.
- **Impact:** Googlebot cannot render page → invisible content → no indexing.
- **Fix:** Remove `Disallow: /_next/` line. Keep `Disallow: /api/`.
- **Severity:** 🔴 Critical | **Confidence:** Confirmed | **Effort:** Low | **Type:** Quick Win

### 5. Fix Sitemap (Remove Fragment URLs + .com Entries)
- **Finding:** 6 of 8 sitemap URLs are invalid (fragments or duplicates)
- **Evidence:** `sitemap.xml` has `/#services`, `/#about`, `/#contact` for both `.in` and `.com`. Google ignores fragment identifiers. `.com` should not be in sitemap after redirect.
- **Impact:** Only 1 valid URL in sitemap (homepage). Google may deprioritize crawling.
- **Fix:** Rewrite sitemap with only crawlable `.in` page URLs. Add real pages as they're created.
- **Severity:** 🔴 Critical | **Confidence:** Confirmed | **Effort:** Low | **Type:** Quick Win

### 6. Submit to Google Search Console
- **Finding:** Site appears not indexed by Google
- **Evidence:** `site:syntalixconsultancy.in` returns 0 results. New domain (founded 2023).
- **Impact:** Website invisible in Google search entirely.
- **Fix:** Verify domain in GSC. Submit corrected sitemap. Request indexing. Set preferred domain.
- **Severity:** 🔴 Critical | **Confidence:** Likely | **Effort:** Low | **Type:** Quick Win

---

## ⚠️ HIGH — Fix Within 1-2 Weeks

### 7. Fix Multiple H1 Tags
- **Finding:** Two H1 tags on the page
- **Evidence:** `parse_html.py`: H1 = ["BuildingDigital Excellencefor Your Business", "ACCOMPLISHMENT"]. Should be exactly 1.
- **Impact:** Confuses heading hierarchy for crawlers. Dilutes primary heading signal.
- **Fix:** Change "ACCOMPLISHMENT" H1 to H2 or `<span>`. Keep only one H1.
- **Severity:** ⚠️ Warning | **Confidence:** Confirmed | **Effort:** Low | **Type:** Quick Win

### 8. Rewrite H1 with Target Keywords
- **Finding:** H1 is generic with no service/location keywords; also has spacing issues in raw HTML
- **Evidence:** `parse_html.py`: `"BuildingDigital Excellencefor Your Business"` — missing spaces and no keywords.
- **Impact:** Primary heading fails to signal core topic to search engines.
- **Fix:** Rewrite: "AI & ML Software Development Company in Ahmedabad, India" — with proper HTML spacing.
- **Severity:** ⚠️ Warning | **Confidence:** Confirmed | **Effort:** Low | **Type:** Quick Win

### 9. Shorten Title Tag to ≤60 Characters
- **Finding:** Title is 67-70 characters, will be truncated
- **Evidence:** `social_meta.py`: og:title 67 chars (max recommended: 60). Quality gate: max 60 chars.
- **Impact:** Truncated titles look unprofessional. Keywords may be cut.
- **Fix:** "Syntalix Consultancy | AI & ML Development India" (~52 chars)
- **Severity:** ⚠️ Warning | **Confidence:** Confirmed | **Effort:** Low | **Type:** Quick Win

### 10. Add CTA to Meta Description
- **Finding:** Meta description is informational only, no call-to-action
- **Evidence:** `parse_html.py`: Description ends "...web and mobile development." No invitation to act.
- **Impact:** Lower click-through rate from SERPs.
- **Fix:** Append: "Get a free consultation today."
- **Severity:** ⚠️ Warning | **Confidence:** Confirmed | **Effort:** Low | **Type:** Quick Win

### 11. Replace Gmail with Professional Email
- **Finding:** Business contact uses `syntalix.ai@gmail.com`
- **Evidence:** `parse_html.py`: Organization schema `email: "syntalix.ai@gmail.com"`.
- **Impact:** Reduced E-E-A-T trust. Users and AI engines perceive as less authoritative.
- **Fix:** Set up `contact@syntalixconsultancy.in`. Update schema, website, all profiles.
- **Severity:** ⚠️ Warning | **Confidence:** Confirmed | **Effort:** Low | **Type:** Quick Win

### 12. Set Up Google Business Profile
- **Finding:** No GBP detected for Ahmedabad location
- **Evidence:** Organization schema has Ahmedabad address but no LocalBusiness. No Knowledge Panel.
- **Impact:** Missing from Google Maps, local pack, Knowledge Panel.
- **Fix:** Create GBP with consistent NAP. Add photos, hours, services, reviews.
- **Severity:** ⚠️ Warning | **Confidence:** Likely | **Effort:** Low | **Type:** Quick Win

### 13. Add 5 Missing Security Headers
- **Finding:** Security score 45/100 with 5 headers missing
- **Evidence:** `security_headers.py`: Missing CSP, X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy. HSTS present but without `includeSubDomains`.
- **Impact:** Security vulnerabilities (XSS, clickjacking, MIME sniffing). Indirect trust signal.
- **Fix:** Add headers via Next.js `next.config.js`:
  ```js
  headers: [
    { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
    { key: 'X-Content-Type-Options', value: 'nosniff' },
    { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
    { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
    { key: 'Content-Security-Policy', value: "default-src 'self'; ..." }
  ]
  ```
- **Severity:** ⚠️ Warning | **Confidence:** Confirmed | **Effort:** Medium | **Type:** Strategic

### 14. Fix OG Image (Path + Dimensions)
- **Finding:** OG and Twitter Card reference different images; image is square
- **Evidence:** `social_meta.py`/`parse_html.py`: OG: `/opengraph-image.png?hash`, Twitter: `/og-image.png`. Dims: 1024×1024.
- **Impact:** Social sharing may show wrong/broken image. Square suboptimal.
- **Fix:** Create 1200×630 landscape OG image. Align both OG and Twitter to same URL.
- **Severity:** ⚠️ Warning | **Confidence:** Confirmed | **Effort:** Low | **Type:** Quick Win

### 15. Remove `maximum-scale=1` from Viewport
- **Finding:** Viewport meta blocks user zoom — accessibility violation
- **Evidence:** `parse_html.py`: `viewport: "width=device-width, initial-scale=1, maximum-scale=1"`
- **Impact:** Fails WCAG 2.1 SC 1.4.4. Minor mobile SEO signal.
- **Fix:** Remove `maximum-scale=1`.
- **Severity:** ⚠️ Warning | **Confidence:** Confirmed | **Effort:** Low | **Type:** Quick Win

### 16. Add LocalBusiness Schema
- **Finding:** Only Organization schema; no local business structured data
- **Evidence:** `parse_html.py`: Organization with `addressLocality: "Ahmedabad"` but no LocalBusiness type.
- **Impact:** Missing local rich results. No map integration.
- **Fix:** Add LocalBusiness schema with full address, geo coordinates, telephone, openingHours.
- **Severity:** ⚠️ Warning | **Confidence:** Confirmed | **Effort:** Low | **Type:** Quick Win

### 17. Render FAQ as Visible HTML
- **Finding:** FAQ only exists in JSON-LD, invisible on page
- **Evidence:** `parse_html.py`: FAQPage with 3 Q&As, no corresponding HTML elements.
- **Impact:** Content invisible to users and text parsers. Schema mismatch.
- **Fix:** Add visible FAQ section with H2 question headings + paragraph answers. Expand to 10-15 keyword-rich questions.
- **Severity:** ⚠️ Warning | **Confidence:** Confirmed | **Effort:** Medium | **Type:** Quick Win

### 18. Create `/llms.txt`
- **Finding:** No structured content guide for AI crawlers
- **Evidence:** `llms_txt_checker.py`: HTTP 404 for both `/llms.txt` and `/llms-full.txt`.
- **Impact:** AI search engines cannot efficiently discover site content.
- **Fix:** Create `/llms.txt`:
  ```
  # Syntalix Consultancy Services
  > India-based AI/ML and software development consultancy in Ahmedabad
  
  ## Services
  - [AI & ML Infrastructure](/): Custom AI/ML solutions
  - [LLM Engineering](/): Large Language Model development
  - [Agentic AI Systems](/): Autonomous agent development
  
  ## Contact
  - Email: contact@syntalixconsultancy.in
  - Phone: +91 9259750107
  ```
- **Severity:** ⚠️ Warning | **Confidence:** Confirmed | **Effort:** Low | **Type:** Quick Win

### 19. Add AI Crawler Rules to robots.txt
- **Finding:** 11 AI crawlers inherit wildcard rules without explicit management
- **Evidence:** `robots_checker.py`: GPTBot, ClaudeBot, PerplexityBot, etc. all unmanaged.
- **Impact:** Lost opportunity for explicit AI search visibility signaling.
- **Fix:** Add to robots.txt:
  ```
  User-agent: GPTBot
  Allow: /
  
  User-agent: ClaudeBot
  Allow: /
  
  User-agent: PerplexityBot
  Allow: /
  
  User-agent: CCBot
  Disallow: /
  ```
- **Severity:** ⚠️ Warning | **Confidence:** Confirmed | **Effort:** Low | **Type:** Quick Win

---

## 🟡 MEDIUM — Fix Within 1 Month (Strategic Improvements)

### 20. Create Multi-Page Service Architecture
- **Finding:** All content on single SPA page with hash navigation
- **Evidence:** `internal_links.py`: 1 page crawled, 1 unique page found. No separate service pages.
- **Impact:** Cannot target individual service keywords. No dedicated landing pages.
- **Fix:** Create 6 service pages: `/services/ai-ml-infrastructure`, `/services/llm-engineering`, `/services/agentic-systems`, `/services/web-development`, `/services/mobile-development`, `/services/desktop-software`. Minimum 800 words each.
- **Severity:** ⚠️ Warning | **Confidence:** Confirmed | **Effort:** High | **Type:** Strategic

### 21. Launch Blog / Insights Section
- **Finding:** Zero content marketing presence
- **Evidence:** No `/blog` route. No articles. No informational content.
- **Impact:** No topical authority. No informational keyword coverage. No GEO citations.
- **Fix:** Create `/blog` with initial articles: "What is LLM Engineering?", "AI Development Cost in India 2026", "Agentic AI Systems Explained". 1,500+ words each.
- **Severity:** ⚠️ Warning | **Confidence:** Confirmed | **Effort:** High | **Type:** Strategic

### 22. Add Team/About Page with Person Schema
- **Finding:** No expertise signals (founders, team, credentials)
- **Evidence:** `parse_html.py`: No Person schema. No team bios visible.
- **Impact:** E-E-A-T failure. AI engines cannot attribute expertise.
- **Fix:** Create `/about` with founder bios, photos, credentials, LinkedIn links. Add Person schema.
- **Severity:** ⚠️ Warning | **Confidence:** Confirmed | **Effort:** Medium | **Type:** Strategic

### 23. Add Portfolio / Case Studies
- **Finding:** No evidence of completed work
- **Evidence:** "50+ Projects Delivered" stat but zero case studies.
- **Impact:** E-E-A-T Experience gap. Not citable by AI.
- **Fix:** Create `/portfolio` with 3-5 case studies: client, problem, solution, results.
- **Severity:** ⚠️ Warning | **Confidence:** Confirmed | **Effort:** Medium | **Type:** Strategic

### 24. Implement Question-Based Headings (AEO)
- **Finding:** No headings structured as questions for Featured Snippet/PAA eligibility
- **Evidence:** `parse_html.py`: All H2s declarative ("Our Tech Stack", "Services we offer").
- **Impact:** Cannot win Featured Snippets or People Also Ask placements.
- **Fix:** Add question-based H2s with 40-55 word direct answers immediately below.
- **Severity:** ⚠️ Warning | **Confidence:** Confirmed | **Effort:** Medium | **Type:** Strategic

### 25. Fix H3 Heading Misuse (Stats)
- **Finding:** Numeric stats used as H3 headings
- **Evidence:** `parse_html.py`: H3 includes "50+", "98%", "24/7".
- **Impact:** Confuses heading hierarchy. No keyword value.
- **Fix:** Replace with `<span class="stat">` or `<p>`.
- **Severity:** ⚠️ Warning | **Confidence:** Confirmed | **Effort:** Low | **Type:** Quick Win

---

## 🟢 LOW — Backlog (1-3 Month Horizon)

### 26. Register on Third-Party Directories
- **Fix:** Register on Crunchbase, Clutch, G2, GoodFirms, IndiaMART, Justdial.
- **Effort:** Medium | **Type:** Maintenance

### 27. Add Individual Service Schema
- **Fix:** Add full Service schema per page after multi-page architecture.
- **Effort:** Medium | **Type:** Maintenance

### 28. Add BreadcrumbList Schema
- **Fix:** Implement after multi-page architecture.
- **Effort:** Low | **Type:** Maintenance

### 29. Remove Non-Standard `Host` Directive
- **Fix:** Remove `Host: https://www.syntalixconsultancy.in` from robots.txt.
- **Effort:** Low | **Type:** Maintenance

### 30. Build Backlink Profile
- **Fix:** Guest posts on Indian tech blogs, open-source contributions, event sponsorships.
- **Effort:** High | **Type:** Strategic

### 31. Implement/Remove SearchAction Schema
- **Fix:** Either implement functional site search or remove WebSite SearchAction.
- **Effort:** Medium | **Type:** Maintenance

---

## Implementation Timeline

| Timeframe | Actions | IDs | Impact |
|-----------|---------|-----|--------|
| **Day 1** | robots.txt fix, .com redirect, sitemap fix | 4, 1, 5 | Unblocks indexing |
| **Day 2** | Remove FAQPage, render FAQ HTML, GSC submission | 2, 17, 6 | Schema compliance + indexing |
| **Week 1** | Fix JS opacity, H1 rewrite, multiple H1, title shorten | 3, 7, 8, 9 | Content visibility + on-page |
| **Week 2** | Email migration, meta CTA, OG fix, viewport, llms.txt, AI crawlers | 10, 11, 14, 15, 18, 19 | Trust + AI readiness |
| **Week 3** | GBP setup, LocalBusiness schema, security headers, heading fix | 12, 16, 13, 25 | Local SEO + security |
| **Month 2** | Multi-page architecture, team page, portfolio, question headings | 20, 22, 23, 24 | Content + E-E-A-T |
| **Month 3** | Blog launch, directory registrations, service schema, breadcrumbs, backlinks | 21, 26-31 | Authority + GEO |

---

## Expected Score Trajectory

| Milestone | Actions Completed | Projected Score |
|-----------|-------------------|-----------------|
| Current state | — | 28/100 (Poor) |
| After Critical fixes (Week 1) | 1-6 | 45/100 (Poor → Needs Improvement) |
| After High priority (Week 3) | 7-19 | 58/100 (Needs Improvement) |
| After Multi-page + Blog (Month 2-3) | 20-25 | 72/100 (Good) |
| After full plan execution (Month 3+) | 26-31 | 80+/100 (Good → Excellent) |

---

*Action Plan finalized by Agentic-SEO-Skill | 31 prioritized items | 9 June 2026*
