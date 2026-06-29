import About from '@/components/Home/About'
import Link from 'next/link'

export const metadata = {
  title: 'About Us',
  description: 'Syntalix LLP (LLPIN: ACR-6280) is a registered AI/ML consultancy in India, founded to build production-grade LLM applications, agentic systems, and enterprise software for global clients.',
  alternates: { canonical: '/about' },
  twitter: {
    card: 'summary_large_image',
    title: 'About Us | Syntalix Consultancy',
    description: 'Syntalix LLP (LLPIN: ACR-6280) — registered AI/ML consultancy in India building LLM applications, agentic systems, and enterprise software for global clients.',
    images: ['/og-image.png'],
  },
  openGraph: {
    title: 'About Us | Syntalix Consultancy',
    description: 'Syntalix LLP (LLPIN: ACR-6280) is a registered AI/ML consultancy in India, founded to build production-grade LLM applications, agentic systems, and enterprise software for global clients.',
    url: 'https://www.syntalixconsultancy.com/about',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
}

const aboutBreadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.syntalixconsultancy.com" },
    { "@type": "ListItem", "position": 2, "name": "About", "item": "https://www.syntalixconsultancy.com/about" }
  ]
}

const AboutPage = () => {
  return (
    <main className="pt-24 md:pt-32 pb-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutBreadcrumbSchema) }}
      />
      <About />

      {/* Who We Are */}
      <section className="py-16 md:py-24 bg-background section-glow">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto space-y-16">

            {/* Why Choose Syntalix */}
            <div className="text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold syntalix-heading text-foreground">
                Why Choose Syntalix?
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                We are <strong>Syntalix LLP</strong> (LLPIN: ACR-6280), a registered AI/ML consultancy in India
                with deep expertise in large language models, agentic AI systems, and enterprise software development.
                Our team builds practical, scalable solutions that drive measurable business outcomes — from LLM
                fine-tuning and RAG pipelines to full-stack enterprise applications.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Founded in 2025, Syntalix was created to solve a specific problem: the gap between AI research
                and production-ready AI. Most LLM projects fail in production — not because the models are bad,
                but because the engineering surrounding them is underpowered. We specialise in the hard parts:
                evaluation, reliability, cost optimisation, safety, and MLOps.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
                <div className="glass-card p-6 rounded-2xl card-hover">
                  <p className="text-3xl font-bold text-primary mb-2">50+</p>
                  <p className="text-sm text-muted-foreground">Projects delivered across AI, ML, web, and mobile</p>
                </div>
                <div className="glass-card p-6 rounded-2xl card-hover">
                  <p className="text-3xl font-bold text-primary mb-2">5+</p>
                  <p className="text-sm text-muted-foreground">Countries served including US, UK, UAE, and Australia</p>
                </div>
                <div className="glass-card p-6 rounded-2xl card-hover">
                  <p className="text-3xl font-bold text-primary mb-2">24/7</p>
                  <p className="text-sm text-muted-foreground">Support and communication across time zones</p>
                </div>
              </div>
            </div>

            {/* Our Expertise */}
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold syntalix-heading text-foreground text-center">
                Our Technical Expertise
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed text-center">
                We work across the full AI/ML and software stack — from model-level engineering to production infrastructure.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                {[
                  {
                    category: "LLM & AI",
                    items: ["LangChain", "LangGraph", "Azure OpenAI", "Ollama", "RAG Systems", "Vector Embeddings", "LLM Fine-Tuning (LoRA, QLoRA)", "Prompt Engineering"]
                  },
                  {
                    category: "Infrastructure & MLOps",
                    items: ["MLflow", "DVC", "OpenTelemetry", "FastAPI", "Docker", "Kubernetes", "GPU Infrastructure", "Model Monitoring"]
                  },
                  {
                    category: "Web & Mobile",
                    items: ["Next.js", "React", "React Native", "TypeScript", "Node.js", "iOS (Swift)", "Android (Kotlin)", "SaaS Platforms"]
                  },
                  {
                    category: "Cloud & Data",
                    items: ["AWS", "Azure", "GCP", "PostgreSQL", "MongoDB", "Redis", "Snowflake", "Pinecone / Weaviate"]
                  }
                ].map((stack) => (
                  <div key={stack.category} className="glass-card p-6 rounded-2xl card-hover">
                    <h3 className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">{stack.category}</h3>
                    <ul className="flex flex-wrap gap-2">
                      {stack.items.map((item) => (
                        <li key={item} className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary font-medium">{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* How We Work */}
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold syntalix-heading text-foreground text-center">
                How We Work
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4">
                {[
                  {
                    step: "01",
                    title: "Discovery",
                    desc: "We start by deeply understanding your business problem, data landscape, and technical constraints. We define success metrics upfront so every decision has a clear target."
                  },
                  {
                    step: "02",
                    title: "Build",
                    desc: "Iterative, test-driven development with weekly demos. We ship working software early and often, adjusting based on feedback rather than waiting months for a final reveal."
                  },
                  {
                    step: "03",
                    title: "Deploy & Monitor",
                    desc: "We handle production deployment with full observability — logging, tracing, model drift detection, and alerting. We don't disappear after launch."
                  }
                ].map((phase) => (
                  <div key={phase.step} className="glass-card p-6 rounded-2xl card-hover text-center">
                    <p className="text-4xl font-bold text-primary/30 mb-3">{phase.step}</p>
                    <h3 className="text-xl font-bold text-foreground mb-3">{phase.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{phase.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Notable Projects */}
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold syntalix-heading text-foreground text-center">
                Notable Work
              </h2>
              <div className="space-y-4">
                {[
                  {
                    title: "Automated Document Processing with LLMs",
                    outcome: "80% reduction in processing time",
                    href: "/case-studies/automated-document-processing-llm"
                  },
                  {
                    title: "Predictive Maintenance AI Infrastructure",
                    outcome: "35% reduction in manufacturing downtime",
                    href: "/case-studies/predictive-maintenance-ai-infrastructure"
                  },
                  {
                    title: "Enterprise E-Commerce Modernization",
                    outcome: "50% faster load times, 20% conversion increase",
                    href: "/case-studies/enterprise-ecommerce-modernization"
                  }
                ].map((project) => (
                  <Link key={project.href} href={project.href} className="group flex items-center justify-between glass-card p-5 rounded-xl card-hover">
                    <div>
                      <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">{project.title}</h3>
                      <p className="text-sm text-muted-foreground mt-1">{project.outcome}</p>
                    </div>
                    <span className="text-primary group-hover:translate-x-1 transition-transform text-lg">→</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Legal & Registration */}
            <div className="glass-card p-8 rounded-2xl border border-primary/20 space-y-4">
              <h2 className="text-2xl font-bold syntalix-heading text-foreground">
                Legal & Registration
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-muted-foreground font-medium">Legal Name</p>
                  <p className="text-foreground font-semibold">Syntalix LLP</p>
                </div>
                <div>
                  <p className="text-muted-foreground font-medium">LLPIN</p>
                  <p className="text-foreground font-semibold">ACR-6280</p>
                </div>
                <div>
                  <p className="text-muted-foreground font-medium">Registered In</p>
                  <p className="text-foreground font-semibold">India (Uttar Pradesh)</p>
                </div>
                <div>
                  <p className="text-muted-foreground font-medium">Founded</p>
                  <p className="text-foreground font-semibold">2025</p>
                </div>
                <div>
                  <p className="text-muted-foreground font-medium">Service Area</p>
                  <p className="text-foreground font-semibold">India, US, UK, UAE, Australia</p>
                </div>
                <div>
                  <p className="text-muted-foreground font-medium">Contact</p>
                  <p className="text-foreground font-semibold">syntalix.consultancy@gmail.com</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-4 text-center">
              <Link
                href="/services"
                className="inline-flex px-8 py-3 rounded-full gradient-primary text-white font-semibold shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:scale-105 transition-all duration-300"
              >
                Explore Our Services
              </Link>
            </div>

          </div>
        </div>
      </section>
    </main>
  )
}

export default AboutPage