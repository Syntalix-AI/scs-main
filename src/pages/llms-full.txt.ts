import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { SITE } from '@/data/site';
import { SERVICES } from '@/data/services';
import { CASE_STUDIES } from '@/data/caseStudies';
import { PROJECTS } from '@/data/projects';

// Generated from the same data as the pages, so it never drifts from the site.
export const GET: APIRoute = async () => {
  const posts = (await getCollection('blog')).sort((a, b) => +b.data.pubDate - +a.data.pubDate);
  const out: string[] = [];
  out.push(`# ${SITE.name} (${SITE.legalName})`, '', `> ${SITE.description}`, '');
  out.push(`Legal name: ${SITE.legalName}. LLPIN: ${SITE.llpin}. Working since ${SITE.foundingDate}; registered as an LLP in ${SITE.llpRegistered}. Certified by the ${SITE.certification}. Based in ${SITE.region}, India. Clients in India, the United States and Europe.`);
  out.push(`Contact: ${SITE.email}, ${SITE.phoneDisplay}, ${SITE.url}/contact. Profiles: ${SITE.sameAs.join(', ')}.`, '');
  out.push('## Services', '');
  for (const s of SERVICES) {
    out.push(`### ${s.h1}`, `URL: ${SITE.url}/services/${s.slug}`, '', s.lead, '');
    for (const [t, d] of s.capabilities) out.push(`- ${t}: ${d}`);
    out.push('', 'Frequently asked:');
    for (const [q, a] of s.faqs) out.push(`- ${q} ${a}`);
    if (s.area) out.push('', s.area);
    out.push('');
  }
  out.push('## Case studies', '');
  for (const c of CASE_STUDIES) {
    out.push(`### ${c.h1}`, `URL: ${SITE.url}/case-studies/${c.slug}`, '', c.lead, '');
    for (const sec of c.sections) out.push(`${sec.h2}: ${sec.body.join(' ')}`);
    out.push(`Delivered: ${c.delivered.join('; ')}.`, '');
  }
  out.push('## Other client projects', '');
  for (const p of PROJECTS.filter((p) => !p.caseStudy)) out.push(`- ${p.client} (${p.sector}): ${p.what}${p.url ? ` Live: ${p.url}` : ''}`);
  out.push('', '## Articles', '');
  for (const p of posts) out.push(`- ${p.data.title}: ${p.data.description} ${SITE.url}/blog/${p.id}`);
  return new Response(out.join('\n') + '\n', { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
