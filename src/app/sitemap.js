export default function sitemap() {
  const primaryDomain = 'https://www.syntalixconsultancy.in'
  const lastModified = new Date()

  return [
    { url: primaryDomain, lastModified, changeFrequency: 'weekly', priority: 1 },
    { url: `${primaryDomain}/about`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${primaryDomain}/services`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${primaryDomain}/contact`, lastModified, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${primaryDomain}/careers`, lastModified, changeFrequency: 'monthly', priority: 0.4 },
  ]
}
