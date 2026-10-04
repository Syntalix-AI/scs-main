export type Service = {
  slug: string;
  name: string;
  /** <title> base, template adds " | Syntalix" (keep under 50 chars) */
  title: string;
  /** meta description, 120 to 155 chars */
  description: string;
  h1: string;
  lead: string;
  /** "What is X?" heading and a 40-55 word answer, shown under the hero */
  question: string;
  definition: string;
  card: string;
  image: string;
  capabilities: [string, string][];
  steps: [string, string][];
  tools: string[];
  faqs: [string, string][];
  proof: string[];
  /** optional natural-language note on where we work */
  area?: string;
  related: string[];
};

export const SERVICES: Service[] = [
  {
    slug: 'web-mobile-development',
    question: 'What is web and mobile app development?',
    definition: 'Web and mobile app development is designing, building and launching the websites, web platforms and phone apps a business runs on. At Syntalix it covers the interface, the backend and APIs, hosting and performance, with search visibility and security built in from the first release.',
    name: 'Web and mobile apps',
    title: 'Web and Mobile App Development in India',
    description: 'Websites, booking platforms, SaaS and mobile apps built by Syntalix in India: fast, secure, SEO-ready, designed around your users and built to scale.',
    h1: 'Web and mobile app development',
    lead: 'Websites, booking platforms, SaaS products and mobile apps, designed around your users and engineered for speed, search and scale.',
    card: 'Websites, booking platforms and native apps, designed for speed and search from day one.',
    image: 'svc-web',
    capabilities: [
      ['Web applications', 'Server-rendered React, Next.js and Astro applications with fast loads, accessibility and SEO built in.'],
      ['SaaS platforms', 'Multi-tenant products with subscription billing, role-based access and usage analytics.'],
      ['Mobile apps', 'Cross-platform React Native apps for iOS and Android, or native Swift and Kotlin when performance demands it.'],
      ['APIs and backends', 'Node.js and Python (FastAPI, Django) services with clean REST or GraphQL APIs and well-modelled databases.'],
      ['Performance and Core Web Vitals', 'Audits and fixes for load time, bundle size, caching and database queries on existing products.'],
      ['Security', 'OWASP-aligned code, secrets management and data handling that respects privacy rules.'],
    ],
    steps: [
      ['Discovery', 'Users, business rules, integrations and growth plans, captured in an architecture and a prioritised backlog.'],
      ['Design', 'Wireframes and high-fidelity designs you approve before any build starts.'],
      ['Build in sprints', 'Two-week sprints with demos on a preview link and a shared task board.'],
      ['Test and launch', 'Automated tests, cross-device checks and a zero-downtime release with documentation handed over.'],
    ],
    tools: ['Astro', 'Next.js', 'React', 'TypeScript', 'React Native', 'Node.js', 'FastAPI', 'PostgreSQL', 'Supabase', 'Vercel', 'AWS'],
    faqs: [
      ['How long does a website or web app take?', 'It depends on scope: a marketing site is far quicker than a booking platform or SaaS product. After a free scoping call you get a written plan with a timeline and a fixed quote, so you know when it ships and what it costs before any work starts.'],
      ['Do you build mobile apps as well?', 'Yes. We build cross-platform apps with React Native, so one codebase ships to both iOS and Android. When an app needs maximum performance or deep device features, we build natively in Swift and Kotlin instead. Web and mobile can share the same backend and APIs.'],
      ['Will the site be good for SEO?', 'Yes. SEO is built in from the start rather than added later. Pages are server-rendered, load fast and pass Core Web Vitals, with clean URLs, structured data, canonical tags and an XML sitemap. That gives Google and AI answer engines a site they can crawl and understand.'],
      ['Who owns the code?', 'You do. When the project ends we hand over the full source code, designs, hosting and third-party accounts, and documentation for running it. There is no lock-in, so your own team or another agency can take over at any time.'],
    ],
    proof: ['rapidlink-logistics', 'legal-india', 'rays-and-rzilss'],
    related: ['llm-engineering', 'aeo-optimization', 'ai-ml-infrastructure'],
  },
  {
    slug: 'llm-engineering',
    question: 'What is LLM engineering?',
    definition: 'LLM engineering is the work of turning a large language model into a dependable product feature. It covers choosing the model, connecting it to your data through RAG or fine-tuning, testing prompts, adding guardrails, and serving it through APIs that stay fast, accurate and affordable under real traffic.',
    name: 'LLM engineering',
    title: 'LLM Engineering Services in India',
    description: 'LLM engineering by Syntalix: RAG architecture, fine-tuning, prompt evaluation, guardrails and production APIs that answer from your own data, built in India.',
    h1: 'LLM engineering services',
    lead: 'Production LLM systems that answer from your data, stay within guardrails and hold up under real traffic: fine-tuning, RAG, evaluation and the APIs around them.',
    card: 'Retrieval-augmented assistants, fine-tuned models and guardrails that hold up in production.',
    image: 'svc-llm',
    capabilities: [
      ['Fine-tuning and adaptation', 'Train foundation models on your data with full fine-tuning, LoRA or QLoRA when a general model cannot match your domain.'],
      ['RAG architecture', 'Ground answers in your documents: chunking, hybrid search, re-ranking and citations your team can check.'],
      ['Prompt engineering and evaluation', 'Prompt libraries, structured outputs and evaluation sets that turn unpredictable outputs into reliable ones.'],
      ['APIs and integration', 'Production APIs with caching, rate limits, provider failover and cost controls, wired into your existing systems.'],
      ['Safety and guardrails', 'Content filtering, output validation, PII detection and hallucination checks that protect your users and brand.'],
      ['Benchmarking', 'Custom benchmarks for accuracy, latency and cost, so model choices are made on data rather than hype.'],
    ],
    steps: [
      ['Use case and data', 'We map the use case, the data and the quality bar, and choose RAG, fine-tuning or both.'],
      ['Knowledge and data prep', 'Clean training sets or a knowledge base with a chunking and retrieval design.'],
      ['Build and evaluate', 'Prompts, pipelines and parsers, measured against an evaluation set at every step.'],
      ['Deploy with guardrails', 'Production infrastructure, safety layers and monitoring for cost, latency and quality.'],
    ],
    tools: ['OpenAI', 'Anthropic Claude', 'Google Gemini', 'Llama', 'LangChain', 'LlamaIndex', 'pgvector', 'Pinecone', 'FastAPI', 'Python'],
    faqs: [
      ['Should we fine-tune a model or use RAG?', 'Use RAG when answers must come from documents that change, such as policies, product data or case files. Fine-tune when the model must follow a style, format or domain reasoning consistently. Many production systems combine both, and we test which approach performs better on your own data.'],
      ['How do you reduce hallucinations?', 'We ground answers in retrieved sources with citations, validate outputs against trusted data, set confidence thresholds that send uncertain answers to a person, and run evaluation sets before every release. Together these catch wrong answers in testing rather than in front of your users.'],
      ['Can our data stay private?', 'Yes. We can use private model endpoints that do not train on your data, keep documents and vector stores inside your own cloud account, and redact personal information before any text reaches a model. Access controls and logging record who can query what.'],
      ['How do you keep LLM costs under control?', 'We cache repeated answers, trim prompts, route simple queries to smaller and cheaper models, and call the largest models only when a task needs them. Cost per request is monitored from day one, so spending stays predictable as usage grows.'],
    ],
    proof: ['city-farmers', 'legal-discovery-ai', 'custom-fine-tuned-gpt'],
    related: ['agentic-systems', 'ai-ml-infrastructure', 'aeo-optimization'],
  },
  {
    slug: 'agentic-systems',
    question: 'What is an agentic AI system?',
    definition: 'An agentic AI system is software that uses a language model to pursue a goal rather than just answer a question. It plans the steps, calls tools and APIs, checks its own results and hands off to a person when a decision is uncertain or high-stakes.',
    name: 'Agentic AI systems',
    title: 'Agentic AI Systems Development',
    description: 'Agentic AI systems by Syntalix: multi-agent workflows that plan, use your tools and APIs and escalate to people, with guardrails and tracing built in.',
    h1: 'Agentic AI systems',
    lead: 'Agents that plan, act across your tools and hand off to people when it matters, with the guardrails and tracing that production needs.',
    card: 'Agents that plan and act across your tools, with human review where it matters.',
    image: 'svc-agents',
    capabilities: [
      ['Multi-agent orchestration', 'Specialised agents with defined roles and tools, coordinated by a supervisor that plans and delegates.'],
      ['Goal-driven workflows', 'Agents break a goal into steps, choose tools, check results and adapt the plan.'],
      ['Tool and API integration', 'Search, databases, internal APIs, CRMs and messaging, so agents can take real actions.'],
      ['Self-correction', 'Reflection and retry loops that diagnose failed steps instead of stopping.'],
      ['Safety and oversight', 'Approval steps for high-stakes actions, scope limits, audit logs and human escalation.'],
      ['Tracing and monitoring', 'Every decision and tool call traced, with dashboards and alerts for anomalies.'],
    ],
    steps: [
      ['Workflow mapping', 'We map the workflow, the decisions and the data, and agree what success means.'],
      ['Agent design', 'Roles, tools, memory and orchestration, with failure modes and safety designed up front.'],
      ['Build and red-team', 'Build, then test against edge cases and adversarial scenarios before launch.'],
      ['Deploy and observe', 'Launch with full tracing, alerts and a human in the loop where it counts.'],
    ],
    tools: ['LangGraph', 'OpenAI Agents', 'Anthropic Claude', 'CrewAI', 'Temporal', 'PostgreSQL', 'Redis', 'Docker'],
    faqs: [
      ['What is the difference between a chatbot and an agent?', 'A chatbot answers questions in a conversation. An agent pursues a goal: it plans the steps, calls your tools and APIs, checks the results and hands off to a person when something is uncertain or high-stakes. In short, agents do the work while chatbots talk about it.'],
      ['Can agents act without a person approving?', 'Only where you allow it. Low-risk steps, such as looking up records, can run on their own, while high-stakes actions like payments, customer emails or data changes wait for a person to approve them. Every action the agent takes is kept in a full audit trail.'],
      ['Which frameworks do you use?', 'We choose per project. Common choices are LangGraph and the agent SDKs from model providers, with durable workflow engines for long-running tasks that must survive restarts. The framework matters less than tracing, evaluation and guardrails, which we set up on every build.'],
    ],
    proof: ['legal-discovery-ai', 'ai-report-platform', 'multi-format-converter'],
    related: ['llm-engineering', 'ai-consulting', 'ai-ml-infrastructure'],
  },
  {
    slug: 'ai-ml-infrastructure',
    question: 'What is machine learning infrastructure?',
    definition: 'Machine learning infrastructure is everything that keeps a model working after it leaves the notebook: data and training pipelines, versioning, automated deployment, model serving, and monitoring for accuracy, drift and cost. MLOps is the practice of running that infrastructure reliably, so models can be retrained and released safely.',
    name: 'AI and ML infrastructure',
    title: 'Machine Learning Infrastructure and MLOps',
    description: 'AI and ML infrastructure by Syntalix: custom models, training pipelines, MLOps, model serving and monitoring on AWS, GCP or Azure, built for production.',
    h1: 'AI and machine learning infrastructure',
    lead: 'Machine learning infrastructure that turns a model into a dependable product: training pipelines, MLOps, model serving and monitoring on the cloud you already use.',
    card: 'Data pipelines, model serving and monitoring on AWS, GCP or Azure.',
    image: 'svc-infra',
    capabilities: [
      ['Custom model development', 'Classifiers, recommenders, vision and forecasting models trained on validated data.'],
      ['Training pipelines', 'Automated ingestion, features, training, tuning and validation with versioned experiments.'],
      ['MLOps', 'Model registries, CI/CD for models, scheduled retraining and A/B tests.'],
      ['Serving', 'Low-latency endpoints, batch jobs and GPU-optimised serving on containers or serverless.'],
      ['Monitoring', 'Drift detection, quality tracking and alerts, with dashboards your team can read.'],
      ['Data engineering', 'Pipelines, feature stores and warehouses that feed models clean, timely data.'],
    ],
    steps: [
      ['Assess', 'Objectives, data and existing systems, with a feasibility check before any spend.'],
      ['Design', 'Pipelines, training, serving and monitoring in one architecture and a phased plan.'],
      ['Build and train', 'Tracked experiments until the model meets the agreed benchmark.'],
      ['Deploy and monitor', 'CI/CD, load tests, drift detection and retraining triggers.'],
    ],
    tools: ['PyTorch', 'scikit-learn', 'Hugging Face', 'MLflow', 'Airflow', 'Docker', 'Kubernetes', 'AWS SageMaker', 'GCP Vertex AI', 'Azure ML'],
    faqs: [
      ['Which cloud do you work on?', 'AWS, Google Cloud and Azure. We build on the platform you already use, inside your own account, so billing, security policies and data residency stay under your control. The setup is written as infrastructure code, so it can be reviewed and reproduced.'],
      ['Do we need MLOps for one model?', 'If the model affects customers or revenue, yes. At minimum you need versioned data and models, monitoring for accuracy and drift, and a safe way to retrain and roll back. Without these, a model quietly degrades and nobody notices until results suffer.'],
      ['Can you take over an existing model?', 'Yes. We start with an audit of the data, training code and serving setup, then stabilise what is already there with tests, monitoring and reproducible builds. Only once the model is dependable do we extend it with new features or retraining.'],
    ],
    proof: ['geodata-scraper', 'ai-report-platform', 'multi-format-converter'],
    related: ['llm-engineering', 'agentic-systems', 'ai-consulting'],
  },
  {
    slug: 'ai-consulting',
    question: 'What is AI consulting?',
    definition: 'AI consulting is working out where artificial intelligence will actually pay off in a business, and what it will take to get there. It covers auditing processes and data, ranking use cases by value and feasibility, and producing a costed roadmap, often proved with a small working prototype.',
    name: 'AI consulting',
    title: 'AI Consulting Services in India',
    description: 'AI consulting from Syntalix in India: find the AI use cases worth building, get a costed roadmap, validate with a proof of concept, then build it with us.',
    h1: 'AI consulting services',
    lead: 'Find where AI actually pays off in your business, then get a costed plan you can build on, from the same team that engineers it.',
    card: 'Find where AI pays off in your business, then get a plan you can build on.',
    image: 'svc-consulting',
    capabilities: [
      ['Use-case discovery', 'The two or three AI applications that fit your business, not generic trends.'],
      ['Roadmap and business case', 'A prioritised plan with timelines, resources and cost estimates.'],
      ['Proof of concept', 'A focused two-to-four-week build on your real data before a full commitment.'],
      ['Build or buy analysis', 'An objective view on buying a tool, building custom or adapting a model.'],
      ['Risk and compliance review', 'Data privacy, regulatory and operational risks surfaced before production.'],
      ['Implementation', 'Our engineers build what the roadmap recommends, with the same team you planned with.'],
    ],
    steps: [
      ['Discovery', 'Operations, data and team skills, mapped to where AI can help.'],
      ['Roadmap', 'A prioritised, costed plan you can take to your leadership.'],
      ['Proof of concept', 'Validate the top use case on real data in weeks.'],
      ['Build', 'Production implementation, or a clean handover to your team.'],
    ],
    tools: ['Workshops', 'Data audits', 'Proofs of concept', 'Cost models', 'Architecture reviews'],
    faqs: [
      ['Do we need clean data before starting?', 'No. Discovery includes a data audit that shows what you have, where it lives and how usable it is. The roadmap then puts data fixes in the right order, so cleanup effort goes first to the use cases that are worth the most.'],
      ['Is consulting separate from building?', 'It can be. Some clients only want the roadmap and a costed plan. Many start with a roadmap and a proof of concept, then have us build the production system, so the people who planned it are the ones who engineer it.'],
      ['How long does discovery take?', 'It depends on how many teams, systems and data sources are involved. A focused question about one process is quick, while a company-wide AI roadmap takes longer. The free scoping call ends with a clear timeline and a fixed price for discovery before anything starts.'],
    ],
    proof: ['startup-ai-advisory', 'city-farmers', 'legal-discovery-ai'],
    area: 'We work with businesses across India, from Lucknow in our home state of Uttar Pradesh to Kolkata, Delhi NCR and Bengaluru, and with clients in the United States and Europe. Workshops run remotely or on site.',
    related: ['llm-engineering', 'agentic-systems', 'web-mobile-development'],
  },
  {
    slug: 'aeo-optimization',
    question: 'What is answer engine optimisation (AEO)?',
    definition: 'Answer engine optimisation, or AEO, is making a website easy for AI assistants such as ChatGPT, Perplexity and Google AI Overviews to understand, trust and cite. It combines crawler access, structured data, clear question-and-answer content and consistent business details, so the engines can quote you accurately.',
    name: 'Answer engine optimisation',
    title: 'AEO Consultants: Answer Engine Optimisation',
    description: 'AEO consultants at Syntalix: structured data, entity clarity, llms.txt and answer-ready content so ChatGPT, Perplexity and Google AI can cite your business.',
    h1: 'Answer engine optimisation',
    lead: 'Make your business easy for ChatGPT, Perplexity and Google AI Overviews to understand, trust and cite, with the technical foundation done properly.',
    card: 'Structure your site so ChatGPT, Perplexity and Google AI can find and cite you.',
    image: 'svc-aeo',
    capabilities: [
      ['Structured data', 'JSON-LD for your organisation, services, articles and breadcrumbs, rendered in the HTML where every crawler sees it.'],
      ['Entity clarity', 'Consistent names, profiles and sameAs links so engines know exactly who you are.'],
      ['AI-crawlable content', 'llms.txt, clean HTML and crawler rules that let AI assistants read your site.'],
      ['Answer-ready content', 'Definitions, FAQs and comparisons written in the shape answer engines extract.'],
      ['Profile and citation building', 'Complete, consistent profiles on the platforms AI engines trust.'],
      ['Monitoring', 'Regular checks on how and where AI answers mention your business.'],
    ],
    steps: [
      ['Audit', 'Technical SEO, schema, entity signals and how AI engines describe you today.'],
      ['Fix the foundation', 'Schema, crawlability, llms.txt and entity consistency.'],
      ['Content', 'Answer-ready pages for the questions your buyers ask.'],
      ['Track', 'Ongoing checks and a short report on what changed.'],
    ],
    tools: ['JSON-LD', 'Schema.org', 'llms.txt', 'Google Search Console', 'Bing Webmaster Tools', 'IndexNow'],
    faqs: [
      ['How is AEO different from SEO?', 'SEO aims to rank your pages as links in search results. AEO makes your content easy for ChatGPT, Perplexity and Google AI Overviews to extract, trust and cite inside their answers. The technical foundation overlaps heavily, so good AEO work improves classic SEO too.'],
      ['Can you guarantee ChatGPT will mention us?', 'No one can honestly guarantee that, because AI engines decide what to cite themselves. What we can do is fix the signals they rely on, such as structured data, clear answers, crawler access and consistent business details, then track how often you are cited over time.'],
      ['Do you also do classic SEO?', 'Yes. Technical SEO, Core Web Vitals, structured data and internal linking are part of every AEO engagement, because answer engines draw on the same crawlable, well-structured pages that rank in Google. You get one plan that covers both.'],
    ],
    proof: ['legal-india', 'rays-and-rzilss', 'jt-makeovers'],
    related: ['web-mobile-development', 'llm-engineering', 'ai-consulting'],
  },
];

export const serviceBySlug = (slug: string) => SERVICES.find((s) => s.slug === slug)!;
