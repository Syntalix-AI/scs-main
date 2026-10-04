import { SITE } from '@/data/site';
import { LAUNCH, lastModified } from '@/data/sitemap-dates.mjs';

const ORG_ID = `${SITE.url}/#organization`;
const SITE_ID = `${SITE.url}/#website`;
export const abs = (path: string) => (path.startsWith('http') ? path : `${SITE.url}${path === '/' ? '' : path}`);

export function organization() {
  return {
    '@type': 'Organization',
    '@id': ORG_ID,
    name: SITE.name,
    legalName: SITE.legalName,
    alternateName: [...SITE.alternateNames],
    url: SITE.url,
    logo: { '@type': 'ImageObject', url: `${SITE.url}/icon-512.png`, width: 512, height: 512 },
    image: `${SITE.url}/og-image.png`,
    description: SITE.description,
    foundingDate: SITE.foundingDate,
    email: SITE.email,
    telephone: SITE.phone,
    address: { '@type': 'PostalAddress', addressRegion: SITE.region, addressCountry: SITE.country },
    areaServed: [
      { '@type': 'Country', name: 'India' },
      { '@type': 'Country', name: 'United States' },
      { '@type': 'Place', name: 'Europe' },
    ],
    identifier: { '@type': 'PropertyValue', propertyID: 'LLPIN', value: SITE.llpin },
    award: `Certified by the ${SITE.certification}`,
    knowsAbout: ['LLM engineering', 'Retrieval-augmented generation', 'Agentic AI systems', 'Machine learning infrastructure', 'MLOps', 'AI consulting', 'Web development', 'Mobile app development', 'Answer engine optimisation'],
    contactPoint: [{ '@type': 'ContactPoint', contactType: 'sales', email: SITE.email, telephone: SITE.phone, availableLanguage: ['English', 'Hindi'] }],
    sameAs: [...SITE.sameAs],
  };
}

export function website() {
  return { '@type': 'WebSite', '@id': SITE_ID, url: SITE.url, name: SITE.name, publisher: { '@id': ORG_ID }, inLanguage: 'en-IN' };
}

export function webPage(path: string, name: string, description: string, type = 'WebPage') {
  return { '@type': type, '@id': `${abs(path)}#webpage`, url: abs(path), name, description, isPartOf: { '@id': SITE_ID }, about: { '@id': ORG_ID }, datePublished: LAUNCH, dateModified: lastModified(path), inLanguage: 'en-IN' };
}

export function breadcrumbs(items: { name: string; path: string }[]) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({ '@type': 'ListItem', position: i + 1, name: it.name, item: abs(it.path) })),
  };
}

export function service(opts: { name: string; description: string; path: string; serviceType: string }) {
  return {
    '@type': 'Service',
    '@id': `${abs(opts.path)}#service`,
    name: opts.name,
    serviceType: opts.serviceType,
    description: opts.description,
    url: abs(opts.path),
    dateModified: lastModified(opts.path),
    provider: { '@id': ORG_ID },
    areaServed: [{ '@type': 'Country', name: 'India' }, { '@type': 'Country', name: 'United States' }, { '@type': 'Place', name: 'Europe' }],
  };
}

export function faq(items: [string, string][]) {
  return { '@type': 'FAQPage', mainEntity: items.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) };
}

export function blogPosting(opts: { title: string; description: string; path: string; image: string; published: Date; modified?: Date; tags: string[] }) {
  return {
    '@type': 'BlogPosting',
    '@id': `${abs(opts.path)}#article`,
    headline: opts.title,
    description: opts.description,
    image: abs(opts.image),
    datePublished: opts.published.toISOString().slice(0, 10),
    dateModified: (opts.modified ?? opts.published).toISOString().slice(0, 10),
    author: { '@type': 'Organization', '@id': ORG_ID, name: 'Syntalix Team', url: SITE.linkedin },
    publisher: { '@id': ORG_ID },
    mainEntityOfPage: { '@id': `${abs(opts.path)}#webpage` },
    keywords: opts.tags.join(', '),
    inLanguage: 'en-IN',
  };
}

export function caseStudyArticle(opts: { title: string; description: string; path: string; image: string; client: string }) {
  return {
    '@type': 'Article',
    '@id': `${abs(opts.path)}#article`,
    headline: opts.title,
    description: opts.description,
    image: abs(opts.image),
    author: { '@id': ORG_ID },
    publisher: { '@id': ORG_ID },
    about: { '@type': 'Organization', name: opts.client },
    datePublished: LAUNCH,
    dateModified: lastModified(opts.path),
    mainEntityOfPage: { '@id': `${abs(opts.path)}#webpage` },
  };
}

export function review(opts: { quote: string; name: string; itemPath: string }) {
  return {
    '@type': 'Review',
    reviewBody: opts.quote,
    author: { '@type': 'Person', name: opts.name },
    itemReviewed: { '@id': ORG_ID },
  };
}

/** One @graph per page, always org + website first. */
export function graph(...nodes: object[]) {
  return { '@context': 'https://schema.org', '@graph': [organization(), website(), ...nodes] };
}
