// Real last-modified dates for the sitemap. Update a page's date when its content changes.
const REDESIGN = '2026-09-27';
export const LAUNCH = '2026-09-27';
const UPDATED = '2026-10-04';
const DATES = {
  '/': UPDATED,
  '/contact': UPDATED,
  '/services/web-mobile-development': UPDATED,
  '/services/llm-engineering': UPDATED,
  '/services/agentic-systems': UPDATED,
  '/services/ai-ml-infrastructure': UPDATED,
  '/services/ai-consulting': UPDATED,
  '/services/aeo-optimization': UPDATED,
  '/blog/what-is-llm-engineering': '2026-09-27',
  '/blog/rise-of-agentic-ai': '2026-09-27',
  '/blog/ai-development-cost-india-2026': '2026-09-27',
};

export function lastModified(path) {
  return DATES[path] ?? REDESIGN;
}
