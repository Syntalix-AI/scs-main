import Link from "next/link";
import {
  Globe, Layers, Smartphone, Cloud, Code2, Zap, ArrowRight, CheckCircle2,
  ChevronDown, Brain, MessageSquareCode, Bot, Gauge, Users, Lock,
} from "lucide-react";

export const metadata = {
  title: "Web & Mobile App Development | Syntalix Consultancy",
  description: "Enterprise web applications, SaaS platforms, React/Next.js frontends, React Native, iOS and Android development. Syntalix delivers full-stack solutions with modern cloud architecture.",
  openGraph: {
    title: "Web & Mobile App Development | Syntalix Consultancy",
    description: "Full-stack web and mobile development: enterprise apps, SaaS platforms, React, Next.js, React Native, iOS, Android, and cloud-native architecture.",
    url: "https://www.syntalixconsultancy.in/services/web-mobile-development",
  },
  alternates: { canonical: "https://www.syntalixconsultancy.in/services/web-mobile-development" },
};

const features = [
  {
    icon: Layers,
    title: "Enterprise Web Applications",
    description: "We build complex, data-intensive web applications designed for enterprise scale. Our frontend engineers deliver performant React and Next.js applications with server-side rendering, edge caching, and accessibility compliance. From executive dashboards to customer-facing portals, we create interfaces that users love and businesses trust.",
  },
  {
    icon: Cloud,
    title: "SaaS Platform Development",
    description: "Full-stack SaaS platform development with multi-tenancy architecture, subscription billing integration, role-based access control, and usage analytics. We design platforms for scale from the ground up — ensuring your product can grow from 100 to 100,000 customers without architectural rework.",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Cross-platform mobile applications using React Native that deliver native performance on iOS and Android from a single codebase. For performance-critical applications, we also develop native iOS (Swift) and Android (Kotlin) apps with platform-specific optimizations and deep OS integrations.",
  },
  {
    icon: Code2,
    title: "API & Backend Engineering",
    description: "Robust, scalable backend systems built with Node.js, Python (FastAPI, Django), and cloud-native services. We design RESTful and GraphQL APIs, implement microservices architectures, and build the data layer infrastructure — databases, caching, queuing — that powers your application reliably.",
  },
  {
    icon: Gauge,
    title: "Performance Optimization",
    description: "We analyze and optimize existing applications for speed, Core Web Vitals compliance, and scalability. From bundle size reduction and lazy loading to database query optimization and CDN configuration, we have improved load times by 60–80% for client applications — directly improving SEO rankings and conversion rates.",
  },
  {
    icon: Lock,
    title: "Security & Compliance",
    description: "Security is integrated into every layer of our development process. We implement OWASP-compliant coding practices, conduct security audits, set up WAF configurations, manage secrets securely, and ensure data handling meets GDPR, SOC 2, and other relevant compliance frameworks for your industry.",
  },
];

const processSteps = [
  { step: "01", title: "Discovery & Architecture Planning", description: "We begin with a detailed discovery phase — understanding your users, business logic, integration requirements, and growth projections. We produce system architecture documents, database schemas, API contracts, and a prioritized feature roadmap before development begins, preventing costly reworks later." },
  { step: "02", title: "UI/UX Design & Prototyping", description: "Our designers create wireframes, high-fidelity mockups, and interactive prototypes validated with real user feedback. We establish a design system with consistent components, typography, and colour tokens that accelerates development and ensures a cohesive brand experience across all touchpoints." },
  { step: "03", title: "Agile Development Sprints", description: "Development proceeds in 2-week sprints with continuous delivery to staging environments. You have full visibility into progress through sprint demos, a shared task board, and direct communication with the development team. Functional software is available for testing from week 2." },
  { step: "04", title: "QA & Performance Testing", description: "Comprehensive quality assurance including automated unit and integration tests, end-to-end browser testing, load testing up to 10x expected traffic, security scanning, and cross-device/browser compatibility validation. We aim for >90% test coverage on critical business logic." },
  { step: "05", title: "Deployment & Post-Launch Support", description: "We manage production deployments with zero-downtime release strategies, set up monitoring and alerting, and provide structured post-launch support. Comprehensive documentation and knowledge transfer ensure your team can confidently maintain and extend the application." },
];

const useCases = [
  { title: "AI-Powered SaaS Analytics Platform", description: "We built a full-stack SaaS analytics platform for a data company serving 5,000+ business users. The Next.js frontend delivers sub-second dashboard loads via incremental static regeneration and edge caching, while the Python/FastAPI backend processes 50M+ data events daily. The platform scaled from MVP to $2M ARR within 18 months of launch." },
  { title: "Enterprise Healthcare Portal", description: "Our team developed a HIPAA-compliant patient portal and clinical dashboard for a healthcare network serving 200,000+ patients. The React Native mobile app delivers a 4.8-star rated experience on iOS and Android, with real-time appointment booking, telemedicine integration, and secure EHR record access." },
  { title: "E-Commerce Platform with AI Recommendations", description: "We built a high-performance e-commerce platform integrated with our AI recommendation engine for a retail client. The platform handles 50,000+ concurrent users during peak periods, delivers personalised product recommendations, and achieves a 35% increase in average order value compared to the client's previous platform." },
];

const techStack = [
  { category: "Frontend", items: ["React", "Next.js 14", "TypeScript", "Tailwind CSS", "Framer Motion"] },
  { category: "Mobile", items: ["React Native", "Expo", "Swift (iOS)", "Kotlin (Android)", "Flutter"] },
  { category: "Backend", items: ["Node.js", "Python/FastAPI", "PostgreSQL", "Redis", "GraphQL"] },
  { category: "Cloud & DevOps", items: ["AWS", "GCP", "Vercel", "Docker", "GitHub Actions"] },
];

const faqs = [
  { question: "How do you approach web performance and Core Web Vitals?", answer: "Performance is a first-class concern in our development process. We implement server-side rendering and static generation with Next.js for fast initial loads, use image optimization with next/image, implement code splitting and lazy loading, configure CDN edge caching for static assets, and measure CWV metrics throughout development. Our typical deliverables achieve Lighthouse scores of 90+ on Performance, Accessibility, and SEO." },
  { question: "Can you build applications that integrate AI and ML capabilities?", answer: "Yes — this is a core strength. We build web and mobile applications with native integration of AI features like LLM-powered chat interfaces, computer vision capabilities, recommendation engines, predictive analytics dashboards, and agentic workflow automation. Our team has both the software engineering and AI/ML expertise to build cohesive AI-native products." },
  { question: "What's your approach to responsive design and mobile compatibility?", answer: "We design mobile-first, then scale up. All our web applications are fully responsive, tested across major browsers and screen sizes, and optimized for touch interactions. For applications with significant mobile traffic, we recommend native or React Native apps for a premium user experience." },
  { question: "How do you handle project communication and transparency?", answer: "We use an async-first communication model with regular structured touchpoints. You'll have access to a shared project management board (Linear/Jira), a dedicated Slack channel for daily communication, weekly sprint demos with recorded video summaries, and a staging environment with continuously deployed builds so you can review real, working software at any time." },
  { question: "Do you provide ongoing maintenance and feature development after launch?", answer: "Absolutely. We offer flexible post-launch support arrangements ranging from a dedicated retainer for ongoing feature development to a maintenance contract covering monitoring, security updates, and bug fixes. Many of our clients continue working with us for years after initial launch, with our team becoming an embedded extension of their engineering function." },
];

export default function WebMobileDevelopmentPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <section className="relative w-full pt-16 pb-20 md:pt-24 md:pb-28 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
          <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-pink-600/15 rounded-full blur-[120px]" />
          <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-rose-500/10 rounded-full blur-[120px]" />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-pink-100 dark:bg-pink-900/30 border border-pink-300 dark:border-pink-700/50 text-pink-700 dark:text-pink-300 font-medium text-sm mb-6">
              <Globe className="w-4 h-4 mr-2" />
              Web & Mobile Development
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight mb-6 syntalix-heading">
              Enterprise{" "}
              <span className="syntalix-gradient-text">Web & Mobile Apps</span>{" "}
              Built to Scale
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mb-8 syntalix-body">
              We engineer full-stack web and mobile applications that combine
              beautiful design with production-grade reliability. From SaaS platforms
              and enterprise portals to AI-integrated mobile apps — we deliver software
              that users love and businesses grow on.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-gradient-to-r from-pink-600 to-rose-500 text-white font-bold shadow-lg shadow-pink-500/30 hover:shadow-pink-500/50 hover:scale-105 transition-all duration-300">
                Discuss Your Project <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <a href="#features" className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 text-foreground font-bold hover:bg-gray-50 dark:hover:bg-slate-700 transition-all duration-300 shadow-sm">
                Explore Capabilities <ChevronDown className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 syntalix-heading">Full-Stack Development Capabilities</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg syntalix-body">End-to-end engineering expertise across the entire web and mobile stack — from design to deployment and beyond.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div key={feature.title} className="bg-white dark:bg-slate-900/50 backdrop-blur-xl border border-gray-200 dark:border-slate-800 rounded-2xl p-7 hover:shadow-xl hover:shadow-pink-500/5 transition-all duration-300 group">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-600 to-rose-500 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground syntalix-body leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 md:py-28 bg-gray-50 dark:bg-slate-900/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 syntalix-heading">Our Development Process</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg syntalix-body">A collaborative, transparent process that delivers working software early and often.</p>
          </div>
          <div className="max-w-3xl mx-auto space-y-8">
            {processSteps.map((step) => (
              <div key={step.step} className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-pink-600 to-rose-500 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  {step.step}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground syntalix-body leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 syntalix-heading">Real-World Delivered Products</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg syntalix-body">Applications we've built that drive real business outcomes for our clients.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {useCases.map((useCase) => (
              <div key={useCase.title} className="bg-white dark:bg-slate-900/50 backdrop-blur-xl border border-gray-200 dark:border-slate-800 rounded-2xl p-7 hover:shadow-lg transition-all duration-300">
                <div className="w-10 h-10 rounded-lg bg-pink-100 dark:bg-pink-900/30 flex items-center justify-center mb-4">
                  <Zap className="w-5 h-5 text-pink-600 dark:text-pink-400" />
                </div>
                <h3 className="text-lg font-bold mb-3">{useCase.title}</h3>
                <p className="text-sm text-muted-foreground syntalix-body leading-relaxed">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 md:py-28 bg-gray-50 dark:bg-slate-900/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 syntalix-heading">Technology Stack</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg syntalix-body">Modern, battle-tested technologies chosen for performance, developer experience, and long-term maintainability.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {techStack.map((stack) => (
              <div key={stack.category} className="bg-white dark:bg-slate-900/50 backdrop-blur-xl border border-gray-200 dark:border-slate-800 rounded-2xl p-6">
                <h3 className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">{stack.category}</h3>
                <ul className="space-y-2">
                  {stack.items.map((item) => (
                    <li key={item} className="flex items-center text-sm text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 mr-2 text-green-500 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
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
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg syntalix-body">Common questions about our web and mobile development services.</p>
          </div>
          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq) => (
              <div key={faq.question} className="bg-white dark:bg-slate-900/50 backdrop-blur-xl border border-gray-200 dark:border-slate-800 rounded-2xl p-6">
                <h3 className="text-lg font-bold mb-3">{faq.question}</h3>
                <p className="text-muted-foreground syntalix-body leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cross-Links */}
      <section className="py-16 bg-gray-50 dark:bg-slate-900/30">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl font-bold mb-8 text-center syntalix-heading">Explore Our Other Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { href: "/services/ai-ml-infrastructure", icon: Brain, color: "blue", label: "AI & ML Infrastructure", sub: "Models & MLOps" },
              { href: "/services/llm-engineering", icon: MessageSquareCode, color: "violet", label: "LLM Engineering", sub: "Fine-tuning, RAG & APIs" },
              { href: "/services/agentic-systems", icon: Bot, color: "purple", label: "Agentic AI Systems", sub: "Autonomous workflows" },
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
          <div className="absolute top-[20%] left-[10%] w-[40%] h-[40%] bg-pink-600/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-[10%] right-[10%] w-[35%] h-[35%] bg-rose-500/10 rounded-full blur-[100px]" />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 syntalix-heading">
              Ready to Build Your <span className="syntalix-gradient-text">Next Product</span>?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 syntalix-body">
              Whether you have a detailed spec or just an idea on a napkin, our team will help you design, architect, and build a product your customers will love. Start with a free discovery call.
            </p>
            <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-gradient-to-r from-pink-600 to-rose-500 text-white font-bold shadow-lg shadow-pink-500/30 hover:shadow-pink-500/50 hover:scale-105 transition-all duration-300">
              Get a Free Consultation <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
