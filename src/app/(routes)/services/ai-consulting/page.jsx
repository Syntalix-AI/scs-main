import Link from 'next/link';
import Script from 'next/script';
import {
  Brain, Target, BarChart3, Users, CheckCircle2, ArrowRight,
  Lightbulb, Workflow, Shield, TrendingUp, Globe, Zap, ChevronDown
} from 'lucide-react';

export const metadata = {
  title: 'AI Consulting Services',
  description: 'Strategic AI consulting from Syntalix Consultancy — helping enterprises in Gujarat, Delhi, Bengaluru, Kolkata, and across India identify AI opportunities, build roadmaps, and implement production-grade AI systems.',
  keywords: [
    'AI consulting company India', 'AI consulting Gujarat', 'AI consulting Ahmedabad',
    'AI consulting Delhi', 'AI consulting Bengaluru', 'enterprise AI strategy India',
    'AI implementation consulting', 'AI roadmap India', 'AI transformation India'
  ],
  openGraph: {
    title: 'AI Consulting Services | Syntalix Consultancy',
    description: 'Strategic AI consulting for Indian enterprises. We help you identify AI opportunities, build implementation roadmaps, and deliver production-grade AI systems across Gujarat, Delhi, Bengaluru, and globally.',
    url: 'https://www.syntalixconsultancy.com/services/ai-consulting',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Consulting Services | Syntalix Consultancy',
    description: 'Strategic AI consulting for Indian enterprises — identify opportunities, build AI roadmaps, implement production-grade AI.',
    images: ['/og-image.png'],
  },
  alternates: { canonical: '/services/ai-consulting' },
};

const consultingFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What does an AI consulting company do?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "An AI consulting company helps businesses identify where AI creates measurable value, designs the technical architecture for AI systems, builds and deploys production-grade models, and monitors them post-launch. Syntalix Consultancy provides end-to-end AI consulting — from initial use-case discovery and ROI analysis through LLM engineering, agentic workflow automation, and ongoing MLOps support."
      }
    },
    {
      "@type": "Question",
      "name": "Does Syntalix offer AI consulting in Gujarat?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Syntalix Consultancy provides AI consulting services to businesses across Gujarat including Ahmedabad, Surat, Vadodara, and Rajkot — as well as Delhi NCR, Bengaluru, Kolkata, Mumbai, and other major Indian cities. We also serve international clients across the US, UK, UAE, and Australia. All engagements are available remotely."
      }
    },
    {
      "@type": "Question",
      "name": "How is Syntalix different from a generic IT consultant?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Syntalix is an AI-native consultancy — we don't do generic IT. Our team specialises exclusively in AI/ML engineering: LLM engineering, RAG pipelines, agentic systems, MLOps, and AI infrastructure. We're engineers first, consultants second — every recommendation comes with a technical implementation plan and we execute it ourselves."
      }
    },
    {
      "@type": "Question",
      "name": "What industries does Syntalix consult for?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Syntalix has delivered AI consulting and implementation projects across Finance & Legal (document intelligence, compliance automation), Manufacturing (predictive maintenance, quality inspection), Retail & E-Commerce (recommendation engines, demand forecasting), Healthcare (clinical NLP, medical document processing), and Technology (developer tools, AI-powered SaaS platforms)."
      }
    },
    {
      "@type": "Question",
      "name": "What is the typical engagement model?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We offer three engagement models: (1) Strategy Sprint — a 2-week intensive assessment that produces your AI roadmap and business case; (2) Project-Based — fixed-scope implementation of a defined AI system with clear deliverables; (3) Embedded Team — ongoing senior AI engineers working as an extension of your team on a monthly retainer. All engagements start with a free consultation."
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
    { "@type": "ListItem", "position": 3, "name": "AI Consulting", "item": "https://www.syntalixconsultancy.com/services/ai-consulting" }
  ]
};

const phases = [
  {
    step: '01', title: 'Discovery & Audit',
    description: 'We map your current operations, data assets, and team capabilities. We identify the highest-ROI AI opportunities and the biggest blockers — so you invest in the right problems first.'
  },
  {
    step: '02', title: 'AI Roadmap & Business Case',
    description: 'We deliver a prioritised AI roadmap with implementation timelines, resource requirements, cost estimates, and projected business impact. No fluff — just a concrete plan you can take to your board.'
  },
  {
    step: '03', title: 'Proof of Concept',
    description: 'Before committing to full-scale development, we validate the highest-priority use case with a focused PoC. This de-risks investment and lets you see real results within weeks, not months.'
  },
  {
    step: '04', title: 'Production Implementation',
    description: 'Our engineering team builds the full production system — with proper infrastructure, monitoring, security, and documentation. We don\'t just prototype; we ship systems that run reliably at scale.'
  },
  {
    step: '05', title: 'Monitor & Optimise',
    description: 'Post-deployment, we set up model drift monitoring, performance dashboards, and cost optimisation. AI systems degrade over time — we build the feedback loops that keep yours improving.'
  },
];

const industries = [
  { name: 'Finance & Legal', examples: 'Document intelligence, KYC automation, compliance monitoring' },
  { name: 'Manufacturing', examples: 'Predictive maintenance, quality inspection, demand forecasting' },
  { name: 'Retail & E-Commerce', examples: 'Recommendation engines, AI search, inventory optimisation' },
  { name: 'Healthcare', examples: 'Clinical NLP, medical document processing, patient triage' },
  { name: 'Technology & SaaS', examples: 'AI-powered features, developer tools, intelligent automation' },
  { name: 'Logistics & Supply Chain', examples: 'Route optimisation, anomaly detection, demand planning' },
];

const engagementModels = [
  {
    title: 'Strategy Sprint',
    duration: '2 weeks',
    description: 'A focused engagement that produces your AI Opportunity Map, prioritised roadmap, and business case. Perfect for boards evaluating where to invest in AI.',
    features: ['AI opportunity audit', 'ROI modelling', 'Implementation roadmap', 'Vendor & build analysis', 'Board-ready presentation'],
    gradient: 'from-violet-600 to-purple-600',
  },
  {
    title: 'Project-Based',
    duration: 'Fixed scope',
    description: 'End-to-end delivery of a defined AI system — from architecture design through production deployment. Fixed timeline, fixed deliverables, clear success metrics.',
    features: ['System design & architecture', 'Full engineering build', 'Testing & validation', 'Production deployment', 'Documentation & handover'],
    gradient: 'from-blue-600 to-violet-600',
    featured: true,
  },
  {
    title: 'Embedded Team',
    duration: 'Monthly retainer',
    description: 'Senior Syntalix AI engineers become an embedded extension of your team — handling new features, model improvements, and ongoing AI operations.',
    features: ['Dedicated senior engineers', 'Ongoing development', 'MLOps & monitoring', 'Weekly syncs', 'Priority support'],
    gradient: 'from-purple-600 to-pink-600',
  },
];

export default function AIConsultingPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Script id="consulting-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(consultingFaqSchema) }} />
      <Script id="consulting-breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero */}
      <section className="relative w-full pt-24 pb-16 md:pt-32 md:pb-20 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
          <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-blue-600/15 rounded-full blur-[120px]" />
          <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-violet-600/15 rounded-full blur-[120px]" />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-100 dark:bg-blue-900/30 border border-blue-300 dark:border-blue-700/50 text-blue-700 dark:text-blue-300 font-medium text-sm mb-6">
              <Brain className="w-4 h-4 mr-2" />
              AI Consulting
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight mb-6 syntalix-heading">
              Strategic{' '}
              <span className="syntalix-gradient-text">AI Consulting</span>{' '}
              for Indian Enterprises
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-4 syntalix-body">
              We help businesses across Gujarat, Delhi, Bengaluru, Kolkata, and Uttar Pradesh identify where AI creates real value, build a concrete implementation roadmap, and deliver production-grade AI systems — not slide decks.
            </p>
            <p className="text-sm text-muted-foreground/70 mb-8">
              Serving Ahmedabad · Surat · Vadodara · Delhi NCR · Bengaluru · Kolkata · Lucknow · Mumbai · and global clients
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-violet-600 text-white font-bold shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:scale-105 transition-all duration-300"
              >
                Book a Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <a
                href="#process"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 text-foreground font-bold hover:bg-gray-50 dark:hover:bg-slate-700 transition-all duration-300 shadow-sm"
              >
                Our Process
                <ChevronDown className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 syntalix-heading">What AI Consulting Actually Means</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg syntalix-body">
              We don't sell strategy reports. We identify the right AI problems, build the solution, and make it run in production.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Target, title: 'Use-Case Discovery', desc: 'Identify the 2–3 AI applications that will generate the highest ROI for your specific business — not generic AI trends.' },
              { icon: BarChart3, title: 'ROI Modelling', desc: 'Quantify the business case: cost savings, revenue uplift, headcount efficiency. Give your board a number to approve.' },
              { icon: Workflow, title: 'Implementation Roadmap', desc: 'A phased, prioritised plan that sequences AI investments for maximum early impact and minimum organisational disruption.' },
              { icon: Zap, title: 'Proof of Concept', desc: 'Validate before you invest. A focused 2–4 week PoC proves the AI approach works on your real data before full build.' },
              { icon: Shield, title: 'Risk & Compliance Review', desc: 'Identify data privacy, regulatory, and operational risks before they become production problems. Especially critical for BFSI and healthcare.' },
              { icon: TrendingUp, title: 'Vendor & Build Analysis', desc: 'Should you buy an AI tool, build custom, or fine-tune an existing model? We give you an objective recommendation with cost/benefit analysis.' },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-white dark:bg-slate-900/50 backdrop-blur-xl border border-gray-200 dark:border-slate-800 rounded-2xl p-7 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300 group">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-violet-600 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">{title}</h3>
                <p className="text-muted-foreground syntalix-body leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="py-20 md:py-28 bg-gray-50 dark:bg-slate-900/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 syntalix-heading">Our Consulting Process</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg syntalix-body">
              From first conversation to production AI — a structured, low-risk process.
            </p>
          </div>
          <div className="max-w-3xl mx-auto space-y-8">
            {phases.map((phase) => (
              <div key={phase.step} className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600 to-violet-600 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  {phase.step}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{phase.title}</h3>
                  <p className="text-muted-foreground syntalix-body leading-relaxed">{phase.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement Models */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 syntalix-heading">How We Engage</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg syntalix-body">
              Three models designed for different stages of your AI journey.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {engagementModels.map((model) => (
              <div
                key={model.title}
                className={`relative bg-white dark:bg-slate-900/50 backdrop-blur-xl border rounded-2xl p-8 transition-all duration-300 ${
                  model.featured
                    ? 'border-primary/40 shadow-2xl shadow-primary/10 scale-[1.02]'
                    : 'border-gray-200 dark:border-slate-800 hover:shadow-xl'
                }`}
              >
                {model.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-600 to-violet-600 text-white text-xs font-bold px-4 py-1 rounded-full">
                    Most Popular
                  </div>
                )}
                <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${model.gradient} text-white mb-4`}>
                  {model.duration}
                </div>
                <h3 className="text-2xl font-bold mb-3">{model.title}</h3>
                <p className="text-muted-foreground mb-6 syntalix-body leading-relaxed">{model.description}</p>
                <ul className="space-y-2 mb-8">
                  {model.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={`block text-center px-6 py-3 rounded-full font-bold transition-all duration-300 ${
                    model.featured
                      ? 'bg-gradient-to-r from-blue-600 to-violet-600 text-white shadow-lg hover:shadow-blue-500/40 hover:scale-105'
                      : 'border border-gray-200 dark:border-slate-700 hover:border-primary hover:text-primary'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 md:py-28 bg-gray-50 dark:bg-slate-900/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 syntalix-heading">Industries We Serve</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg syntalix-body">
              Deep domain knowledge across the sectors driving India's AI adoption.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry) => (
              <div key={industry.name} className="bg-white dark:bg-slate-900/50 border border-gray-200 dark:border-slate-800 rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
                <h3 className="font-bold text-lg mb-2">{industry.name}</h3>
                <p className="text-sm text-muted-foreground">{industry.examples}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 syntalix-heading">Frequently Asked Questions</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg syntalix-body">Common questions about our AI consulting services.</p>
          </div>
          <div className="max-w-3xl mx-auto space-y-6">
            {consultingFaqSchema.mainEntity.map((item) => (
              <div key={item.name} className="bg-white dark:bg-slate-900/50 backdrop-blur-xl border border-gray-200 dark:border-slate-800 rounded-2xl p-6">
                <h3 className="text-lg font-bold mb-3">{item.name}</h3>
                <p className="text-muted-foreground syntalix-body leading-relaxed">{item.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[20%] left-[10%] w-[40%] h-[40%] bg-blue-600/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-[10%] right-[10%] w-[35%] h-[35%] bg-violet-600/10 rounded-full blur-[100px]" />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 syntalix-heading">
              Ready to Start Your <span className="syntalix-gradient-text">AI Journey</span>?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 syntalix-body">
              Whether you're in Ahmedabad, Delhi, Bengaluru, Kolkata, or anywhere globally — our first consultation is free. Let's identify the right AI opportunities for your business.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-violet-600 text-white font-bold shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:scale-105 transition-all duration-300"
            >
              Book a Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
