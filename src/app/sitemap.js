export default function sitemap() {
  const primaryDomain = 'https://www.syntalixconsultancy.com'
  const now = new Date()
  const monthly = new Date('2026-06-10')

  return [
    { url: primaryDomain, lastModified: now, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${primaryDomain}/about`, lastModified: monthly, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${primaryDomain}/services`, lastModified: monthly, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${primaryDomain}/services/ai-ml-infrastructure`, lastModified: monthly, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${primaryDomain}/services/llm-engineering`, lastModified: monthly, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${primaryDomain}/services/agentic-systems`, lastModified: monthly, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${primaryDomain}/services/ai-consulting`, lastModified: monthly, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${primaryDomain}/services/aeo-optimization`, lastModified: monthly, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${primaryDomain}/services/web-mobile-development`, lastModified: monthly, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${primaryDomain}/blog`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${primaryDomain}/blog/what-is-llm-engineering`, lastModified: new Date('2026-06-08'), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${primaryDomain}/blog/rise-of-agentic-ai`, lastModified: new Date('2026-06-05'), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${primaryDomain}/blog/ai-development-cost-india-2026`, lastModified: new Date('2026-06-01'), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${primaryDomain}/case-studies`, lastModified: monthly, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${primaryDomain}/case-studies/automated-document-processing-llm`, lastModified: monthly, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${primaryDomain}/case-studies/predictive-maintenance-ai-infrastructure`, lastModified: monthly, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${primaryDomain}/case-studies/enterprise-ecommerce-modernization`, lastModified: monthly, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${primaryDomain}/team`, lastModified: monthly, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${primaryDomain}/contact`, lastModified: monthly, changeFrequency: 'yearly', priority: 0.7 },
    { url: `${primaryDomain}/careers`, lastModified: monthly, changeFrequency: 'monthly', priority: 0.6 },
  ]
}

