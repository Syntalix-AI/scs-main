/** Case studies describe what we delivered. No client metrics or outcome claims. */
export type CaseStudy = {
  slug: string;
  client: string;
  title: string;
  description: string;
  h1: string;
  lead: string;
  meta: [string, string][];
  liveUrl?: string;
  liveDomain?: string;
  facts: [string, string][];
  sections: { h2: string; body: string[]; list?: string[] }[];
  delivered: string[];
  services: string[];
  next: string;
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: 'city-farmers',
    client: 'City Farmers',
    title: 'City Farmers: AI Grow-Guide Web App',
    description: 'How Syntalix designed and built City Farmers’ web app: seed-packet scanning, stage-by-stage plant care and a retrieval-based AI guide that cites its sources.',
    h1: 'An AI grow-guide web app for City Farmers',
    lead: 'We designed and built City Farmers’ web app: scan a packet to get plant care for every growth stage, reminders, and an AI grow guide that shows its sources.',
    meta: [['Client', 'City Farmers'], ['What we did', 'Product design, web app, AI guide'], ['Stack', 'Next.js, Supabase, RAG']],
    liveUrl: 'https://cityfarmers.in/', liveDomain: 'cityfarmers.in',
    facts: [['Seed guides', '15'], ['Languages in the AI guide', '3'], ['Scope', 'Product design, web app, AI guide']],
    sections: [
      { h2: 'The brief', body: ['City Farmers sells seeds to home and urban growers. They wanted each packet to lead to ongoing, stage-by-stage help, in the language the grower uses, with answers that come from their own plant guides rather than a general chatbot.'] },
      { h2: 'What we built', body: ['A mobile-first web app where scanning a packet opens that seed’s own guide, organised by growth stage. The app tracks sowing dates and sends watering and feeding reminders at the right stage, and an AI guide answers questions in Hindi, Hinglish or English.'] },
      { h2: 'An AI guide you can check', body: ['The guide answers only from City Farmers’ own plant guides. Retrieval pulls the relevant pages for that seed and stage, and every answer shows the guide page it came from, so growers can check it and the team can audit it.'] },
    ],
    delivered: ['Product and interface design, mobile first', 'The web app: packet scanning, per-seed guides by growth stage, sowing dates and reminders', 'A retrieval-based AI guide over the plant guides, answering in Hindi, Hinglish or English with source citations'],
    services: ['llm-engineering', 'web-mobile-development'],
    next: 'rapidlink-logistics',
  },
  {
    slug: 'rapidlink-logistics',
    client: 'RapidLink Logistics',
    title: 'RapidLink Logistics: Booking and Tracking',
    description: 'How Syntalix built RapidLink Logistics’ production website and booking platform: instant quotes, three-step booking with live payments and waybill tracking.',
    h1: 'A booking, payments and tracking platform for RapidLink Logistics',
    lead: 'We built RAPIDLINK Logistics’ production website and booking platform: an instant quote engine, a three-step booking flow with live payments, waybill tracking and an admin panel for operations.',
    meta: [['Client', 'RAPIDLINK Logistics Private Limited'], ['What we did', 'Design, web platform, payments'], ['Stack', 'Astro, Node, SQLite, Razorpay']],
    facts: [['Booking flow', '3 steps'], ['Payments', 'Razorpay, live'], ['Scope', 'Website, booking, tracking, admin']],
    sections: [
      { h2: 'The brief', body: ['RAPIDLINK Logistics needed more than a brochure site. Customers had to be able to get a price, book a shipment, pay and track it in one place, and the operations team needed a simple way to manage bookings behind it.'] },
      { h2: 'What we built', body: ['An Astro and Node platform where the marketing pages are pre-rendered static HTML for speed and search, while quoting, booking, payment and tracking run server-side. Every API route validates its input, and the data lives in a single SQLite database with no separate server to manage.'],
        list: ['Instant quote engine for shipment pricing', 'Three-step booking flow with live Razorpay payments', 'Carrier-agnostic waybill and tracking layer', 'A lightweight admin panel for the operations team', 'A blog and SEO-ready marketing pages'] },
    ],
    delivered: ['Design and build of the production website', 'Quote, booking and payment flow with Razorpay', 'Waybill generation and shipment tracking', 'Operations admin panel and deployment guide'],
    services: ['web-mobile-development'],
    next: 'city-farmers',
  },
];

export const caseStudyBySlug = (slug: string) => CASE_STUDIES.find((c) => c.slug === slug)!;
