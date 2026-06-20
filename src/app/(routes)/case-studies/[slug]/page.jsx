import { notFound } from "next/navigation";
import Link from "next/link";
import { HiArrowLeft, HiCheckCircle } from "react-icons/hi";

const caseStudiesData = {
  "automated-document-processing-llm": {
    title: "Automated Document Processing with LLMs",
    industry: "Finance & Legal",
    outcome: "80% reduction in processing time",
    challenge: "A leading financial and legal advisory firm was struggling with the manual processing of thousands of complex documents daily. Their existing OCR solutions were inadequate for extracting nuanced, unstructured data from contracts, financial statements, and legal briefs. This manual bottleneck resulted in high operational costs, delayed turnaround times, and increased human error.",
    solution: "Syntalix architected an advanced, LLM-powered document processing pipeline. We utilized Retrieval-Augmented Generation (RAG) combined with fine-tuned open-source and proprietary Large Language Models. The system securely ingested PDFs and images, performed intelligent layout analysis, and accurately extracted highly complex entities, clauses, and tabular data into structured JSON formats.",
    techStack: ["Python", "LangChain", "OpenAI API", "Hugging Face Models", "Pinecone Vector DB", "FastAPI", "React"],
    results: [
      "80% reduction in manual document processing time.",
      "99.5% accuracy in targeted data extraction across variable document formats.",
      "Scalable infrastructure capable of processing 100,000+ pages per day.",
      "Significant reduction in operational costs and accelerated decision-making."
    ],
  },
  "predictive-maintenance-ai-infrastructure": {
    title: "Predictive Maintenance AI Infrastructure",
    industry: "Manufacturing",
    outcome: "35% reduction in downtime",
    challenge: "A heavy manufacturing enterprise faced unpredictable equipment failures, leading to costly unplanned downtime and disrupted supply chains. Their reactive maintenance strategy and siloed sensor data prevented them from anticipating mechanical issues before they caused catastrophic halts on the production floor.",
    solution: "Syntalix engineered an end-to-end AI infrastructure tailored for predictive maintenance. We integrated distributed IoT sensor streams into a centralized data lake, built robust data engineering pipelines, and developed custom Machine Learning models using historical failure data. We deployed an MLOps pipeline to ensure continuous model training, monitoring, and real-time inference on edge devices.",
    techStack: ["AWS IoT Core", "Apache Kafka", "PyTorch", "scikit-learn", "MLflow", "Docker", "Kubernetes", "Next.js Dashboard"],
    results: [
      "35% reduction in unplanned equipment downtime.",
      "Enabled shift from reactive to proactive maintenance scheduling.",
      "Real-time alerting dashboard for floor managers.",
      "25% extension in the average lifespan of critical machinery."
    ],
  },
  "enterprise-ecommerce-modernization": {
    title: "Enterprise E-Commerce Modernization",
    industry: "Retail",
    outcome: "50% faster load times, 20% conversion bump",
    challenge: "A national retail brand's legacy monolithic e-commerce platform was suffering from severe performance issues, slow page loads, and poor mobile responsiveness. This degraded user experience resulted in high cart abandonment rates and limited their ability to integrate modern AI-driven personalization tools to boost sales.",
    solution: "Syntalix spearheaded a comprehensive digital transformation, migrating the monolithic architecture to a modern, headless e-commerce stack. We built a blazing-fast frontend using Next.js and Tailwind CSS, backed by scalable microservices. Additionally, we integrated an AI-powered recommendation engine that analyzed user browsing behavior to deliver personalized product suggestions in real-time.",
    techStack: ["Next.js", "React", "Tailwind CSS", "Node.js", "GraphQL", "AWS", "Redis", "Custom Recommendation ML Model"],
    results: [
      "50% faster page load times, significantly improving Core Web Vitals.",
      "20% increase in overall conversion rates within the first quarter.",
      "Seamless integration of AI product recommendations boosting average order value (AOV) by 15%.",
      "Highly scalable architecture ready for peak holiday traffic loads."
    ],
  }
};

export async function generateMetadata({ params }) {
  const study = caseStudiesData[params.slug];
  if (!study) return { title: "Case Study Not Found" };
  
  return {
    title: `${study.title} | Syntalix Case Studies`,
    description: `Read how Syntalix achieved a ${study.outcome} in the ${study.industry} industry.`,
  };
}

export default function CaseStudyPage({ params }) {
  const study = caseStudiesData[params.slug];

  if (!study) {
    notFound();
  }

  return (
    <div className="min-h-screen pt-32 pb-24 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link 
          href="/case-studies" 
          className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary mb-8 transition-colors"
        >
          <HiArrowLeft className="mr-2" /> Back to Case Studies
        </Link>

        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
              {study.industry}
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
            {study.title}
          </h1>
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 md:p-8">
            <h3 className="text-lg font-semibold text-foreground mb-2">Key Outcome</h3>
            <p className="text-2xl md:text-3xl font-bold text-primary">{study.outcome}</p>
          </div>
        </div>

        <div className="prose prose-lg dark:prose-invert max-w-none space-y-12">
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">The Challenge</h2>
            <p className="text-muted-foreground leading-relaxed">{study.challenge}</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">The Solution</h2>
            <p className="text-muted-foreground leading-relaxed">{study.solution}</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Measurable Outcomes</h2>
            <ul className="space-y-4 list-none pl-0">
              {study.results.map((result, index) => (
                <li key={index} className="flex items-start">
                  <HiCheckCircle className="w-6 h-6 text-primary mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{result}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Technology Stack</h2>
            <div className="flex flex-wrap gap-2">
              {study.techStack.map((tech, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 bg-secondary text-secondary-foreground rounded-lg text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>
        </div>

        <div className="mt-16 pt-12 border-t border-border text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">Ready to Transform Your Business?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss how Syntalix can implement custom AI and software solutions tailored to your unique challenges.
          </p>
          <Link 
            href="/contact"
            className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          >
            Start a Conversation
          </Link>
        </div>
      </div>
    </div>
  );
}
