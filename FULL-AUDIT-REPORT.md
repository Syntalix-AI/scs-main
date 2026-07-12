# Full Audit Report

- URL: `http://localhost:3000`
- Generated: `2026-07-04T19:34:24.661678`
- Overall score: `62/100`
- Score confidence: `Medium`
- Scoring version: `1`

## Score Card

| Category | Weight | Score |
| --- | ---: | ---: |
| Security Headers | 8 | 75 |
| Social Meta | 5 | 100 |
| Robots and Crawlers | 8 | 100 |
| Broken Links | 10 | 100 |
| Internal Links | 8 | 80 |
| Redirects | 3 | 100 |
| AI Search | 5 | 100 |
| Performance and Core Web Vitals | 13 | 0 |
| On-Page SEO | 10 | 0 |
| Readability | 8 | 0 |
| Entity SEO | 5 | 40 |
| Link Profile | 7 | 5 |
| Hreflang | 5 | 0 |
| Content Uniqueness | 5 | 100 |

## Findings

| Severity | Area | Finding | Evidence | Fix |
| --- | --- | --- | --- | --- |
| Critical | environment | Missing H1 on page | No primary content heading was detected, which weakens topical clarity. | Ensure each page has exactly one descriptive H1 aligned to intent. |
| Critical | link_profile | 19 orphan page(s) with zero inbound internal links. |  | Add internal links from relevant content pages to these orphan pages. |
| Critical | link_profile | Average internal links per page is only 1.2 (target: 5-10). |  | Increase internal linking by adding contextual links within content. |
| Critical | security | 🔴 Site not using HTTPS — critical for SEO and trust |  |  |
| Warning | broken_links | ⚠️ 3 link(s) timed out |  |  |
| Warning | entity | sameAs URL returns HTTP 403: https://clutch.co/profile/syntalix-consultancy |  | Update sameAs URL for clutch.co to a valid, non-redirecting destination. |
| Warning | environment | Meta description is missing or out of range | This can reduce SERP CTR and snippet quality. | Update page templates to set complete title/meta/OG/Twitter tags. |
| Warning | environment | Title tag needs optimization | Title length/content is likely suboptimal for rankings and click-through. | Update page templates to set complete title/meta/OG/Twitter tags. |
| Warning | internal_links | ⚠️ 6 potential orphan page(s) (≤1 internal link pointing to them) |  |  |
| Warning | link_profile | 19 page(s) with no outbound internal links (dead ends). |  | Add contextual internal links to related content from these pages. |
| Info | Wikidata | No Wikidata entry found for 'Syntalix Consultancy'. |  | If the entity meets Wikidata notability guidelines, create or improve an item with accurate third-party references. Do not create one solely for SEO. |
| Info | Wikipedia | No Wikipedia article found for 'Syntalix Consultancy'. |  | Only pursue Wikipedia if the entity meets independent notability standards. Otherwise, strengthen official schema, sameAs profiles, citations, and About/Contact signals. |
| Info | environment | Performance measurement incomplete | PageSpeed API returned an error, so CWV recommendations are less reliable. | Set `PAGESPEED_API_KEY` in your environment or `.env` file (see `.env.example`), then rerun. The CLI also accepts `--api-key`. Prioritize LCP/INP/CLS fixes from that output. |
| info | pagespeed | pagespeed measurement incomplete | Rate limited by Google API. Wait a few minutes or add an API key. | Rerun this check after resolving the environment/API/network limitation. |
| Info | sameAs | Missing sameAs link to Wikipedia (Primary KG signal). |  | Add the existing official 'wikipedia.org' URL to sameAs; do not create this profile solely for SEO. |
| Info | sameAs | Missing sameAs link to Wikidata (Primary KG signal). |  | Add the existing official 'wikidata.org' URL to sameAs; do not create this profile solely for SEO. |

## Measurement Notes

1 checks returned errors or incomplete measurements; treat affected scores as directional.
