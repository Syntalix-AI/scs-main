/** Client work only. Describe what we delivered; never client metrics or claims. */
export type Project = {
  slug: string;
  client: string;
  sector: string;
  headline: string;
  what: string;
  chips: string[];
  stack?: string;
  url?: string;
  domain?: string;
  shot?: 'legalindia' | 'raysnrzilss' | 'jtmakeovers' | 'cityfarmers';
  logo?: 'legalindia' | 'rays' | 'rapidlink' | 'cityfarmers';
  /** light brand tint for the client card */
  tint?: { bg: string; fg: string; muted: string; accent: string };
  caseStudy?: string;
  private?: boolean;
};

export const PROJECTS: Project[] = [
  {
    slug: 'city-farmers', client: 'City Farmers', sector: 'Seeds and home gardening', caseStudy: '/case-studies/city-farmers',
    headline: 'An AI grow-guide web app for a seed brand',
    what: 'Product design, the web app and a retrieval-based AI guide that answers in Hindi, Hinglish or English and cites its source.',
    chips: ['Product design', 'Web app', 'RAG'], stack: 'Next.js, Supabase, retrieval-grounded AI', url: 'https://cityfarmers.in/', domain: 'cityfarmers.in', shot: 'cityfarmers', logo: 'cityfarmers',
  },
  {
    slug: 'rapidlink-logistics', client: 'RapidLink Logistics', sector: 'Logistics', caseStudy: '/case-studies/rapidlink-logistics',
    headline: 'A booking, payments and tracking platform for a logistics company',
    what: 'The production website and booking platform: instant quotes, three-step booking with live payments, waybill tracking and an operations admin panel.',
    chips: ['Web platform', 'Payments', 'Tracking'], stack: 'Astro, Node, SQLite, Razorpay', logo: 'rapidlink',
  },
  {
    slug: 'legal-india', client: 'Legal India', sector: 'Legal and compliance services', url: 'https://legalindia.vercel.app/', domain: 'legalindia.vercel.app', shot: 'legalindia', logo: 'legalindia',
    headline: 'A consultation-booking website for a legal services firm',
    what: 'Design, build, SEO and an online consultation flow.', chips: ['Web design', 'SEO', 'Consultation booking'],
    tint: { bg: '#F6F0E2', fg: '#0F172A', muted: '#4B5563', accent: '#8A6420' },
  },
  {
    slug: 'rays-and-rzilss', client: 'RAYS & RZILSS', sector: 'Pharma training institute, Kolkata', url: 'https://raysnrzilss.in/', domain: 'raysnrzilss.in', shot: 'raysnrzilss', logo: 'rays',
    headline: 'An admissions website for a pharma training institute',
    what: 'Design, build, SEO and lead capture for admissions.', chips: ['Web design', 'SEO', 'Admissions leads'],
    tint: { bg: '#EEF1FA', fg: '#0B1A4A', muted: '#46507A', accent: '#C62020' },
  },
  {
    slug: 'jt-makeovers', client: 'JT Makeovers', sector: 'Bridal and event makeup, Delhi NCR', url: 'https://www.jtmakeovers.in/', domain: 'jtmakeovers.in', shot: 'jtmakeovers',
    headline: 'A portfolio and enquiry site for a bridal makeup artist',
    what: 'Design, build, SEO and a mobile-first enquiry flow.', chips: ['Web design', 'SEO', 'Enquiry flow'],
    tint: { bg: '#FBEEF1', fg: '#3B2330', muted: '#6E4D5A', accent: '#A23B5E' },
  },
  {
    slug: 'legal-discovery-ai', client: 'Legal Discovery AI', sector: 'Legal technology', private: true,
    headline: 'Parties, claims and key facts pulled from discovery PDFs',
    what: 'Private software for a legal team that reads form-based and free-form discovery documents and extracts the facts lawyers need.',
    chips: ['NLP', 'PDF parsing', 'Automation'], stack: 'Python, NLP, PDF parsing. Private deployment.',
  },
  { slug: 'ai-report-platform', client: 'AI Report Platform', sector: 'Reporting software', private: true,
    headline: 'AI-generated reports across web and mobile', what: 'A web and mobile platform with AI-generated, customisable reports, multi-role access and auto-saved drafts.',
    chips: ['Web and mobile', 'Generative AI'], stack: 'React, Node.js, Django, OpenAI, PostgreSQL' },
  { slug: 'ai-edtech-platform', client: 'AI EdTech Platform', sector: 'Education', private: true,
    headline: 'An AI learning platform with assessments', what: 'A dual-mode learning platform with AI-generated materials, assessments and an analytics dashboard.',
    chips: ['Generative AI', 'Analytics'], stack: 'Flask, Python, generative AI' },
  { slug: 'custom-fine-tuned-gpt', client: 'Custom fine-tuned GPT', sector: 'Domain-specific AI', private: true,
    headline: 'A GPT model fine-tuned on a domain dataset', what: 'A GPT model fine-tuned on a client’s domain-specific dataset for a specialised use case.',
    chips: ['Fine-tuning', 'NLP'], stack: 'Python, LangChain, NLP' },
  { slug: 'multi-format-converter', client: 'Multi-format converter', sector: 'Data tooling', private: true,
    headline: 'Conversion code generated from PDF, JSON and GeoJSON', what: 'An application that takes PDF, JSON and GeoJSON input and generates the conversion code automatically.',
    chips: ['AI code generation', 'Data'], stack: 'Python, LangChain, React, Django' },
  { slug: 'geodata-scraper', client: 'Geodata scraper', sector: 'Geospatial data', private: true,
    headline: 'Scheduled collection of map and location data', what: 'A system that collects, processes and stores coordinates and map data from multiple sources.',
    chips: ['Data pipelines', 'Geospatial'], stack: 'Selenium, Sentinel Hub, Google Cloud' },
  { slug: 'startup-ai-advisory', client: 'Startup AI advisory', sector: 'Early-stage startup', private: true,
    headline: 'An AI strategy and tooling plan for a startup', what: 'AI strategy and documentation covering fine-tuning, RAG and tooling choices for a client startup.',
    chips: ['AI strategy', 'RAG'], stack: 'AI strategy, RAG, LLM' },
];

export const projectBySlug = (slug: string) => PROJECTS.find((p) => p.slug === slug);
export const LIVE_SITES = ['legal-india', 'rays-and-rzilss', 'jt-makeovers'];
export const MORE_WORK = ['ai-report-platform', 'ai-edtech-platform', 'custom-fine-tuned-gpt', 'multi-format-converter', 'geodata-scraper', 'startup-ai-advisory'];
