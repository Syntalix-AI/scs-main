# Full SEO and AEO Audit: syntalixconsultancy.com (after the Astro rebuild)

- **Scope:** full site. All 19 sitemap URLs were crawled live on production (Astro build, `main@22ec5ac`), and the source was reviewed for root causes.
- **Date:** 2026-10-04. The previous audit, dated 2026-09-26 and run on the old Next.js site, is in git history.
- **Business type:** agency / AI-ML consultancy, based in India and serving India, the US and Europe.
- **Overall SEO health:** **90 / 100: Excellent**, up from 65. Score confidence is Medium: lab performance was measured, but no real-user (field) data exists yet.
- **Tools used:**
  - the `seo` skill and the repo copy `Agentic-SEO-Skill` (`audit_runner.py` plus about 35 individual scripts)
  - local Lighthouse 12 (mobile) on 8 templates
  - a custom crawler over all sitemap URLs

The rebuild fixed every critical issue from the last audit:
- Schema is now server-rendered on every page.
- The fake counter, the popup and the unverified testimonials are gone.
- Every page sits within 1 click of the homepage, with no orphans.
- Lighthouse scores 96–100 on every template.

What remains is mostly **answer-engine polish**. Service pages lack question-style headings with short direct answers, only blog posts carry dates, the case studies are thin, and there are few outbound citations. One live problem sits outside the site: **the KORD product subdomain's HTTPS is down**.

The repo skill's automated `audit_runner.py` scored the site **88/100**. That figure counts Performance as 0 because the PageSpeed API was rate-limited, and Hreflang as 0 even though the site is single-language. With measured Lighthouse values in place of those zeros, it agrees with the 90 below.

---

## A) Audit Summary

### Top issues
1. **KORD Studio link is unreachable** (Warning, Confirmed). `https://kordstudio.syntalixconsultancy.com` fails to connect on port 443 (IP `32.192.206.34`, not Vercel). Plain HTTP 301-redirects to that broken HTTPS. The homepage "Built in-house" band links to it.
2. **Service, home and contact pages have no answer blocks** (Warning, Confirmed). `answer_block_scanner` scores 10/100 on these pages, against 100/100 on blog posts. FAQ questions render as `<summary>` text rather than question headings, and no "What is X?" definition paragraph sits near the top of service pages.
3. **No freshness dates outside blog posts** (Warning, Confirmed). `freshness_checker` reports "No parseable published or modified date" on home, services, case studies and contact (65/100). Blog posts score 100.

### Top opportunities (quick wins)
1. Render each FAQ question as an `<h3>` inside `<summary>`, and keep answers at 30–55 words. This needs a one-component change in `src/components/Faq.astro`.
2. Add a 40–55 word "What is <service>?" answer under each service H1. This is the main featured-snippet and AI-citation target for queries like "llm engineering services".
3. Add `datePublished`/`dateModified` to the WebPage, Service and Article nodes (from `sitemap-dates.mjs`) and a visible "Updated" line on case studies.
4. Request indexing for the 10 URLs still waiting from 2026-09-27. Google's daily quota has reset since then.

---

## B) Findings Table

| Area | Severity | Confidence | Finding | Evidence | Fix |
|---|---|---|---|---|---|
| Links | Warning | Confirmed | KORD subdomain HTTPS down | `curl` to :443 refused 3 times; DNS `32.192.206.34`; HTTP returns 301 to https | Fix the KORD server's TLS listener, or hide the KORD card until it is back |
| AEO | Warning | Confirmed | No question heading plus direct answer on service, home and contact pages | `answer_block_scanner` 10/100; FAQ uses `<summary>Should we fine-tune…</summary>` | Wrap each question in `<h3>`; add a definition paragraph per service |
| Freshness | Warning | Confirmed | No published or modified dates outside the blog | `freshness_checker` 65; WebPage, Service and Article nodes have no `dateModified` | Emit dates in schema; show "Updated" on case studies |
| Content | Warning | Confirmed | Case studies are thin | city-farmers 362 words, rapidlink-logistics 317 words (crawler, text inside `<main>`) | Expand to 700+ words: brief, constraints, architecture, stack decisions, what shipped, client quote |
| E-E-A-T / GEO | Warning | Confirmed | Few outbound citations on service and blog pages | `citation_readiness` 59 (blog) and 66 (service): "factual claims outnumber citation signals" | Cite 2–3 primary sources per post (vendor docs, papers, government data) |
| Entity | Info | Confirmed | No Wikipedia, Wikidata or X profile | `entity_checker`; the user has no X account | Don't create profiles only for SEO; grow third-party mentions (Clutch, directories, press) |
| Entity | Info | Confirmed | Fiverr and Clutch return 403 to bots | `broken_links` / `external_link_quality` | None needed. Both open in browsers and are valid `sameAs` links |
| Schema | Info | Confirmed | FAQPage won't earn FAQ rich results for a commercial site | `rich_results_guard` | Keep it: it is valid and helps AI engines parse Q&A. Don't expect SERP accordions |
| Schema | Info | Confirmed | WebSite has no SearchAction | `schema_required_props` | Not needed: the site has no internal search, and Google retired the sitelinks search box in 2024 |
| Local | Info | Likely | No Google Business Profile link or LocalBusiness | `local_seo_checker` | Only if there is a staffed address: create a GBP and add it to `sameAs` |
| Content | Info | Confirmed | /blog (148 words), /careers (187) and /contact (245) are below 300 words | `duplicate_content` | Acceptable for index and utility pages; growing the blog fixes /blog naturally |
| Performance | Info | Confirmed | Blog post TBT is 216 ms (perf 96) | Lighthouse mobile | Optional: defer the lead-form script on posts until the form scrolls into view |
| Indexing | Info | Confirmed | 10 of 19 URLs still have no manual indexing request | GSC on 2026-09-27: quota hit after 9 | Request the rest; the sitemap already lists them |
| Redirects | Info | Confirmed | `http://syntalixconsultancy.in` takes 2 hops | `curl -L` | Unavoidable: Vercel's forced HTTPS upgrade is the first hop |
| Technical | Pass | Confirmed | Security headers 100, robots 100, llms.txt 100, 0 orphans, 0 crawl issues, all canonicals self-referencing | scripts plus crawler | — |

### Script findings checked and rejected as false positives
These were verified by hand and do not count against the score:
- **mobile_render_checker, "missing viewport" (critical):** the tag is present: `width=device-width, initial-scale=1`.
- **schema_required_props, "placeholder text" ×7:** the checker flags any `[`, so every JSON array trips it.
- **sitemap_checker, 19 "duplicate URLs" and a sitemap_index 404:** the checker guessed `/sitemap-index.xml`, which 308-redirects to the same `/sitemap.xml`. `/sitemap_index.xml` is not referenced anywhere.
- **a11y_seo_checker, "5 unlabeled fields":** the inputs are wrapped in `<label>`, and Lighthouse accessibility is 100.
- **font_audit, "Font is not WOFF2" ×4:** these are Fontsource's WOFF fallbacks listed after WOFF2, and browsers only download the WOFF2.
- **image_weight_audit, "no srcset" ×13:** these are small fixed-size logos and SVG icons. The real LCP image already has `fetchpriority="high"`.
- **ai_crawler_policy_matrix, "CCBot/Bytespider allowed":** the checker merges the `*` group into every bot's rules, which robots.txt rules (RFC 9309) don't do. Python's `urllib.robotparser` confirms both bots are blocked.

---

## C) Detailed Findings and Category Scores

### Technical SEO: 100/100
**Positive signals:**
- HTTPS everywhere, with HSTS preload, CSP (no `unsafe-eval`), X-Frame-Options DENY, nosniff, Referrer-Policy and Permissions-Policy. `security_headers` scores 100.
- 19/19 pages return 200 with a self-referencing canonical and `index, follow, max-image-preview:large`. `canonical_checker` and `indexability_matrix` are both clean.
- The sitemap (`/sitemap.xml`, 19 URLs) matches the crawl, with 0 orphans (`orphan_pages_from_sitemap`) and 0 crawl issues (`crawl_audit`).
- Redirects: non-www→www, `.in`→www and trailing slashes each take 1 hop. Retired URLs 308 to their replacements, and the URL-parity script passes 21/21.
- Preview deployments send `X-Robots-Tag: noindex`; production does not.

**Deficits:** none above Info.

Score 100: everything Google needs to crawl and index is in place, and the only notes are informational.

### Content Quality / E-E-A-T: 78/100
**Positive signals:**
- Blog posts run 1,069–1,119 words, each with answer blocks (scanner 100) and a link to a service page.
- Testimonials are real only (Jeff Schwartz, Muadd Fettachi via Fiverr; Aryan Srivastava of RapidLink), each linked to its source.
- Verifiable company facts appear on page and in schema: LLPIN ACR-6280, LLP registered in 2025, working since 2023, Wadhwani NEN certified.
- Readability: Flesch 63.7, grade 8.3, average sentence 15.7 words.
- Service pages run 453–585 words with capabilities, process, tools, FAQ and related client work.

**Deficits:**
- Case studies are thin at 317–362 words (Warning).
- Bylines are "Syntalix Team" by design (Info). The organisation is the publisher, so the E-E-A-T checker's "no author" note is expected.

Score 78: base 83 (5 positive signals against 1 deficit) minus one Warning (−5). Expanding the two case studies is the main lever.

### On-Page SEO: 100/100
**Positive signals:**
- Every title is unique and 30–59 characters, and each matches a GSC query target (for example "LLM Engineering Services in India").
- Meta descriptions are 137–157 characters.
- Each page has exactly 1 H1 and a logical H2/H3 order (Lighthouse heading-order passes).
- Pages carry 16–19 internal links on average, and everything is within 1 click of the homepage.
- Anchors are descriptive, with no "click here" (`anchor_text_audit`: 0 generic, 0 empty).

**Deficits:** repetitive nav and footer anchors (Info only).

### Schema / Structured Data: 78/100
**Positive signals:**
- One server-rendered JSON-LD `@graph` per page (19/19).
- The Organization node has `legalName`, `alternateName`, an LLPIN identifier, `award`, `knowsAbout`, `contactPoint` and 5 `sameAs` links (LinkedIn `syntalix-llp`, Clutch, Fiverr, GitHub, Facebook). There is no `x.com`.
- Every inner page has a BreadcrumbList (GSC already shows breadcrumbs as valid).
- Service ×6, BlogPosting ×3 (Organization author "Syntalix Team") and Article ×2 are in place.
- `rich_results_guard` reports 0 errors, and `validate_schema` shows valid JSON.

**Deficits:**
- WebPage, Service and Article nodes have no `datePublished`/`dateModified` (Warning).
- FAQPage is not eligible for rich results on a commercial site (Info).

Score 78: base 83 (5 positive signals against 1 deficit) minus one Warning (−5).

### Performance (CWV): 98/100 (lab only)
Lighthouse 12, mobile emulation, live production:

| Page | Perf | A11y | Best practices | SEO | LCP | TBT | CLS |
|---|---|---|---|---|---|---|---|
| / | 99 | 100 | 100 | 100 | 1.9 s | — | 0 |
| /services | 99 | 100 | 100 | 100 | 1.2 s | 110 ms | 0 |
| /services/llm-engineering | 100 | 100 | 100 | 100 | 1.1 s | — | 0 |
| /case-studies/city-farmers | 97 | 100 | 100 | 100 | 1.2 s | 176 ms | 0 |
| /blog/what-is-llm-engineering | 96 | 100 | 100 | 100 | 1.3 s | 216 ms | 0 |
| /portfolio | 99 | 100 | 100 | 100 | 1.4 s | 131 ms | 0.005 |
| /about | 99 | 100 | 100 | 100 | 1.4 s | 133 ms | 0 |
| /contact | 100 | 100 | 100 | 100 | 1.2 s | — | 0 |

- Page weight is 270–355 KB.
- There are 0 third-party blocking scripts (`third_party_script_audit`), and GA loads on idle.
- Field data (CrUX) does not exist yet because traffic is too low, and GSC Core Web Vitals showed "No data". INP cannot be confirmed until it does.

### Images: 100/100
- 0 images without alt text and 0 without width/height across 19 pages.
- Photos are AVIF/WebP via `astro:assets`, with responsive `srcset`/`sizes`.
- Lazy-loading is used below the fold, and `fetchpriority="high"` is set on hero images.
- Imagery is editorial still life plus real client screenshots, with no stock photography.

### AI Search Readiness (GEO / AEO): 61/100
**Positive signals:**
- `llms.txt` scores 100/100 (title, description, 4 sections, 15 links), and a generated `llms-full.txt` is present.
- robots.txt explicitly welcomes GPTBot, OAI-SearchBot, ChatGPT-User, ClaudeBot, Claude-SearchBot, anthropic-ai, PerplexityBot, Perplexity-User, Google-Extended, Applebot-Extended, Amazonbot, meta-externalagent, FacebookBot, DuckAssistBot and MistralAI-User. It blocks the bulk scrapers CCBot and Bytespider.
- The entity is unambiguous: one Organization with a legal name and 5 consistent `sameAs` links. The old confusion with `x.com/syntalix` and the Web3 "Syntalix" is resolved.
- Blog posts are answer-first (scanner 100) and dated (freshness 100).
- Pages are static HTML with no JS needed to read content, so crawlers that don't render JS see everything.

**Deficits:**
- Service, home and contact pages have no question-heading answer blocks (Warning).
- Citation density is low on service and blog pages (Warning).

Score 61: base 71 (5 positive signals against 2 deficits) minus two Warnings (−10). This category moves most with the least work.

#### AEO detail (Featured Snippets, People Also Ask, Knowledge Panel)
- **Featured snippet readiness:**
  - Blog posts: ready, with 2 direct answers after question headings on `/blog/what-is-llm-engineering`.
  - Service pages: not ready. There is no 40–55 word "what is" paragraph, and the FAQ questions are not headings.
- **People Also Ask coverage:**
  - Each service has 4 FAQ answers in the HTML (the FAQ uses collapsed `<details>`, so the text is still there for crawlers), but none sit under question headings.
  - Coverage: 0 of 24 service FAQs are heading-plus-answer pairs.
- **Knowledge Panel signals:**
  - Present: Organization schema, logo, 5 `sameAs` links, consistent NAP (email, phone, region).
  - Absent: Wikipedia and Wikidata (not notable yet; don't force it), a Google Business Profile, and an X account (the user has none).
- **Sitelinks search box:** not applicable. Google retired it in 2024, and the site has no search.

---

## D) Score Breakdown

| Category | Weight | Score | Weighted |
|---|---|---|---|
| Technical SEO | 25% | 100 | 25.0 |
| Content Quality | 20% | 78 | 15.6 |
| On-Page SEO | 15% | 100 | 15.0 |
| Schema / Structured Data | 15% | 78 | 11.7 |
| Performance (CWV) | 10% | 98 | 9.8 |
| Images | 10% | 100 | 10.0 |
| AI Search Readiness | 5% | 61 | 3.1 |
| **Total** | | | **90 / 100** |

Change since the 2026-09-26 audit:

| Category | Before | After |
|---|---|---|
| Technical SEO | 78 | 100 |
| Content Quality | 55 | 78 |
| On-Page SEO | 70 | 100 |
| Schema | 45 | 78 |
| Performance | 60 | 98 |
| Images | 70 | 100 |
| AI Search Readiness | 80 | 61 |

The 65→90 overall gain comes mainly from server-rendered schema, removing the fake counter and popup, and speed. AI readiness is scored more strictly this time: the AEO scripts were added to the evidence (answer blocks, freshness, citations), which the first audit did not measure. So the 80→61 drop reflects a stricter measure, not a regression.

After the four quick wins in `ACTION-PLAN.md`, the projected scores are about 95 for Schema, 90+ for AI readiness and **about 94 overall**. Expanding the case studies would add roughly 2 more.

---

## E) Unknowns and Follow-ups
- **Real-user Core Web Vitals (INP especially):** unknown until CrUX has enough traffic. Re-check GSC Core Web Vitals in 4–6 weeks.
- **Indexing state since 2026-09-27:** Chrome was unavailable this session, so GSC was not re-read. Check Pages → Indexed (17 last time) and the two validations that were "Started".
- **SERP ownership** of featured snippets and PAA: needs a manual SERP check or a rank tracker.
- **Google Knowledge Graph:** not checked, because `entity_checker` has no KG API key.

## F) Environment Limitations
- **PageSpeed Insights API:** the keyless daily quota was exhausted (HTTP 429), so lab data comes from local Lighthouse instead. Set `PAGESPEED_API_KEY` to get CrUX field data in future runs.
- **Playwright** is not installed, so `javascript_render_audit` and `analyze_visual` were skipped. The site is static HTML, so the JS-rendering risk is nil.
- **Claude in Chrome** disconnected, so GSC was not re-read this run.

## G) Artifacts
- `FULL-AUDIT-REPORT.md`: this file
- `ACTION-PLAN.md`: prioritised fixes
- `docs/seo/SEO-REPORT-2026-10-04.html`: the interactive dashboard from `Agentic-SEO-Skill/scripts/audit_runner.py`. It shows the automated 88/100, which treats performance and hreflang as 0.
