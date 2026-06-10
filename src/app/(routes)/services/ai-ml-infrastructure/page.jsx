import Link from "next/link";
import Image from "next/image";
import {
  Brain,
  Cpu,
  Database,
  BarChart3,
  Cog,
  Server,
  ArrowRight,
  CheckCircle2,
  Layers,
  GitBranch,
  Activity,
  Shield,
  ChevronDown,
  MessageSquareCode,
  Bot,
  Globe,
} from "lucide-react";

export const metadata = {
  title: "AI & ML Infrastructure Solutions | Syntalix Consultancy",
  description:
    "Custom ML model development, training pipeline setup, MLOps automation, and production-grade model deployment. Syntalix builds enterprise AI infrastructure that scales with your business.",
  openGraph: {
    title: "AI & ML Infrastructure Solutions | Syntalix Consultancy",
    description:
      "End-to-end AI/ML infrastructure: custom models, training pipelines, MLOps, and deployment. Enterprise-grade machine learning systems built for production.",
    url: "https://www.syntalixconsultancy.in/services/ai-ml-infrastructure",
  },
  alternates: {
    canonical: "https://www.syntalixconsultancy.in/services/ai-ml-infrastructure",
  },
};

const features = [
  {
    icon: Brain,
    title: "Custom Model Development",
    description:
      "We design and train bespoke machine learning models tailored to your domain — from computer vision and NLP classifiers to recommendation engines and time-series forecasters. Every model is built on rigorously validated datasets and optimized for your specific business metrics.",
  },
  {
    icon: GitBranch,
    title: "Training Pipeline Automation",
    description:
      "Our engineers architect end-to-end training pipelines that automate data ingestion, feature engineering, model training, hyperparameter tuning, and validation. Reproducible experiments and version-controlled pipelines ensure your ML workflow is auditable and efficient.",
  },
  {
    icon: Cog,
    title: "MLOps & CI/CD for ML",
    description:
      "We implement robust MLOps practices including automated model retraining, continuous integration and deployment for ML artifacts, model registries, and A/B testing frameworks. Your models stay fresh, performant, and aligned with evolving data distributions.",
  },
  {
    icon: Server,
    title: "Model Deployment & Serving",
    description:
      "Deploy models at scale with low-latency inference endpoints, batch prediction systems, and edge deployment capabilities. We support containerized serving via Docker/Kubernetes, serverless inference, and GPU-optimized serving infrastructure.",
  },
  {
    icon: Activity,
    title: "Model Monitoring & Observability",
    description:
      "Proactive monitoring of model performance, data drift detection, prediction quality tracking, and automated alerting. We build dashboards and observability stacks that give you full visibility into your models in production.",
  },
  {
    icon: Database,
    title: "Data Engineering & Feature Stores",
    description:
      "We design and build scalable data pipelines, feature stores, and data lakes that feed your ML systems with clean, reliable, and real-time data. From ETL to streaming architectures, we ensure your data infrastructure is ML-ready.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Discovery & Assessment",
    description:
      "We begin with a deep dive into your business objectives, existing data assets, and technical landscape. Our ML engineers conduct feasibility studies and identify high-impact opportunities where machine learning can deliver measurable ROI.",
  },
  {
    step: "02",
    title: "Architecture & Design",
    description:
      "Based on our assessment, we design a comprehensive ML architecture — covering data pipelines, model training infrastructure, serving layer, and monitoring stack. We produce detailed technical specifications and a phased implementation roadmap.",
  },
  {
    step: "03",
    title: "Development & Training",
    description:
      "Our team builds and trains your ML models using industry-leading frameworks. We run systematic experiments, track metrics rigorously, and iterate on model architectures until we achieve target performance benchmarks.",
  },
  {
    step: "04",
    title: "Deployment & Integration",
    description:
      "We deploy production-ready models with full CI/CD pipelines, integrate them into your applications via APIs or streaming systems, and conduct load testing to ensure they meet your latency and throughput requirements.",
  },
  {
    step: "05",
    title: "Monitoring & Optimization",
    description:
      "Post-deployment, we set up continuous monitoring, data drift detection, and automated retraining triggers. Our team provides ongoing optimization and support to ensure your models continue to deliver value over time.",
  },
];

const useCases = [
  {
    title: "Predictive Maintenance for Manufacturing",
    description:
      "We built a sensor-data-driven predictive maintenance system for a manufacturing client that reduced unplanned downtime by 40% and saved over $2M annually in maintenance costs. The system uses time-series models to predict equipment failures 72 hours in advance.",
  },
  {
    title: "Fraud Detection for FinTech",
    description:
      "Our team developed a real-time fraud detection pipeline processing millions of transactions daily. The ensemble model achieved a 95% detection rate with less than 0.1% false positive rate, significantly reducing fraud losses while maintaining customer experience.",
  },
  {
    title: "Medical Image Analysis",
    description:
      "We designed a computer vision pipeline for a healthcare provider to assist radiologists in detecting anomalies in medical imaging. The system processes X-rays and CT scans, flagging potential issues with 97% sensitivity and reducing diagnostic turnaround by 60%.",
  },
];

const techStack = [
  { category: "Frameworks", items: ["PyTorch", "TensorFlow", "scikit-learn", "XGBoost", "Hugging Face"] },
  { category: "MLOps", items: ["MLflow", "Kubeflow", "DVC", "Weights & Biases", "Airflow"] },
  { category: "Infrastructure", items: ["AWS SageMaker", "GCP Vertex AI", "Azure ML", "Kubernetes", "Docker"] },
  { category: "Data", items: ["Spark", "Kafka", "Feast", "dbt", "Snowflake"] },
];

const faqs = [
  {
    question: "How long does it take to build a custom ML model?",
    answer:
      "The timeline varies based on complexity and data readiness. A straightforward classification or regression model can be developed in 4–6 weeks, while complex deep learning systems with custom architectures may take 3–6 months. We always start with a rapid proof-of-concept to validate feasibility before committing to full-scale development.",
  },
  {
    question: "Do you work with our existing data infrastructure?",
    answer:
      "Absolutely. We integrate with your existing data warehouses, lakes, and pipelines. Whether you use Snowflake, BigQuery, Redshift, or custom data systems, we design our ML infrastructure to work seamlessly within your current architecture while recommending improvements where needed.",
  },
  {
    question: "What happens after the model is deployed?",
    answer:
      "Deployment is just the beginning. We set up comprehensive monitoring for model performance, data drift, and system health. We can provide ongoing maintenance and optimization through our support plans, or train your team to manage the system independently with full documentation and knowledge transfer.",
  },
  {
    question: "Can you help us with GPU infrastructure and cost optimization?",
    answer:
      "Yes. We design GPU infrastructure strategies that balance performance with cost efficiency — including spot instance strategies, multi-GPU training optimization, model quantization, and inference optimization techniques that can reduce compute costs by 50–80% without sacrificing model quality.",
  },
  {
    question: "Do you handle data privacy and regulatory compliance?",
    answer:
      "Data privacy and compliance are integral to our process. We implement privacy-preserving techniques like differential privacy, federated learning, and data anonymization where required. Our infrastructure designs are aligned with GDPR, HIPAA, SOC 2, and other relevant regulatory frameworks.",
  },
];

export default function AIMLInfrastructurePage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative w-full pt-24 pb-16 md:pt-32 md:pb-20 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
          <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-blue-600/15 rounded-full blur-[120px]" />
          <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-violet-600/15 rounded-full blur-[120px]" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 max-w-4xl">
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-100 dark:bg-blue-900/30 border border-blue-300 dark:border-blue-700/50 text-blue-700 dark:text-blue-300 font-medium text-sm mb-6">
                <Brain className="w-4 h-4 mr-2" />
                AI & ML Infrastructure
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight mb-6 syntalix-heading">
                Enterprise-Grade{" "}
                <span className="syntalix-gradient-text">AI & ML Infrastructure</span>{" "}
                Solutions
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mb-8 syntalix-body">
                We design, build, and operate the foundational machine learning
                systems that power intelligent enterprises. From custom model
                development to production MLOps — we handle the entire ML lifecycle
                so you can focus on driving business impact with AI.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-violet-600 text-white font-bold shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:scale-105 transition-all duration-300"
                >
                  Discuss Your ML Project
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
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-violet-500/10 rounded-3xl blur-2xl" />
                <Image
                  src="/services/ai-ml-infra.png"
                  alt="AI & ML Infrastructure Glassmorphic Figure"
                  fill
                  className="object-contain drop-shadow-[0_20px_50px_rgba(59,130,246,0.25)] dark:drop-shadow-[0_20px_50px_rgba(139,92,246,0.15)]"
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
              Comprehensive ML Infrastructure Capabilities
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg syntalix-body">
              Every component of your machine learning stack — designed for
              reliability, scalability, and production readiness.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="bg-white dark:bg-slate-900/50 backdrop-blur-xl border border-gray-200 dark:border-slate-800 rounded-2xl p-7 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-violet-600 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
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
              Our ML Development Process
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg syntalix-body">
              A proven, structured approach that takes your ML project from concept
              to production with minimal risk and maximum impact.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-8">
            {processSteps.map((step) => (
              <div
                key={step.step}
                className="flex gap-6 items-start"
              >
                <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600 to-violet-600 flex items-center justify-center text-white font-bold text-lg shadow-lg">
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
              Real-World Impact
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg syntalix-body">
              See how our ML infrastructure solutions have delivered tangible
              results across industries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {useCases.map((useCase) => (
              <div
                key={useCase.title}
                className="bg-white dark:bg-slate-900/50 backdrop-blur-xl border border-gray-200 dark:border-slate-800 rounded-2xl p-7 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-4">
                  <BarChart3 className="w-5 h-5 text-blue-600 dark:text-blue-400" />
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
              We leverage industry-leading tools and frameworks to build ML
              infrastructure that performs at scale.
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
              Common questions about our AI & ML infrastructure services.
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
              href="/services/llm-engineering"
              className="group flex items-center gap-4 bg-white dark:bg-slate-900/50 border border-gray-200 dark:border-slate-800 rounded-xl p-5 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-lg bg-violet-100 dark:bg-violet-900/30 flex items-center justify-center flex-shrink-0">
                <MessageSquareCode className="w-5 h-5 text-violet-600 dark:text-violet-400" />
              </div>
              <div>
                <h3 className="font-bold group-hover:text-primary transition-colors">
                  LLM Engineering
                </h3>
                <p className="text-sm text-muted-foreground">Fine-tuning, RAG & APIs</p>
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
          <div className="absolute top-[20%] left-[10%] w-[40%] h-[40%] bg-blue-600/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-[10%] right-[10%] w-[35%] h-[35%] bg-violet-600/10 rounded-full blur-[100px]" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 syntalix-heading">
              Let&apos;s Build Your{" "}
              <span className="syntalix-gradient-text">ML Infrastructure</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 syntalix-body">
              Whether you&apos;re starting your ML journey or scaling existing
              systems, our team of senior ML engineers is ready to help. Get a free
              technical consultation to explore how we can accelerate your AI
              initiatives.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-violet-600 text-white font-bold shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:scale-105 transition-all duration-300"
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
