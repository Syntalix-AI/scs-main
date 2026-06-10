import Link from "next/link";
import {
  Brain,
  MessageSquareCode,
  Bot,
  Globe,
  ArrowRight,
  Sparkles,
  Shield,
  Users,
  Clock,
  ChevronRight,
} from "lucide-react";

export const metadata = {
  title: "Our Services | Syntalix Consultancy Services",
  description:
    "Explore Syntalix Consultancy's full range of services including AI & ML infrastructure, LLM engineering, agentic AI systems, and web & mobile app development. Enterprise-grade solutions tailored for your business.",
  openGraph: {
    title: "Our Services | Syntalix Consultancy Services",
    description:
      "From AI/ML infrastructure to full-stack web and mobile development — discover how Syntalix Consultancy can transform your business with cutting-edge technology solutions.",
    url: "https://www.syntalixconsultancy.in/services",
  },
  alternates: {
    canonical: "https://www.syntalixconsultancy.in/services",
  },
};

const services = [
  {
    title: "AI & ML Infrastructure",
    slug: "ai-ml-infrastructure",
    description:
      "Custom ML model development, training pipeline setup, MLOps automation, and production-grade model deployment. We build the foundational AI systems that power intelligent enterprises.",
    icon: Brain,
    gradient: "from-blue-600 to-violet-600",
    features: [
      "Custom Model Development",
      "MLOps & Pipelines",
      "GPU Infrastructure",
      "Model Monitoring",
    ],
  },
  {
    title: "LLM Engineering",
    slug: "llm-engineering",
    description:
      "End-to-end large language model integration, fine-tuning, RAG system architecture, prompt engineering, and API development. Unlock the full potential of generative AI for your workflows.",
    icon: MessageSquareCode,
    gradient: "from-violet-600 to-purple-600",
    features: [
      "LLM Fine-tuning",
      "RAG Systems",
      "Prompt Engineering",
      "API Development",
    ],
  },
  {
    title: "Agentic AI Systems",
    slug: "agentic-systems",
    description:
      "Multi-agent orchestration, autonomous workflows, intelligent decision engines, and tool-use agents. Build AI systems that reason, plan, and execute complex tasks independently.",
    icon: Bot,
    gradient: "from-purple-600 to-pink-600",
    features: [
      "Multi-Agent Systems",
      "Autonomous Workflows",
      "Decision Engines",
      "Tool-Use Agents",
    ],
  },
  {
    title: "Web & Mobile Development",
    slug: "web-mobile-development",
    description:
      "Enterprise web applications, SaaS platforms, React and Next.js frontends, React Native and native iOS/Android mobile apps. Full-stack development with modern architecture.",
    icon: Globe,
    gradient: "from-pink-600 to-red-500",
    features: [
      "Enterprise Web Apps",
      "SaaS Platforms",
      "Mobile Development",
      "Cloud Architecture",
    ],
  },
];

const highlights = [
  {
    icon: Shield,
    title: "Enterprise-Grade Security",
    description:
      "SOC 2 compliant processes with end-to-end encryption and rigorous data handling protocols.",
  },
  {
    icon: Users,
    title: "Dedicated Expert Teams",
    description:
      "Senior engineers and ML specialists assigned exclusively to your project for consistent quality.",
  },
  {
    icon: Clock,
    title: "Rapid Delivery",
    description:
      "Agile methodology with 2-week sprint cycles ensuring fast iterations and transparent progress.",
  },
  {
    icon: Sparkles,
    title: "Cutting-Edge Technology",
    description:
      "We stay at the forefront of AI research, adopting the latest frameworks and best practices.",
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative w-full pt-24 pb-12 md:pt-32 md:pb-16 overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
          <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-primary/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-[-20%] right-[-10%] w-[40%] h-[40%] bg-secondary/20 rounded-full blur-[120px]" />
          <div className="absolute top-[30%] right-[10%] w-[30%] h-[30%] bg-purple-500/10 rounded-full blur-[100px]" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-purple-100 dark:bg-purple-900/30 border border-purple-300 dark:border-purple-700/50 text-purple-700 dark:text-purple-300 font-medium text-sm mb-6">
            <Sparkles className="w-4 h-4 mr-2" />
            End-to-End Technology Solutions
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight mb-6 syntalix-heading">
            Our{" "}
            <span className="syntalix-gradient-text">Services</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 syntalix-body">
            From foundational AI infrastructure to production-ready web and
            mobile applications, we deliver comprehensive technology solutions
            that drive measurable business outcomes. Every engagement is
            tailored to your unique challenges and growth objectives.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-bold shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 hover:scale-105 transition-all duration-300"
            >
              Schedule a Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <a
              href="#services-grid"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 text-foreground font-bold hover:bg-gray-50 dark:hover:bg-slate-700 transition-all duration-300 shadow-sm"
            >
              Explore Services
              <ChevronRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services-grid" className="pt-4 pb-20 md:pt-6 md:pb-28">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-10 md:mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 syntalix-heading">
              What We Build
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg syntalix-body">
              Each service is backed by deep domain expertise, battle-tested
              methodologies, and a relentless focus on delivering production-ready
              systems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="group block"
                >
                  <div className="relative h-full bg-white dark:bg-slate-900/50 backdrop-blur-xl border border-gray-200 dark:border-slate-800 rounded-2xl p-8 hover:shadow-2xl hover:shadow-purple-500/10 dark:hover:shadow-purple-500/5 transition-all duration-500 hover:-translate-y-1">
                    {/* Gradient accent line */}
                    <div
                      className={`absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r ${service.gradient} rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                    />

                    <div className="flex items-start gap-5">
                      <div
                        className={`flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center shadow-lg`}
                      >
                        <Icon className="w-7 h-7 text-white" />
                      </div>

                      <div className="flex-1 min-w-0">
                        <h3 className="text-xl md:text-2xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                          {service.title}
                        </h3>
                        <p className="text-muted-foreground mb-5 syntalix-body leading-relaxed">
                          {service.description}
                        </p>

                        {/* Feature tags */}
                        <div className="flex flex-wrap gap-2 mb-5">
                          {service.features.map((feature) => (
                            <span
                              key={feature}
                              className="text-xs font-medium px-3 py-1 rounded-full bg-gray-100 dark:bg-slate-800 text-muted-foreground"
                            >
                              {feature}
                            </span>
                          ))}
                        </div>

                        <span className="inline-flex items-center text-sm font-semibold text-primary group-hover:gap-2 transition-all duration-300">
                          Learn More
                          <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Syntalix Section */}
      <section className="py-20 md:py-28 bg-gray-50 dark:bg-slate-900/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 syntalix-heading">
              Why Choose Syntalix
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg syntalix-body">
              We combine deep technical expertise with a consultative approach to
              deliver solutions that truly move the needle for your business.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="bg-white dark:bg-slate-900/50 backdrop-blur-xl border border-gray-200 dark:border-slate-800 rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground syntalix-body">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[20%] left-[10%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-[10%] right-[10%] w-[35%] h-[35%] bg-secondary/10 rounded-full blur-[100px]" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 syntalix-heading">
              Ready to Build Something{" "}
              <span className="syntalix-gradient-text">Extraordinary</span>?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 syntalix-body">
              Whether you need a custom AI model, a production-ready LLM pipeline,
              an autonomous agent system, or a full-stack application — our team is
              ready to bring your vision to life. Start with a free consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-bold shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 hover:scale-105 transition-all duration-300"
              >
                Get a Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}