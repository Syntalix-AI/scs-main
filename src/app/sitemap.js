export default function sitemap() {
  const primaryDomain = 'https://www.syntalixconsultancy.in'
  const lastModified = new Date()

  return [
    { url: primaryDomain, lastModified, changeFrequency: 'weekly', priority: 1 },
    { url: `${primaryDomain}/about`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${primaryDomain}/services`, lastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${primaryDomain}/services/ai-ml-infrastructure`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${primaryDomain}/services/llm-engineering`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${primaryDomain}/services/agentic-systems`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${primaryDomain}/services/web-mobile-development`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${primaryDomain}/blog`, lastModified, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${primaryDomain}/blog/what-is-llm-engineering`, lastModified, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${primaryDomain}/blog/rise-of-agentic-ai`, lastModified, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${primaryDomain}/blog/ai-development-cost-india-2026`, lastModified, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${primaryDomain}/contact`, lastModified, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${primaryDomain}/careers`, lastModified, changeFrequency: 'monthly', priority: 0.4 },
  ]
}
