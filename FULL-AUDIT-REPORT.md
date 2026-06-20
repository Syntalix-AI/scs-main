# FULL SEO AUDIT REPORT — syntalixconsultancy.com
**Audit Date:** 2026-06-20
**Scope:** Full-site audit (homepage + technical + schema + content + AEO)
**URL:** https://www.syntalixconsultancy.com
**Industry:** Agency / Consultancy (Software and AI/ML)

---

## Audit Summary

| Item | Value |
|------|-------|
| Overall SEO Score | 62 / 100 — Needs Improvement |
| Technical SEO | 70/100 |
| Content Quality | 48/100 |
| On-Page SEO | 72/100 |
| Schema / Structured Data | 85/100 |
| Performance (CWV) | 55/100 (PageSpeed API rate-limited; prior Lighthouse: 85 mobile) |
| Image Optimization | 60/100 |
| AI Search Readiness (GEO) | 78/100 |

### Top 3 Issues
1. Homepage word count critically low (592 words) — thin content below 800-word floor
2. H2 headings contain merged/broken text (OurTechStack, WhyChoose Us.) — React rendering bug
3. Image alt texts mismatched — alt text does not match the image subject

### Top 3 Opportunities
1. Add llms-full.txt to unlock full AI search citation eligibility
2. Fix og:title length (66 chars vs 60 max)
3. Add twitter:site and twitter:creator handles

---

## Findings Table

| Area | Severity | Confidence | Finding | Evidence | Fix | Owner |
|------|----------|-----------|---------|----------|-----|-------|
| Content Quality | CRITICAL | Confirmed | Homepage word count (592) below 800-word minimum | readability.py: word_count=592 | Expand hero, services, about sections to 900+ words | Dev |
| On-Page SEO | CRITICAL | Confirmed | H2 headings have merged text: OurTechStack, WhyChoose Us. | parse_html.py: h2 array shows no spaces between words | Add spaces in React JSX heading components | Dev |
| Image Optimization | WARNING | Confirmed | SVG images have mismatched alt text (Experience SVG has alt=Approach) | parse_html.py: multiple mismatched src vs alt pairs | Audit all image alt attributes to match content | Dev |
| On-Page SEO | WARNING | Confirmed | og:title is 66 chars, exceeding 60-char limit | social_meta.py: og:title too long (66 chars, max 60) | Shorten to: Syntalix Consultancy | Software and AI Company India | Dev |
| Content Quality | WARNING | Confirmed | Flesch Reading Ease 32.1 (Very Difficult - College Level) | readability.py: flesch=32.1, complex_word_pct=27.4% | Simplify hero copy to plain business language, target Flesch 50-60 | Content |
| Technical SEO | WARNING | Confirmed | H1 keyword order differs from page title | parse_html.py: H1=AI and ML Software Dev vs title=Software, AI and ML Dev | Align H1 with title tag | Dev |
| Technical SEO | WARNING | Confirmed | HSTS missing includeSubDomains directive | security_headers.py: HSTS missing includeSubDomains | Add includeSubDomains to Vercel security headers config | Dev |
| AEO / GEO | WARNING | Confirmed | llms-full.txt not present | llms_txt_checker.py: llms-full.txt: Not found | Create /public/llms-full.txt with full services description | Dev |
| Social Meta | WARNING | Confirmed | twitter:site and twitter:creator missing | social_meta.py: both fields missing | Add twitter:site handle to layout.js metadata | Dev |
| Internal Linking | WARNING | Confirmed | Static crawlers detect 0 internal links on homepage | internal_links.py: Total internal links: 0 | Verify SSR anchor tags are in HTML; add min 5 text internal links | Dev |
| Sitemap | WARNING | Confirmed | All lastmod dates are identical (build time, not content update time) | sitemap.xml: all pages show same timestamp 2026-06-20T12:28:57 | Update sitemap.js to use real per-page content dates | Dev |
| Content Quality | WARNING | Hypothesis | No author pages or team bios — weak E-E-A-T signals | No /team in sitemap, no author schema | Add team page with credentials and LinkedIn links | Content |
| Content Quality | WARNING | Hypothesis | No case studies or portfolio pages | No /work or /case-studies in sitemap | Create 2-3 anonymized case study pages | Content |
| Schema | PASS | Confirmed | Organization, WebSite, ProfessionalService JSON-LD valid | parse_html.py: all three schema blocks present | Maintain | — |
| Schema | PASS | Confirmed | SearchAction (Sitelinks Searchbox) correctly implemented | parse_html.py: potentialAction with urlTemplate on WebSite | Maintain | — |
| Schema | PASS | Confirmed | legalName Syntalix LLP present in Organization schema | parse_html.py: legalName=Syntalix LLP | Maintain | — |
| Technical SEO | PASS | Confirmed | robots.txt present with correct AI crawler management | robots_checker.py: GPTBot, ClaudeBot, PerplexityBot allowed; CCBot blocked | Maintain | — |
| Technical SEO | PASS | Confirmed | HTTPS enforced with HSTS max-age=63072000 | security_headers.py: Security Score 100/100 | Maintain | — |
| AEO / GEO | PASS | Confirmed | llms.txt present (HTTP 200) Quality Score 100/100 | llms_txt_checker.py: Score=100, Sections=4, Links=13 | Add llms-full.txt | — |
| Social Meta | PASS | Confirmed | All 7 Open Graph tags present and valid | social_meta.py: og:title, description, image, url, type, site_name, locale all present | Maintain | — |
| Technical SEO | PASS | Confirmed | Canonical URL correctly set to www version | parse_html.py: canonical=https://www.syntalixconsultancy.com | Maintain | — |
| Sitemap | PASS | Confirmed | Sitemap contains 13 URLs covering all key pages | sitemap.xml: homepage, about, 4 service pages, blog, 3 posts, contact, careers | Maintain | — |

---

## Unknowns and Follow-ups

| Unknown | How to Confirm |
|---------|----------------|
| Exact CWV metrics (LCP, INP, CLS) | Re-run pagespeed.py after API cooldown; or check GSC Core Web Vitals report |
| Actual backlink count | Use Ahrefs/Moz; run seo links sub-skill |
| Google indexed page count | Check GSC Coverage report |
| Competitor keyword gap vs syntalix.com | Run seo competitors sub-skill |
| Broken links on inner pages | Run broken_links.py on /services, /blog, /contact |
