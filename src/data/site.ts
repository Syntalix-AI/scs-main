export const SITE = {
  url: 'https://www.syntalixconsultancy.com',
  name: 'Syntalix Consultancy',
  legalName: 'Syntalix LLP',
  alternateNames: ['Syntalix', 'Syntalix LLP', 'Syntalix Consultancy (Syntalix LLP)'],
  llpin: 'ACR-6280',
  foundingDate: '2023',
  llpRegistered: '2025',
  email: 'info@syntalixconsultancy.com',
  phone: '+91-9259750107',
  phoneDisplay: '+91 92597 50107',
  whatsapp: 'https://wa.me/919259750107',
  region: 'Uttar Pradesh',
  country: 'IN',
  description:
    'Syntalix Consultancy (Syntalix LLP) is an India-based software, AI and ML development company that designs and builds web platforms, LLM features and agentic systems for clients.',
  certification: 'Wadhwani NEN Foundation',
  gaId: 'G-P819Y0LVBH',
  sameAs: [
    'https://www.linkedin.com/company/syntalix-llp/',
    'https://clutch.co/profile/syntalix-consultancy',
    'https://www.fiverr.com/agencies/syntalixai',
    'https://github.com/Syntalix-AI',
    'https://www.facebook.com/syntalixllp/',
  ],
  linkedin: 'https://www.linkedin.com/company/syntalix-llp/',
  clutch: 'https://clutch.co/profile/syntalix-consultancy',
  fiverr: 'https://www.fiverr.com/agencies/syntalixai',
  github: 'https://github.com/Syntalix-AI',
} as const;

export const NAV = [
  { label: 'Services', href: '/services' },
  { label: 'Work', href: '/case-studies' },
  { label: 'Insights', href: '/blog' },
  { label: 'About', href: '/about' },
] as const;

export const FOOTER = {
  services: [
    { label: 'Web and mobile apps', href: '/services/web-mobile-development' },
    { label: 'LLM engineering', href: '/services/llm-engineering' },
    { label: 'Agentic AI systems', href: '/services/agentic-systems' },
    { label: 'AI and ML infrastructure', href: '/services/ai-ml-infrastructure' },
    { label: 'AI consulting', href: '/services/ai-consulting' },
    { label: 'Answer engine optimisation', href: '/services/aeo-optimization' },
  ],
  work: [
    { label: 'Case studies', href: '/case-studies' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'City Farmers', href: '/case-studies/city-farmers' },
    { label: 'RapidLink Logistics', href: '/case-studies/rapidlink-logistics' },
    { label: 'Insights', href: '/blog' },
  ],
  company: [
    { label: 'About', href: '/about' },
    { label: 'Careers', href: '/careers' },
    { label: 'Contact', href: '/contact' },
  ],
} as const;
