import Link from "next/link";
import Image from "next/image";
import {
  MessageSquareCode,
  Layers,
  Search,
  Wand2,
  Code2,
  Zap,
  ArrowRight,
  CheckCircle2,
  FileText,
  Settings2,
  Lock,
  ChevronDown,
  Brain,
  Bot,
  Globe,
} from "lucide-react";

export const metadata = {
  title: "LLM Engineering Services | Syntalix Consultancy",
  description:
    "Expert LLM integration, fine-tuning, RAG system architecture, prompt engineering, and API development. Syntalix helps you harness the full power of large language models for production applications.",
  openGraph: {
    title: "LLM Engineering Services | Syntalix Consultancy",
    description:
      "End-to-end LLM engineering: fine-tuning, RAG pipelines, prompt engineering, and API development. Build production-grade generative AI applications with Syntalix.",
    url: "https://www.syntalixconsultancy.in/services/llm-engineering",
  },
  alternates: {
    canonical: "https://www.syntalixconsultancy.in/services/llm-engineering",
  },
};

const features = [
  {
    icon: Wand2,
    title: "LLM Fine-Tuning & Adaptation",
    description:
      "We fine-tune foundation models on your proprietary data to achieve domain-specific performance that out-of-the-box models simply cannot match. Our techniques include full fine-tuning, LoRA, QLoRA, and parameter-efficient methods that reduce compute costs while maximizing model quality for your exact use case.",
  },
  {
    icon: Search,
    title: "RAG System Architecture",
    description:
      "Retrieval-Augmented Generation systems that ground LLM responses in your organization's knowledge base. We design and build production-grade RAG pipelines with advanced chunking strategies, hybrid search, re-ranking, and citation tracking — ensuring accurate, up-to-date, and verifiable AI outputs.",
  },
  {
    icon: FileText,
    title: "Prompt Engineering & Optimization",
    description:
      "Systematic prompt engineering that turns unpredictable LLM outputs into reliable, structured responses. We develop comprehensive prompt libraries, implement chain-of-thought reasoning, build evaluation frameworks, and create automated testing suites to ensure consistent quality at scale.",
  },
  {
    icon: Code2,
    title: "API Development & Integration",
    description:
      "Production-ready API layers that expose LLM capabilities to your applications with proper rate limiting, caching, fallback strategies, and cost management. We build robust middleware that handles provider failover, output parsing, and seamless integration with your existing systems.",
  },
  {
    icon: Lock,
    title: "Safety & Guardrails",
    description:
      "Enterprise-grade safety layers including content filtering, output validation, PII detection, hallucination mitigation, and compliance controls. We implement multi-layered guardrail systems that protect your brand and users while maintaining the utility of LLM-powered features.",
  },
  {
    icon: Settings2,
    title: "Evaluation & Benchmarking",
    description:
      "Rigorous LLM evaluation frameworks with custom benchmarks tailored to your domain. We measure accuracy, relevance, coherence, latency, and cost across models and configurations, providing data-driven recommendations for model selection and optimization.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Requirements & Use Case Analysis",
    description:
      "We start by deeply understanding your use cases, data landscape, quality requirements, and constraints. Our team maps out the LLM architecture that best fits your needs — whether it's fine-tuned models, RAG systems, or hybrid approaches. We identify the right foundation models and design the evaluation criteria upfront.",
  },
  {
    step: "02",
    title: "Data Preparation & Knowledge Base Design",
    description:
      "For fine-tuning, we curate and prepare high-quality training datasets with rigorous quality controls. For RAG systems, we design the knowledge base architecture, implement intelligent document processing, and build optimized vector stores with the right embedding models and chunking strategies.",
  },
  {
    step: "03",
    title: "Model Development & Prompt Engineering",
    description:
      "Our engineers develop and iterate on the LLM solution — fine-tuning models, crafting prompt templates, building retrieval pipelines, and implementing output parsers. We run systematic evaluations at every stage, tracking metrics that matter for your specific use case.",
  },
  {
    step: "04",
    title: "Production Deployment & Safety",
    description:
      "We deploy the complete LLM system with production-grade infrastructure, implement guardrails and safety layers, set up monitoring for cost, latency, and quality, and integrate with your application layer through well-documented APIs.",
  },
  {
    step: "05",
    title: "Continuous Improvement & Model Updates",
    description:
      "Post-launch, we monitor real-world performance, collect user feedback, and continuously improve the system. We manage model version updates, knowledge base refreshes, and prompt optimizations to keep your LLM application performing at its best.",
  },
];

const useCases = [
  {
    title: "Enterprise Knowledge Assistant",
    description:
      "We built a RAG-powered knowledge assistant for a Fortune 500 company that processes 10,000+ internal documents, providing employees with instant, accurate answers grounded in company policies, technical documentation, and best practices. The system reduced internal support tickets by 60% and improved new employee onboarding speed by 3x.",
  },
  {
    title: "Legal Document Analysis Platform",
    description:
      "Our team developed a fine-tuned LLM system for a legal tech firm that automates contract review, clause extraction, and risk assessment. The system processes contracts in 90 seconds instead of 4 hours manually, with 94% accuracy on clause identification and zero missed critical risk factors in production.",
  },
  {
    title: "Customer Support Automation",
    description:
      "We designed an LLM-powered customer support system that handles 80% of tier-1 inquiries autonomously with a 92% customer satisfaction rating. The system uses RAG over the product knowledge base, implements graceful escalation to human agents, and learns from resolved tickets to continuously improve.",
  },
];

const techStack = [
  { category: "LLM Providers", items: ["OpenAI GPT-4", "Anthropic Claude", "Google Gemini", "Meta Llama", "Mistral"] },
  { category: "RAG & Retrieval", items: ["LangChain", "LlamaIndex", "Pinecone", "Weaviate", "ChromaDB"] },
  { category: "Fine-Tuning", items: ["Hugging Face", "LoRA/QLoRA", "Axolotl", "Unsloth", "PEFT"] },
  { category: "Infrastructure", items: ["vLLM", "TGI", "Modal", "Replicate", "AWS Bedrock"] },
];

const faqs = [
  {
    question: "Should we fine-tune a model or use RAG?",
    answer:
      "It depends on your use case. RAG is ideal when you need the LLM to access and reference specific, frequently updated information — like company documents, product catalogs, or knowledge bases. Fine-tuning is better when you need the model to adopt a specific style, follow complex domain-specific reasoning patterns, or handle structured output formats consistently. In many cases, a hybrid approach combining both delivers the best results. We help you make this decision based on your data, quality requirements, and budget.",
  },
  {
    question: "How do you handle hallucinations in LLM outputs?",
    answer:
      "We implement multiple layers of hallucination mitigation: RAG with citation tracking grounds responses in source documents; output validation checks factual claims against trusted data; confidence scoring flags uncertain responses for human review; and structured output schemas constrain the model to produce only valid, verifiable information. We also build feedback loops that help the system learn from flagged errors over time.",
  },
  {
    question: "What about data privacy when using LLMs?",
    answer:
      "Data privacy is a core concern in our architecture. We can deploy solutions using private LLM endpoints that don't send data to third-party providers, self-hosted open-source models running entirely within your infrastructure, or enterprise API tiers with data processing agreements. For sensitive domains like healthcare and finance, we implement additional encryption, access controls, and audit logging to meet regulatory requirements.",
  },
  {
    question: "How do you manage LLM costs in production?",
    answer:
      "We implement comprehensive cost optimization strategies including intelligent caching of common queries, semantic deduplication, prompt optimization to reduce token usage, model routing that directs simpler queries to smaller/cheaper models, and batch processing where latency allows. These techniques typically reduce LLM API costs by 40–70% compared to naive implementations while maintaining output quality.",
  },
  {
    question: "Can you integrate LLMs with our existing software systems?",
    answer:
      "Absolutely. We build robust integration layers that connect LLM capabilities with your existing applications, databases, CRMs, ERPs, and workflows. Our API-first approach means the LLM system can be accessed from any platform, and we implement proper error handling, fallback strategies, and monitoring to ensure reliability in production environments.",
  },
];

export default function LLMEngineeringPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative w-full pt-24 pb-16 md:pt-32 md:pb-20 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
          <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-violet-600/15 rounded-full blur-[120px]" />
          <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-purple-600/15 rounded-full blur-[120px]" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 max-w-4xl">
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-violet-100 dark:bg-violet-900/30 border border-violet-300 dark:border-violet-700/50 text-violet-700 dark:text-violet-300 font-medium text-sm mb-6">
                <MessageSquareCode className="w-4 h-4 mr-2" />
                LLM Engineering
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight mb-6 syntalix-heading">
                Production-Grade{" "}
                <span className="syntalix-gradient-text">LLM Engineering</span>{" "}
                Services
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mb-8 syntalix-body">
                Harness the transformative power of large language models with
                production-ready engineering. We build LLM applications that go
                beyond prototypes — delivering reliable, safe, and cost-efficient
                generative AI systems that create real business value at scale.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-gradient-to-r from-violet-600 to-purple-600 text-white font-bold shadow-lg shadow-violet-500/30 hover:shadow-violet-500/50 hover:scale-105 transition-all duration-300"
                >
                  Discuss Your LLM Project
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <a
                  href="#features"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 text-foreground font-bold hover:bg-gray-50 dark:hover:bg-slate-700 transition-all duration-300 shadow-sm"
                >
                  Explore Capabilities
                  <ChevronDown className="ml-2 h-5 w-5" />
                </a>
              </div>
            </div>
            <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[380px] lg:h-[380px] xl:w-[420px] xl:h-[420px] transition-transform duration-500 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-tr from-violet-500/10 to-purple-500/10 rounded-3xl blur-2xl" />
                <Image
                  src="/services/llm-engineering.png"
                  alt="LLM Engineering Glassmorphic Figure"
                  fill
                  className="object-contain drop-shadow-[0_20px_50px_rgba(139,92,246,0.25)] dark:drop-shadow-[0_20px_50px_rgba(168,85,247,0.15)]"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 syntalix-heading">
              End-to-End LLM Engineering Capabilities
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg syntalix-body">
              From fine-tuning foundation models to building production RAG
              pipelines — we cover every aspect of LLM application development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="bg-white dark:bg-slate-900/50 backdrop-blur-xl border border-gray-200 dark:border-slate-800 rounded-2xl p-7 hover:shadow-xl hover:shadow-violet-500/5 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-600 to-purple-600 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground syntalix-body leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 md:py-28 bg-gray-50 dark:bg-slate-900/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 syntalix-heading">
              Our LLM Development Process
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg syntalix-body">
              A systematic approach to building LLM applications that are
              reliable, performant, and ready for production from day one.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-8">
            {processSteps.map((step) => (
              <div key={step.step} className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-600 to-purple-600 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  {step.step}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground syntalix-body leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 syntalix-heading">
              Real-World LLM Applications
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg syntalix-body">
              Explore how our LLM engineering services have transformed
              operations across industries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {useCases.map((useCase) => (
              <div
                key={useCase.title}
                className="bg-white dark:bg-slate-900/50 backdrop-blur-xl border border-gray-200 dark:border-slate-800 rounded-2xl p-7 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-violet-100 dark:bg-violet-900/30 flex items-center justify-center mb-4">
                  <Zap className="w-5 h-5 text-violet-600 dark:text-violet-400" />
                </div>
                <h3 className="text-lg font-bold mb-3">{useCase.title}</h3>
                <p className="text-sm text-muted-foreground syntalix-body leading-relaxed">
                  {useCase.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-20 md:py-28 bg-gray-50 dark:bg-slate-900/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 syntalix-heading">
              Technology Stack
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg syntalix-body">
              We work with the latest LLM tools and frameworks to deliver
              cutting-edge solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {techStack.map((stack) => (
              <div
                key={stack.category}
                className="bg-white dark:bg-slate-900/50 backdrop-blur-xl border border-gray-200 dark:border-slate-800 rounded-2xl p-6"
              >
                <h3 className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">
                  {stack.category}
                </h3>
                <ul className="space-y-2">
                  {stack.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center text-sm text-muted-foreground"
                    >
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

      {/* FAQ Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 syntalix-heading">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg syntalix-body">
              Common questions about our LLM engineering services.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="bg-white dark:bg-slate-900/50 backdrop-blur-xl border border-gray-200 dark:border-slate-800 rounded-2xl p-6"
              >
                <h3 className="text-lg font-bold mb-3">{faq.question}</h3>
                <p className="text-muted-foreground syntalix-body leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cross-Links Section */}
      <section className="py-16 bg-gray-50 dark:bg-slate-900/30">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl font-bold mb-8 text-center syntalix-heading">
            Explore Our Other Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <Link
              href="/services/ai-ml-infrastructure"
              className="group flex items-center gap-4 bg-white dark:bg-slate-900/50 border border-gray-200 dark:border-slate-800 rounded-xl p-5 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0">
                <Brain className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h3 className="font-bold group-hover:text-primary transition-colors">
                  AI & ML Infrastructure
                </h3>
                <p className="text-sm text-muted-foreground">Models & MLOps</p>
              </div>
              <ArrowRight className="w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
            </Link>

            <Link
              href="/services/agentic-systems"
              className="group flex items-center gap-4 bg-white dark:bg-slate-900/50 border border-gray-200 dark:border-slate-800 rounded-xl p-5 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center flex-shrink-0">
                <Bot className="w-5 h-5 text-purple-600 dark:text-purple-400" />
              </div>
              <div>
                <h3 className="font-bold group-hover:text-primary transition-colors">
                  Agentic AI Systems
                </h3>
                <p className="text-sm text-muted-foreground">Autonomous workflows</p>
              </div>
              <ArrowRight className="w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
            </Link>

            <Link
              href="/services/web-mobile-development"
              className="group flex items-center gap-4 bg-white dark:bg-slate-900/50 border border-gray-200 dark:border-slate-800 rounded-xl p-5 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-lg bg-pink-100 dark:bg-pink-900/30 flex items-center justify-center flex-shrink-0">
                <Globe className="w-5 h-5 text-pink-600 dark:text-pink-400" />
              </div>
              <div>
                <h3 className="font-bold group-hover:text-primary transition-colors">
                  Web & Mobile Dev
                </h3>
                <p className="text-sm text-muted-foreground">Apps & SaaS platforms</p>
              </div>
              <ArrowRight className="w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[20%] left-[10%] w-[40%] h-[40%] bg-violet-600/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-[10%] right-[10%] w-[35%] h-[35%] bg-purple-600/10 rounded-full blur-[100px]" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 syntalix-heading">
              Ready to Build with{" "}
              <span className="syntalix-gradient-text">LLMs</span>?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 syntalix-body">
              Whether you need a RAG-powered knowledge assistant, a fine-tuned
              domain model, or a complete generative AI platform — our LLM
              engineers are ready to deliver. Start with a free consultation.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-gradient-to-r from-violet-600 to-purple-600 text-white font-bold shadow-lg shadow-violet-500/30 hover:shadow-violet-500/50 hover:scale-105 transition-all duration-300"
            >
              Start Your Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
