import Link from "next/link";
import Image from "next/image";
import {
  Bot, Network, Workflow, Cpu, Zap, Shield, ArrowRight, CheckCircle2,
  ChevronDown, Brain, MessageSquareCode, Globe, Settings, Target, RefreshCw,
} from "lucide-react";

export const metadata = {
  title: "Agentic AI Systems | Syntalix Consultancy",
  description: "Build autonomous AI agents and multi-agent systems that plan, reason, and act. Syntalix designs and deploys production-grade agentic AI systems for enterprise workflow automation.",
  openGraph: {
    title: "Agentic AI Systems | Syntalix Consultancy",
    description: "Multi-agent orchestration, autonomous decision engines, and tool-use AI systems. Syntalix builds agentic AI that works independently to drive business outcomes.",
    url: "https://www.syntalixconsultancy.in/services/agentic-systems",
  },
  alternates: { canonical: "https://www.syntalixconsultancy.in/services/agentic-systems" },
};

const features = [
  {
    icon: Network,
    title: "Multi-Agent Orchestration",
    description: "We design systems where specialized AI agents collaborate — each with defined roles, tools, and responsibilities — orchestrated by a supervisor agent that plans tasks, delegates work, and synthesizes results. This architecture enables complex, multi-step workflows that would be impossible for a single LLM.",
  },
  {
    icon: Target,
    title: "Goal-Driven Autonomous Workflows",
    description: "Our agentic systems are built around goal decomposition and dynamic planning. Given a high-level objective, the agent breaks it into subtasks, selects appropriate tools, executes actions, evaluates results, and adapts its plan in real time — autonomously driving toward your business outcome.",
  },
  {
    icon: Workflow,
    title: "Business Process Automation",
    description: "We map your existing workflows and identify automation opportunities for agentic AI. From research and data analysis pipelines to document processing, customer onboarding, and reporting — we replace manual, repetitive processes with autonomous agents that execute reliably around the clock.",
  },
  {
    icon: Settings,
    title: "Tool & API Integration",
    description: "Effective agents need real-world capabilities. We integrate your agents with web search, databases, internal APIs, CRMs, code interpreters, file systems, and communication tools — giving them the power to take meaningful actions, retrieve real-time information, and interact with your existing tech stack.",
  },
  {
    icon: RefreshCw,
    title: "Feedback Loops & Self-Correction",
    description: "Our agents include built-in reflection and self-correction mechanisms. When an action fails or produces unexpected results, the agent diagnoses the issue, adjusts its approach, and retries — mimicking the problem-solving behavior of a skilled human professional.",
  },
  {
    icon: Shield,
    title: "Safety, Oversight & Guardrails",
    description: "Autonomous systems require robust safety controls. We implement approval workflows for high-stakes actions, rate limiting, scope constraints, audit logging, and human-in-the-loop escalation protocols that ensure your agentic systems operate within defined boundaries at all times.",
  },
];

const processSteps = [
  { step: "01", title: "Workflow Discovery & Mapping", description: "We work closely with your team to map existing workflows, identify automation candidates, and define success metrics. Our consultants assess task complexity, decision requirements, and data availability to determine the optimal agentic architecture." },
  { step: "02", title: "Agent Architecture Design", description: "We design the agent system — defining agent roles, tool sets, communication protocols, memory systems, and orchestration logic. We produce a detailed blueprint covering the agent graph, failure modes, and safety mechanisms before writing a single line of code." },
  { step: "03", title: "Development & Tool Integration", description: "Our engineers build the agents using proven frameworks, implement all required tool integrations, and develop the orchestration layer. We run comprehensive testing across hundreds of scenarios to validate reliability and edge case handling." },
  { step: "04", title: "Evaluation & Red-Teaming", description: "We stress-test your agent system with adversarial scenarios, edge cases, and failure injection. Our evaluation suite measures task completion rates, error recovery, cost efficiency, and safety compliance before any production deployment." },
  { step: "05", title: "Deployment & Monitoring", description: "We deploy agents with full observability — tracing every decision, action, and tool call. Dashboards provide real-time visibility into agent performance, and automated alerts notify your team of anomalies or escalations requiring human review." },
];

const useCases = [
  { title: "Autonomous Research & Intelligence Agent", description: "We built a market research agent for a strategy consulting firm that autonomously gathers data from 50+ sources, synthesizes competitive intelligence, and produces structured reports in under 30 minutes — a task that previously took analysts 3 days. The agent handles web research, financial data retrieval, and document analysis end-to-end." },
  { title: "Software Development Pipeline Automation", description: "Our agentic system for a SaaS company autonomously handles bug triage, writes code fixes for categorized issue types, runs test suites, and submits pull requests for human review. The system resolves 40% of tier-1 bugs without human intervention, cutting engineering time on routine maintenance by 60%." },
  { title: "Sales Outreach & Lead Qualification Agent", description: "We deployed a multi-agent sales system that researches prospects, personalizes outreach sequences, responds to initial inquiries, handles objections using company-specific knowledge, and schedules meetings — all autonomously. The system generated 3x more qualified meetings at 20% of the cost of the previous manual process." },
];

const techStack = [
  { category: "Agent Frameworks", items: ["LangGraph", "AutoGen", "CrewAI", "OpenAI Assistants", "LangChain"] },
  { category: "LLM Backends", items: ["GPT-4o", "Claude 3.5", "Gemini Pro", "Llama 3", "Mistral"] },
  { category: "Tools & Memory", items: ["Semantic Kernel", "Mem0", "Pinecone", "Redis", "PostgreSQL"] },
  { category: "Infrastructure", items: ["Modal", "AWS Lambda", "Kubernetes", "Temporal", "Docker"] },
];

const faqs = [
  { question: "What is an agentic AI system?", answer: "An agentic AI system is an AI application that can autonomously plan multi-step actions, use tools, make decisions, and adapt to changing information to achieve a goal — without requiring constant human instruction. Unlike simple LLM chatbots that only respond to prompts, agents proactively take actions, call APIs, browse the web, write code, and interact with external systems." },
  { question: "How is agentic AI different from traditional automation (RPA)?", answer: "Traditional RPA follows rigid, pre-programmed rules and breaks when encountering unexpected inputs or process variations. Agentic AI systems can reason about novel situations, understand natural language instructions, handle ambiguity, recover from errors dynamically, and adapt their approach based on outcomes. They automate judgment-intensive work, not just repetitive rule-based tasks." },
  { question: "How do you ensure agents don't make costly mistakes?", answer: "We implement layered safety controls: scope constraints limit what actions agents can take; approval workflows require human sign-off for high-stakes operations; cost limits prevent runaway API usage; comprehensive logging enables full auditability; and automated testing validates behavior across thousands of scenarios. We also implement gradual rollouts — starting with human-in-the-loop modes before progressively increasing autonomy as confidence grows." },
  { question: "What kinds of tasks are well-suited for agentic AI?", answer: "Agentic AI excels at tasks that are repetitive but require some judgment, involve multiple steps across different systems, need to aggregate and synthesize information from various sources, follow structured processes with clear success criteria, and are currently performed manually by skilled professionals. Research, data analysis, document processing, code generation, and customer communication are common high-value use cases." },
  { question: "How long does it take to deploy an agentic system?", answer: "A focused single-agent system for a well-defined use case typically takes 6–10 weeks from kickoff to production. More complex multi-agent systems with extensive tool integrations and custom safety requirements may take 3–6 months. We always recommend starting with a focused pilot to validate the approach before expanding to more complex scenarios." },
];

export default function AgenticSystemsPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <section className="relative w-full pt-16 pb-20 md:pt-24 md:pb-28 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
          <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-purple-600/15 rounded-full blur-[120px]" />
          <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-pink-600/15 rounded-full blur-[120px]" />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 max-w-4xl">
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-purple-100 dark:bg-purple-900/30 border border-purple-300 dark:border-purple-700/50 text-purple-700 dark:text-purple-300 font-medium text-sm mb-6">
                <Bot className="w-4 h-4 mr-2" />
                Agentic AI Systems
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight mb-6 syntalix-heading">
                Autonomous{" "}
                <span className="syntalix-gradient-text">Agentic AI Systems</span>{" "}
                That Work for You
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mb-8 syntalix-body">
                Move beyond chatbots. We build agentic AI systems that plan, reason, use
                tools, and execute multi-step workflows autonomously — transforming complex,
                judgment-intensive processes into reliable automated operations that run 24/7.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 hover:scale-105 transition-all duration-300">
                  Discuss Your Agent Project <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <a href="#features" className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 text-foreground font-bold hover:bg-gray-50 dark:hover:bg-slate-700 transition-all duration-300 shadow-sm">
                  Explore Capabilities <ChevronDown className="ml-2 h-5 w-5" />
                </a>
              </div>
            </div>
            <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[380px] lg:h-[380px] xl:w-[420px] xl:h-[420px] transition-transform duration-500 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 to-pink-500/10 rounded-3xl blur-2xl" />
                <Image
                  src="/services/agentic-systems.png"
                  alt="Agentic AI Systems Glassmorphic Figure"
                  fill
                  className="object-contain drop-shadow-[0_20px_50px_rgba(168,85,247,0.25)] dark:drop-shadow-[0_20px_50px_rgba(236,72,153,0.15)]"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 syntalix-heading">Full Spectrum Agentic AI Capabilities</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg syntalix-body">From single-purpose agents to complex multi-agent systems — every solution built for reliability and measurable business impact.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div key={feature.title} className="bg-white dark:bg-slate-900/50 backdrop-blur-xl border border-gray-200 dark:border-slate-800 rounded-2xl p-7 hover:shadow-xl hover:shadow-purple-500/5 transition-all duration-300 group">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4 syntalix-heading">Our Agentic Development Process</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg syntalix-body">A rigorous, safety-first approach to deploying autonomous systems in production environments.</p>
          </div>
          <div className="max-w-3xl mx-auto space-y-8">
            {processSteps.map((step) => (
              <div key={step.step} className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center text-white font-bold text-lg shadow-lg">
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4 syntalix-heading">Real-World Agentic AI Impact</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg syntalix-body">See how autonomous agent systems have transformed operations across industries.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {useCases.map((useCase) => (
              <div key={useCase.title} className="bg-white dark:bg-slate-900/50 backdrop-blur-xl border border-gray-200 dark:border-slate-800 rounded-2xl p-7 hover:shadow-lg transition-all duration-300">
                <div className="w-10 h-10 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mb-4">
                  <Zap className="w-5 h-5 text-purple-600 dark:text-purple-400" />
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
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg syntalix-body">We use the most capable and battle-tested agent frameworks available.</p>
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
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg syntalix-body">Common questions about building and deploying agentic AI systems.</p>
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
              { href: "/services/web-mobile-development", icon: Globe, color: "pink", label: "Web & Mobile Dev", sub: "Apps & SaaS platforms" },
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
          <div className="absolute top-[20%] left-[10%] w-[40%] h-[40%] bg-purple-600/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-[10%] right-[10%] w-[35%] h-[35%] bg-pink-600/10 rounded-full blur-[100px]" />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 syntalix-heading">
              Ready to Deploy <span className="syntalix-gradient-text">Autonomous Agents</span>?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 syntalix-body">
              Whether you want to automate a specific workflow or build a comprehensive multi-agent system, our team of agent engineers will design a solution that's safe, reliable, and built to scale.
            </p>
            <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 hover:scale-105 transition-all duration-300">
              Start Your Free Consultation <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
