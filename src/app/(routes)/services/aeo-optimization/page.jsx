import Link from 'next/link';
import Script from 'next/script';
import {
  Bot, Search, FileText, BarChart3, Globe, ArrowRight, CheckCircle2,
  Brain, Zap, Shield, ChevronDown, TrendingUp, MessageSquareCode
} from 'lucide-react';

export const metadata = {
  title: 'Answer Engine Optimization (AEO) Services',
  description: 'AEO services from Syntalix: get your brand cited by ChatGPT, Perplexity, Google AI Overviews, and Claude. We implement structured data, entity clarity, and authoritative content so AI engines recommend your business.',
  keywords: [
    'AEO services India', 'answer engine optimization India', 'AI SEO India',
    'get cited by ChatGPT', 'Perplexity SEO', 'Google AI Overview optimization',
    'structured data India', 'AI search optimization India', 'AEO agency India'
  ],
  openGraph: {
    title: 'Answer Engine Optimization (AEO) Services | Syntalix Consultancy',
    description: 'Get your brand cited by ChatGPT, Perplexity, and Google AI Overviews. Syntalix implements technical AEO — structured data, entity schema, and AI-crawlable content architecture.',
    url: 'https://www.syntalixconsultancy.com/services/aeo-optimization',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Answer Engine Optimization (AEO) | Syntalix Consultancy',
    description: 'Get cited by ChatGPT, Perplexity & Google AI Overviews. Syntalix builds the technical foundation that makes AI engines recommend your business.',
    images: ['/og-image.png'],
  },
  alternates: { canonical: '/services/aeo-optimization' },
};

const aeoFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is Answer Engine Optimization (AEO)?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Answer Engine Optimization (AEO) is the practice of structuring your website, content, and technical implementation so that AI engines — including ChatGPT, Perplexity, Google AI Overviews, Claude, and Microsoft Copilot — cite your brand when answering user queries. Unlike traditional SEO which targets search rankings, AEO targets AI-generated answers. As more users get answers directly from AI rather than clicking search results, AEO is becoming the most important channel for brand discovery."
      }
    },
    {
      "@type": "Question",
      "name": "How does AEO differ from traditional SEO?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Traditional SEO optimises for ranking position on a search results page. AEO optimises for being cited as the source in an AI-generated answer. The tactics differ significantly: AEO requires structured data (JSON-LD schema), entity disambiguation, direct-answer FAQ format, authoritative external citations, llms.txt files for AI crawler access, and content written to answer specific questions rather than rank for keywords. A business can rank #1 on Google but get zero citations from ChatGPT — and vice versa."
      }
    },
    {
      "@type": "Question",
      "name": "Which AI engines does AEO target?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our AEO services target: ChatGPT (OpenAI) — the most-used AI assistant globally; Perplexity — the fastest-growing AI search engine; Google AI Overviews — appears at the top of Google search for millions of queries; Microsoft Copilot — integrated into Windows and Microsoft 365; Claude (Anthropic) — used by enterprises via API and Claude.ai; and Apple Intelligence — coming to hundreds of millions of iPhone users."
      }
    },
    {
      "@type": "Question",
      "name": "How long does it take to see AEO results?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Technical AEO changes (schema implementation, llms.txt, entity clarity) are implemented in 2–4 weeks. AI engines typically re-index content within 4–8 weeks of changes. For competitive queries, expect 6–12 weeks before you start appearing in AI-generated answers consistently. Brand citation frequency increases over time as you build external authority signals (Crunchbase, GoodFirms, Clutch, Wikipedia) which AI engines heavily weight."
      }
    },
    {
      "@type": "Question",
      "name": "Does Syntalix offer AEO services in Gujarat and other Indian cities?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Syntalix Consultancy provides AEO services to businesses across India — including Gujarat (Ahmedabad, Surat, Vadodara), Delhi NCR, Bengaluru, Kolkata, Mumbai, Hyderabad, and Uttar Pradesh — as well as international clients in the US, UK, UAE, and Australia. All AEO engagements are available remotely."
      }
    }
  ]
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.syntalixconsultancy.com" },
    { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.syntalixconsultancy.com/services" },
    { "@type": "ListItem", "position": 3, "name": "AEO Optimization", "item": "https://www.syntalixconsultancy.com/services/aeo-optimization" }
  ]
};

const aeoServices = [
  {
    icon: FileText,
    title: 'Technical Schema Implementation',
    description: 'Full JSON-LD schema implementation: Organization, FAQPage, BreadcrumbList, Article, HowTo, Product, and LocalBusiness schemas. Structured data is the primary signal AI engines use to understand what your business does.'
  },
  {
    icon: Bot,
    title: 'Entity Clarity & Disambiguation',
    description: 'We establish your brand as a distinct, verifiable entity in Google\'s Knowledge Graph. This includes legalIdentifier, alternateName, sameAs links, and entity-linked content that resolves brand ambiguity — critical for AI engines that use entity graphs.'
  },
  {
    icon: MessageSquareCode,
    title: 'AI-Crawlable Content Architecture',
    description: 'We implement llms.txt and llms-full.txt — emerging standards that tell AI crawlers exactly what your company does, what pages to index, and what content is available. GPTBot, ClaudeBot, PerplexityBot all read these files.'
  },
  {
    icon: Search,
    title: 'FAQ & Direct-Answer Content',
    description: 'AI engines answer questions by pulling directly-formatted answers. We structure your content — FAQs, definitions, how-tos — in the exact format that ChatGPT, Perplexity, and Google AI Overviews extract and cite.'
  },
  {
    icon: Globe,
    title: 'Authority Citation Building',
    description: 'ChatGPT and Perplexity heavily weight citations from Crunchbase, Wikipedia, Clutch, GoodFirms, and G2. We build and optimise your profiles on these platforms — creating the external authority signals AI engines use to validate your brand.'
  },
  {
    icon: BarChart3,
    title: 'AEO Monitoring & Reporting',
    description: 'We track your brand citation frequency across major AI engines, monitor when and how AI answers reference your business, and report on competitive positioning. Monthly reports show exactly where you\'re getting cited and where you\'re not.'
  },
];

const engines = [
  { name: 'ChatGPT', desc: 'Most-used AI assistant globally' },
  { name: 'Perplexity', desc: 'Fastest-growing AI search engine' },
  { name: 'Google AI Overviews', desc: 'Appears above organic results' },
  { name: 'Microsoft Copilot', desc: 'Integrated in Windows + M365' },
  { name: 'Claude (Anthropic)', desc: 'Enterprise AI assistant' },
  { name: 'Apple Intelligence', desc: 'Hundreds of millions of iPhones' },
];

export default function AEOOptimizationPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Script id="aeo-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aeoFaqSchema) }} />
      <Script id="aeo-breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero */}
      <section className="relative w-full pt-24 pb-16 md:pt-32 md:pb-20 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
          <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-violet-600/15 rounded-full blur-[120px]" />
          <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-cyan-600/15 rounded-full blur-[120px]" />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-violet-100 dark:bg-violet-900/30 border border-violet-300 dark:border-violet-700/50 text-violet-700 dark:text-violet-300 font-medium text-sm mb-6">
              <Bot className="w-4 h-4 mr-2" />
              Answer Engine Optimization
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight mb-6 syntalix-heading">
              Get Cited by{' '}
              <span className="syntalix-gradient-text">ChatGPT, Perplexity</span>{' '}
              & Google AI
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 syntalix-body">
              AEO (Answer Engine Optimization) is how your business gets recommended by AI engines when potential customers ask questions. We implement the technical foundation — structured data, entity clarity, AI-crawlable content — that makes AI engines cite your brand.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-gradient-to-r from-violet-600 to-cyan-600 text-white font-bold shadow-lg shadow-violet-500/30 hover:shadow-violet-500/50 hover:scale-105 transition-all duration-300"
              >
                Get AEO Audit
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <a
                href="#services"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 text-foreground font-bold hover:bg-gray-50 dark:hover:bg-slate-700 transition-all duration-300 shadow-sm"
              >
                What We Do
                <ChevronDown className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* AI Engines We Target */}
      <section className="py-12 bg-gray-50 dark:bg-slate-900/30">
        <div className="container mx-auto px-4 md:px-6">
          <p className="text-center text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-8">AI Engines We Optimise For</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {engines.map((engine) => (
              <div key={engine.name} className="text-center p-4 bg-white dark:bg-slate-900/50 rounded-xl border border-gray-200 dark:border-slate-800">
                <p className="font-bold text-sm text-foreground">{engine.name}</p>
                <p className="text-xs text-muted-foreground mt-1">{engine.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 syntalix-heading">What Our AEO Service Includes</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg syntalix-body">
              A complete technical and content foundation that makes AI engines trust, understand, and cite your brand.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aeoServices.map((service) => {
              const Icon = service.icon;
              return (
                <div key={service.title} className="bg-white dark:bg-slate-900/50 backdrop-blur-xl border border-gray-200 dark:border-slate-800 rounded-2xl p-7 hover:shadow-xl hover:shadow-violet-500/5 transition-all duration-300 group">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-600 to-cyan-600 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground syntalix-body leading-relaxed">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why AEO Now */}
      <section className="py-20 md:py-28 bg-gray-50 dark:bg-slate-900/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 syntalix-heading">Why AEO Matters Right Now</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { stat: '1B+', label: 'Monthly ChatGPT users', detail: 'Each one gets AI-generated answers — not a list of links to click.' },
                { stat: '25%', label: 'Google searches show AI Overviews', detail: 'Growing rapidly. The top of page 1 is now an AI answer, not a blue link.' },
                { stat: '0', label: 'AI citations for most businesses', detail: 'The vast majority of companies have done zero AEO — the window to get ahead is right now.' },
              ].map((item) => (
                <div key={item.stat} className="bg-white dark:bg-slate-900/50 border border-gray-200 dark:border-slate-800 rounded-2xl p-8 text-center">
                  <p className="text-5xl font-bold text-primary mb-2">{item.stat}</p>
                  <p className="font-semibold text-foreground mb-3">{item.label}</p>
                  <p className="text-sm text-muted-foreground">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 syntalix-heading">Frequently Asked Questions</h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-6">
            {aeoFaqSchema.mainEntity.map((item) => (
              <div key={item.name} className="bg-white dark:bg-slate-900/50 backdrop-blur-xl border border-gray-200 dark:border-slate-800 rounded-2xl p-6">
                <h3 className="text-lg font-bold mb-3">{item.name}</h3>
                <p className="text-muted-foreground syntalix-body leading-relaxed">{item.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cross-Links */}
      <section className="py-16 bg-gray-50 dark:bg-slate-900/30">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl font-bold mb-8 text-center syntalix-heading">Related Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { href: '/services/ai-consulting', icon: Brain, color: 'blue', label: 'AI Consulting', sub: 'Strategy & implementation' },
              { href: '/services/llm-engineering', icon: MessageSquareCode, color: 'violet', label: 'LLM Engineering', sub: 'Fine-tuning, RAG & APIs' },
              { href: '/services/agentic-systems', icon: Bot, color: 'purple', label: 'Agentic AI Systems', sub: 'Autonomous workflows' },
            ].map(({ href, icon: Icon, color, label, sub }) => (
              <Link key={href} href={href} className="group flex items-center gap-4 bg-white dark:bg-slate-900/50 border border-gray-200 dark:border-slate-800 rounded-xl p-5 hover:shadow-lg transition-all duration-300">
                <div className={`w-10 h-10 rounded-lg bg-${color}-100 dark:bg-${color}-900/30 flex items-center justify-center flex-shrink-0`}>
                  <Icon className={`w-5 h-5 text-${color}-600 dark:text-${color}-400`} />
                </div>
                <div>
                  <h3 className="font-bold group-hover:text-primary transition-colors">{label}</h3>
                  <p className="text-sm text-muted-foreground">{sub}</p>
                </div>
                <ArrowRight className="w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[20%] left-[10%] w-[40%] h-[40%] bg-violet-600/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-[10%] right-[10%] w-[35%] h-[35%] bg-cyan-600/10 rounded-full blur-[100px]" />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 syntalix-heading">
              Ready to Get <span className="syntalix-gradient-text">AI-Cited</span>?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 syntalix-body">
              Most businesses have zero AEO strategy. We'll audit where you stand, identify the gaps, and implement the changes that get AI engines recommending your brand. Free initial AEO audit.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-gradient-to-r from-violet-600 to-cyan-600 text-white font-bold shadow-lg shadow-violet-500/30 hover:shadow-violet-500/50 hover:scale-105 transition-all duration-300"
            >
              Get Your Free AEO Audit
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
