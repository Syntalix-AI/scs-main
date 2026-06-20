export default function sitemap() {
  const primaryDomain = 'https://www.syntalixconsultancy.com'

  return [
    { url: primaryDomain, lastModified: new Date('2026-06-20'), changeFrequency: 'weekly', priority: 1 },
    { url: `${primaryDomain}/about`, lastModified: new Date('2026-06-10'), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${primaryDomain}/services`, lastModified: new Date('2026-06-10'), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${primaryDomain}/services/ai-ml-infrastructure`, lastModified: new Date('2026-06-10'), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${primaryDomain}/services/llm-engineering`, lastModified: new Date('2026-06-10'), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${primaryDomain}/services/agentic-systems`, lastModified: new Date('2026-06-10'), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${primaryDomain}/services/web-mobile-development`, lastModified: new Date('2026-06-10'), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${primaryDomain}/blog`, lastModified: new Date('2026-06-20'), changeFrequency: 'weekly', priority: 0.7 },
    { url: `${primaryDomain}/blog/what-is-llm-engineering`, lastModified: new Date('2026-06-08'), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${primaryDomain}/blog/rise-of-agentic-ai`, lastModified: new Date('2026-06-05'), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${primaryDomain}/blog/ai-development-cost-india-2026`, lastModified: new Date('2026-06-01'), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${primaryDomain}/case-studies`, lastModified: new Date('2026-06-20'), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${primaryDomain}/case-studies/automated-document-processing-llm`, lastModified: new Date('2026-06-20'), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${primaryDomain}/case-studies/predictive-maintenance-ai-infrastructure`, lastModified: new Date('2026-06-20'), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${primaryDomain}/case-studies/enterprise-ecommerce-modernization`, lastModified: new Date('2026-06-20'), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${primaryDomain}/team`, lastModified: new Date('2026-06-20'), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${primaryDomain}/contact`, lastModified: new Date('2026-06-10'), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${primaryDomain}/careers`, lastModified: new Date('2026-06-10'), changeFrequency: 'monthly', priority: 0.4 },
  ]
}
