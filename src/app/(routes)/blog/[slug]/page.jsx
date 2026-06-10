import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts } from "@/data/blog-posts";
import { Calendar, Clock, ArrowLeft, Tag, ArrowRight } from "lucide-react";

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    keywords: post.tags,
    alternates: { canonical: `https://www.syntalixconsultancy.in/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `https://www.syntalixconsultancy.in/blog/${post.slug}`,
      type: "article",
      publishedTime: post.date,
      authors: ["Syntalix Consultancy Services"],
      tags: post.tags,
    },
  };
}

// ─── Article Content ────────────────────────────────────────────────────────

function LLMEngineeringArticle() {
  return (
    <div className="prose prose-lg dark:prose-invert max-w-none
      prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-foreground
      prose-p:text-muted-foreground prose-p:leading-relaxed
      prose-a:text-primary prose-a:no-underline hover:prose-a:underline
      prose-strong:text-foreground prose-li:text-muted-foreground">
      <p>
        Every major technology wave produces a new engineering discipline. The internet era created web engineering. The mobile era created mobile engineering. The artificial intelligence era is now producing its own: <strong>LLM engineering</strong>. If your business relies on knowledge work, customer communication, or document processing, understanding this discipline is no longer optional.
      </p>

      <h2>What is LLM Engineering?</h2>
      <p>
        Large Language Model (LLM) engineering is the practice of designing, building, and operating production applications that use large language models as their core intelligence layer. It is distinct from AI research (which creates models) and from simple API integration (which calls a model). LLM engineering sits at the intersection of software engineering, data engineering, and applied machine learning.
      </p>
      <p>
        An LLM engineer does not just call GPT-4 and display the result. They design the architecture for how an LLM interacts with your data, your users, your tools, and your existing systems. They build guardrails that ensure outputs are accurate and safe. They optimize for cost and latency. They instrument the system to monitor real-world performance and improve it over time.
      </p>

      <h2>The Core Components of LLM Engineering</h2>
      <h3>1. Retrieval-Augmented Generation (RAG)</h3>
      <p>
        Out-of-the-box LLMs only know what they were trained on. For most business applications, you need the model to reason over <em>your</em> data — product documentation, company policies, customer records, research reports. RAG solves this by retrieving relevant information from your knowledge base at query time and providing it to the model as context.
      </p>
      <p>
        A production-grade RAG system involves far more than a basic vector database. It requires intelligent chunking strategies, hybrid search (combining semantic and keyword search), re-ranking models, citation tracking, and careful context window management. Getting RAG right is what separates an accurate, trustworthy AI assistant from a hallucinating chatbot.
      </p>

      <h3>2. Fine-Tuning and Model Adaptation</h3>
      <p>
        Sometimes a general-purpose model needs to be adapted for a specific domain, style, or task. Fine-tuning trains the model on your proprietary data so it internalises your terminology, formats, and reasoning patterns. Techniques like LoRA (Low-Rank Adaptation) and QLoRA make it possible to fine-tune powerful models cost-effectively on consumer hardware.
      </p>
      <p>
        Fine-tuning is most valuable when you need the model to consistently follow complex output formats, adopt a specific writing style, or handle domain-specific reasoning that general models struggle with. For <Link href="/services/llm-engineering">LLM engineering services</Link>, this is a core capability.
      </p>

      <h3>3. Prompt Engineering and Evaluation</h3>
      <p>
        Effective prompting is an engineering discipline, not a creative exercise. LLM engineers develop systematic prompt templates, implement chain-of-thought reasoning, and build automated evaluation suites that measure output quality across hundreds of test cases. A small change in a system prompt can dramatically improve or degrade model performance — and only rigorous testing reveals which.
      </p>

      <h3>4. Safety, Guardrails, and Compliance</h3>
      <p>
        Enterprise LLM applications require robust safety layers. This includes content moderation, PII detection and redaction, hallucination mitigation through output validation, adversarial input handling, and audit logging for compliance. LLM engineers design multi-layered guardrail systems that protect your brand and users while maintaining the utility of the AI feature.
      </p>

      <h3>5. Cost and Latency Optimization</h3>
      <p>
        LLM API costs can scale rapidly with usage. Professional LLM engineers implement intelligent caching of common queries, semantic deduplication, prompt optimization to reduce token consumption, and model routing that directs simpler queries to smaller, cheaper models. These techniques typically reduce API costs by 40–70% in production without sacrificing quality.
      </p>

      <h2>Why Your Business Needs LLM Engineering</h2>
      <h3>The Gap Between Demo and Production</h3>
      <p>
        It takes about 30 minutes to build an impressive LLM demo. It takes months of engineering work to build a production LLM application that is reliable, accurate, cost-efficient, and safe at scale. Most businesses have discovered this gap the hard way — launching AI features that performed beautifully in testing and failed in production due to inconsistent outputs, hallucinations, or unexpected edge cases.
      </p>
      <p>
        LLM engineering bridges this gap. It applies the same rigour to AI applications that software engineering applies to traditional software — systematic testing, observability, continuous improvement, and operational excellence.
      </p>

      <h3>Competitive Advantage Through Proprietary Knowledge</h3>
      <p>
        Every business possesses unique knowledge: years of customer interactions, proprietary research, institutional expertise, and operational data. LLM engineering makes this knowledge accessible and actionable through AI interfaces. A customer support assistant that knows every nuance of your product. A sales tool that has internalised your best deals and objection handling. An analyst that can reason over five years of your operational data.
      </p>
      <p>
        These are capabilities that provide genuine competitive advantage — not just because they use AI, but because they use <em>your</em> knowledge through AI in ways competitors cannot replicate.
      </p>

      <h3>Measurable ROI Across Business Functions</h3>
      <p>
        LLM engineering delivers measurable returns across knowledge-intensive business functions. Customer support teams handle 3–5x more inquiries with the same headcount. Legal teams review documents in minutes instead of hours. Sales teams produce personalised outreach at scale. Analysts generate first drafts of reports automatically. These are not marginal improvements — they are transformative changes in operational capacity.
      </p>

      <h2>Is Your Business Ready for LLM Engineering?</h2>
      <p>
        The bar for LLM adoption is lower than many businesses assume. You do not need a data science team or a machine learning department. You need a clear use case, relevant data, and an engineering partner with the right expertise.
      </p>
      <p>
        The best starting point is identifying a high-volume, knowledge-intensive process where inconsistency or latency creates friction — customer support, document review, research synthesis, report generation. A well-scoped pilot project can validate the approach and demonstrate ROI within 6–10 weeks.
      </p>
      <p>
        If you are evaluating LLM engineering for your business, our team at <Link href="/contact">Syntalix Consultancy</Link> offers a free technical consultation to assess feasibility and design a pragmatic implementation roadmap. We also provide full-spectrum <Link href="/services/llm-engineering">LLM engineering services</Link> from RAG architecture to production deployment and monitoring.
      </p>
    </div>
  );
}

function AgenticAIArticle() {
  return (
    <div className="prose prose-lg dark:prose-invert max-w-none
      prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-foreground
      prose-p:text-muted-foreground prose-p:leading-relaxed
      prose-a:text-primary prose-a:no-underline hover:prose-a:underline
      prose-strong:text-foreground prose-li:text-muted-foreground">
      <p>
        For the past two years, the dominant paradigm for business AI has been the chatbot: a conversational interface backed by a large language model that answers questions and generates text. Useful, certainly. But fundamentally limited. The chatbot waits to be asked. It produces text. It takes no action. It has no memory of what it did last week. It cannot browse the internet, query your database, or send an email on your behalf.
      </p>
      <p>
        Agentic AI systems are different in kind. They <em>act</em>. They pursue goals. They plan, decide, use tools, and adapt. And they are beginning to transform how businesses operate in ways that make chatbots look like a transitional technology.
      </p>

      <h2>What Makes an AI System "Agentic"?</h2>
      <p>
        The term <strong>agentic AI</strong> describes systems where an AI model operates with a degree of autonomy — taking sequences of actions toward a defined goal without requiring human instruction at every step. Three capabilities distinguish agentic systems from conventional LLM applications:
      </p>
      <ul>
        <li><strong>Goal decomposition:</strong> The agent can break a high-level objective into sub-tasks and plan how to accomplish them.</li>
        <li><strong>Tool use:</strong> The agent can call external APIs, search the web, query databases, write and execute code, manage files, and interact with services.</li>
        <li><strong>Feedback and adaptation:</strong> The agent observes the results of its actions, evaluates whether they advance the goal, and adjusts its approach accordingly.</li>
      </ul>
      <p>
        These capabilities, combined, enable agents to handle complex, multi-step workflows that require judgment — the kinds of work that have historically required skilled human professionals.
      </p>

      <h2>Agentic AI vs. Robotic Process Automation</h2>
      <p>
        The natural question from business leaders is: how is this different from RPA (Robotic Process Automation) that we already have? The difference is fundamental. RPA automates tasks by following rigid, pre-programmed rules. It breaks when it encounters anything unexpected — a changed UI, an unusual input, an exception to the rule. RPA automates repeatable, rule-based tasks.
      </p>
      <p>
        Agentic AI automates <em>judgment-intensive</em> tasks. It can reason about novel situations, understand natural language, handle ambiguity, recover from errors dynamically, and decide which of several possible approaches is most appropriate given the context. This is not a marginal improvement over RPA — it is a different category of automation entirely.
      </p>

      <h2>Multi-Agent Systems: Specialization at Scale</h2>
      <p>
        The most powerful agentic architectures use multiple specialized agents working together. Just as a consulting project might involve a research analyst, a financial modeller, and a presentation specialist, a multi-agent system might coordinate a researcher agent, an analyst agent, a writer agent, and a quality checker — each with specific tools and capabilities, orchestrated by a supervisor agent.
      </p>
      <p>
        This architecture enables parallel processing of complex tasks and allows each agent to be specialized for its function. The result is systems that can tackle problems of a complexity and scale that would be impractical for a single agent or for any traditional software system.
      </p>
      <p>
        Our <Link href="/services/agentic-systems">agentic AI systems services</Link> specialize in designing and building these multi-agent architectures for enterprise workflows.
      </p>

      <h2>Real Business Applications That Are Working Today</h2>
      <h3>Research and Intelligence Synthesis</h3>
      <p>
        Research agents can autonomously gather data from dozens of sources, synthesize competitive intelligence, and produce structured reports in 30 minutes — work that previously took analysts days. These agents browse the web, query financial databases, read documents, and aggregate findings with source citations. Strategic consulting firms are already deploying these systems to 5–10x analyst output.
      </p>

      <h3>Software Development Assistance</h3>
      <p>
        Code agents can autonomously triage bug reports, implement fixes for categorized issue types, run test suites, and submit pull requests for human review. Early deployments are resolving 30–50% of tier-1 bugs without direct human intervention, significantly reducing engineering maintenance burden and freeing developers for higher-complexity work.
      </p>

      <h3>Sales and Business Development</h3>
      <p>
        Sales agents can research prospects, draft personalized outreach sequences, respond to initial inquiries using company knowledge, qualify leads based on defined criteria, and schedule meetings — all autonomously. This is not a chatbot on your website; this is a system that proactively reaches out, follows up, handles objections, and moves prospects through a pipeline.
      </p>

      <h3>Financial Analysis and Reporting</h3>
      <p>
        Financial agents can pull data from multiple systems, perform calculations, identify anomalies, and generate report drafts automatically. A process that required 2–3 days of analyst time per month can run continuously, with analysts reviewing and approving outputs rather than generating them from scratch.
      </p>

      <h2>The Safety Question</h2>
      <p>
        Autonomous systems taking actions in the real world raise legitimate safety concerns. What happens when an agent makes a mistake? How do you prevent runaway costs? What if an agent takes an action you did not intend?
      </p>
      <p>
        Professional agentic AI engineering addresses these concerns systematically. The key principles are: start with human-in-the-loop approval for high-stakes actions; implement scope constraints that limit what the agent can access and do; build comprehensive audit logging so every action is traceable; and run extensive adversarial testing before production deployment.
      </p>
      <p>
        Well-designed agentic systems have more safety controls than most human workflows. Every action is logged. Every decision is traceable. Anomalies trigger automated alerts. The agent never forgets a rule or has a bad day.
      </p>

      <h2>What to Expect in 2026 and Beyond</h2>
      <p>
        Agentic AI is at an early but accelerating inflection point. The frameworks for building agent systems have matured dramatically in the past 18 months. LLMs powerful enough to serve as reliable agent backbones are widely available. The tooling for deployment, monitoring, and safety has reached production readiness.
      </p>
      <p>
        In the next 12–24 months, we expect agentic systems to become a standard component of enterprise operations in knowledge-intensive industries — professional services, financial services, healthcare, and technology. Organizations that build early experience with these systems will have a significant capability advantage.
      </p>
      <p>
        If you want to understand how agentic AI could apply to your specific business processes, <Link href="/contact">contact our team</Link> for a free assessment. We also recommend reading about our <Link href="/services/agentic-systems">agentic AI system capabilities</Link> and how we approach multi-agent orchestration for enterprise clients.
      </p>
    </div>
  );
}

function AIDevelopmentCostArticle() {
  return (
    <div className="prose prose-lg dark:prose-invert max-w-none
      prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-foreground
      prose-p:text-muted-foreground prose-p:leading-relaxed
      prose-a:text-primary prose-a:no-underline hover:prose-a:underline
      prose-strong:text-foreground prose-li:text-muted-foreground">
      <p>
        India has emerged as one of the world's leading destinations for AI and ML development. With a large pool of engineering talent, competitive rates, and a growing ecosystem of specialized AI companies, businesses from the US, UK, UAE, and Australia are increasingly engaging Indian teams for everything from proof-of-concept ML experiments to production-grade AI infrastructure.
      </p>
      <p>
        But "AI development" covers an enormous range of work, and costs vary enormously depending on what you're building. This guide provides a structured breakdown of AI development costs in India for 2026, covering the key project types, team structures, and factors that drive cost.
      </p>

      <h2>Understanding AI Development Cost Drivers</h2>
      <p>Before looking at numbers, it is important to understand what drives cost variation:</p>
      <ul>
        <li><strong>Project complexity:</strong> A sentiment analysis classifier is fundamentally different in complexity from a multi-agent autonomous system.</li>
        <li><strong>Data readiness:</strong> Projects with clean, labelled, and accessible data move faster than those requiring significant data engineering work first.</li>
        <li><strong>Infrastructure requirements:</strong> Cloud GPU compute for model training adds variable cost on top of engineering time.</li>
        <li><strong>Integration scope:</strong> Standalone prototypes cost less than systems deeply integrated into existing enterprise tech stacks.</li>
        <li><strong>Ongoing vs. one-time:</strong> Many AI systems require continuous retraining, monitoring, and optimization — an ongoing cost after initial delivery.</li>
      </ul>

      <h2>AI/ML Project Cost Ranges in India (2026)</h2>

      <h3>1. AI Proof of Concept or Prototype</h3>
      <p>
        A focused proof of concept — validating that a specific ML approach works for your problem before committing to full development — typically costs <strong>₹3–8 lakhs ($3,600–$9,600 USD)</strong> in India and takes 4–8 weeks. This covers data analysis, model experimentation, and a working prototype with basic documentation.
      </p>

      <h3>2. Custom ML Model Development</h3>
      <p>
        Building a production-ready custom ML model — including data pipeline setup, model training, evaluation, and deployment — typically ranges from <strong>₹10–40 lakhs ($12,000–$48,000 USD)</strong> depending on model complexity and data volume. A straightforward classification model sits at the lower end; complex deep learning models for vision, speech, or time-series forecasting sit at the higher end.
      </p>

      <h3>3. LLM Application Development</h3>
      <p>
        LLM applications — chatbots, document analysis tools, knowledge assistants, and content generation systems — typically cost <strong>₹8–35 lakhs ($9,600–$42,000 USD)</strong> for initial development. A simple RAG chatbot with a knowledge base sits at the lower end. A production-grade LLM system with fine-tuning, advanced RAG, safety layers, monitoring, and API integration sits at the upper range.
      </p>
      <p>
        Our <Link href="/services/llm-engineering">LLM engineering services</Link> include all components of this stack, from initial architecture to production deployment.
      </p>

      <h3>4. Agentic AI System</h3>
      <p>
        Multi-agent systems and autonomous workflow automation typically range from <strong>₹20–80 lakhs ($24,000–$96,000 USD)</strong>. Simple single-agent systems for defined use cases sit at the lower end. Complex multi-agent architectures with extensive tool integrations, custom safety systems, and enterprise-grade monitoring sit at the higher end.
      </p>
      <p>
        These systems often have the highest ROI among AI investments because they replace significant volumes of skilled knowledge work. Payback periods of 6–18 months are common for well-scoped deployments.
      </p>

      <h3>5. AI-Integrated Web or Mobile Application</h3>
      <p>
        Full-stack web or mobile applications with embedded AI features (recommendations, predictions, NLP interfaces, computer vision) typically cost <strong>₹15–60 lakhs ($18,000–$72,000 USD)</strong> for design and development. This includes the application layer, AI integration, and basic MLOps for maintaining the AI components.
      </p>

      <h2>Team Structure and Day Rates</h2>
      <p>Indian AI/ML engineering teams in 2026 typically bill at the following day rates for experienced senior talent:</p>
      <ul>
        <li><strong>ML/AI Engineer (Senior):</strong> ₹12,000–₹22,000/day ($145–$265 USD)</li>
        <li><strong>LLM/Generative AI Specialist:</strong> ₹15,000–₹25,000/day ($180–$300 USD)</li>
        <li><strong>Data Engineer (Senior):</strong> ₹10,000–₹18,000/day ($120–$215 USD)</li>
        <li><strong>Full-Stack Engineer (AI-integrated):</strong> ₹10,000–₹18,000/day ($120–$215 USD)</li>
        <li><strong>MLOps Engineer:</strong> ₹12,000–₹20,000/day ($145–$240 USD)</li>
      </ul>
      <p>
        These rates represent experienced senior talent at specialized AI companies. Freelance platforms may offer lower rates, but typically with higher coordination overhead and quality variability.
      </p>

      <h2>Infrastructure Costs: What's Not in the Engineering Bill</h2>
      <p>Cloud compute costs for AI development are variable and separate from engineering fees. Key considerations:</p>
      <ul>
        <li><strong>GPU training costs:</strong> Training a large custom model can cost $500–$10,000+ in GPU compute depending on model size and training duration. Smaller models and fine-tuning are significantly cheaper.</li>
        <li><strong>LLM API costs:</strong> GPT-4o, Claude 3.5, and Gemini Pro are billed per token. A production system processing 1M tokens/month might cost $500–$3,000/month depending on model choice and optimization.</li>
        <li><strong>Inference infrastructure:</strong> Hosting your own models on cloud GPUs adds $200–$3,000+/month depending on usage patterns.</li>
        <li><strong>Vector database:</strong> Managed vector databases like Pinecone cost $70–$700+/month for production deployments.</li>
      </ul>

      <h2>Total Cost of Ownership: The Ongoing Cost</h2>
      <p>
        Many businesses budget for initial AI development but underestimate ongoing costs. Production AI systems require:
      </p>
      <ul>
        <li><strong>Model retraining:</strong> Models drift as data patterns change. Regular retraining is necessary.</li>
        <li><strong>Monitoring and observability:</strong> Tracking model performance, data quality, and system health.</li>
        <li><strong>Knowledge base updates:</strong> For RAG systems, keeping the knowledge base current as your business evolves.</li>
        <li><strong>Security updates:</strong> Patching dependencies and addressing emerging LLM security concerns.</li>
      </ul>
      <p>
        Budget 15–25% of initial development cost annually for ongoing maintenance and optimization of production AI systems.
      </p>

      <h2>How to Evaluate and Engage an AI Partner in India</h2>
      <p>When evaluating Indian AI development companies, focus on:</p>
      <ul>
        <li>Demonstrated experience with production AI systems (not just demos)</li>
        <li>Structured evaluation and monitoring practices</li>
        <li>Clear communication and project management processes</li>
        <li>References from clients with similar project types</li>
        <li>Transparency about the engineering team (not outsourcing to unknown parties)</li>
      </ul>
      <p>
        At <Link href="/contact">Syntalix Consultancy</Link>, we provide detailed technical scoping documents before any engagement begins, so you understand exactly what you are getting and why it costs what it does. We offer services across the full AI stack — from <Link href="/services/ai-ml-infrastructure">AI/ML infrastructure</Link> to <Link href="/services/llm-engineering">LLM engineering</Link> and <Link href="/services/agentic-systems">agentic systems</Link>.
      </p>
      <p>
        Get in touch for a free consultation and a detailed cost estimate for your specific project.
      </p>
    </div>
  );
}

const articleContentMap = {
  "what-is-llm-engineering": LLMEngineeringArticle,
  "rise-of-agentic-ai": AgenticAIArticle,
  "ai-development-cost-india-2026": AIDevelopmentCostArticle,
};

const categoryColors = {
  "AI & ML": "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300",
  "Agentic AI": "bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300",
  "Industry Insights": "bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300",
};

export default function BlogPostPage({ params }) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) notFound();

  const ArticleContent = articleContentMap[post.slug];
  const relatedPosts = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <section className="relative pt-12 pb-12 md:pt-20 md:pb-16 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-[50%] h-[50%] bg-primary/5 rounded-full blur-[120px]" />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8 group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Blog
          </Link>
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-5">
              <span className={`text-xs font-semibold px-3 py-1 rounded-full ${categoryColors[post.category] || "bg-gray-100 text-gray-700"}`}>
                {post.category}
              </span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight mb-6 syntalix-heading">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-5 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {new Date(post.date).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </span>
              <span className="font-medium text-foreground">{post.author}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Article */}
      <section className="pb-16 md:pb-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            {ArticleContent && <ArticleContent />}

            {/* Tags */}
            <div className="mt-12 pt-8 border-t border-border">
              <div className="flex items-center gap-2 flex-wrap">
                <Tag className="w-4 h-4 text-muted-foreground" />
                {post.tags.map((tag) => (
                  <span key={tag} className="text-xs px-3 py-1 rounded-full bg-muted text-muted-foreground">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 border-t border-border bg-gray-50 dark:bg-slate-900/30">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-2xl font-bold mb-8 syntalix-heading">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedPosts.map((related) => (
                <Link key={related.slug} href={`/blog/${related.slug}`} className="group block bg-white dark:bg-slate-900/50 border border-gray-200 dark:border-slate-800 rounded-2xl p-6 hover:shadow-lg hover:border-primary/20 transition-all duration-300">
                  <p className="text-xs font-medium text-primary mb-2">{related.category}</p>
                  <h3 className="font-bold text-foreground group-hover:text-primary transition-colors leading-snug mb-2">{related.title}</h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">{related.description}</p>
                  <span className="inline-flex items-center gap-1 text-sm text-primary mt-4 font-medium">
                    Read article <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-2xl mx-auto text-center bg-white dark:bg-slate-900/50 border border-gray-200 dark:border-slate-800 rounded-3xl p-10">
            <h2 className="text-2xl font-bold mb-3 syntalix-heading">Want to explore this for your business?</h2>
            <p className="text-muted-foreground mb-6 syntalix-body">Talk to our team about your specific use case and get a free technical consultation.</p>
            <Link href="/contact" className="inline-flex items-center justify-center px-8 py-3 rounded-full gradient-primary text-white font-semibold shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:scale-105 transition-all duration-300">
              Get a Free Consultation <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
