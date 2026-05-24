export default function sitemap() {
  const primaryDomain = 'https://www.syntalixconsultancy.in'
  const alternateDomain = 'https://www.syntalixconsultancy.com'
  const lastModified = new Date()

  // Primary .in domain entries
  const primaryEntries = [
    { url: primaryDomain, lastModified, changeFrequency: 'weekly', priority: 1 },
    { url: `${primaryDomain}/#services`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${primaryDomain}/#about`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${primaryDomain}/#contact`, lastModified, changeFrequency: 'monthly', priority: 0.6 },
  ]

  // Alternate .com domain entries (lower priority — .in is canonical)
  const alternateEntries = [
    { url: alternateDomain, lastModified, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${alternateDomain}/#services`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${alternateDomain}/#about`, lastModified, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${alternateDomain}/#contact`, lastModified, changeFrequency: 'monthly', priority: 0.5 },
  ]

  return [...primaryEntries, ...alternateEntries]
}
