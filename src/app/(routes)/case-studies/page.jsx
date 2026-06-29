import Link from "next/link";
import { HiArrowRight } from "react-icons/hi";

export const metadata = {
  title: "Case Studies",
  description: "Real AI and software outcomes from Syntalix: 80% faster document processing, 35% less manufacturing downtime, 50% faster e-commerce load times. Explore our client case studies.",
  alternates: { canonical: '/case-studies' },
  openGraph: {
    title: 'Case Studies | Syntalix Consultancy',
    description: 'Real AI and software outcomes from Syntalix: 80% faster document processing, 35% less manufacturing downtime, 50% faster e-commerce load times.',
    url: 'https://www.syntalixconsultancy.com/case-studies',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Case Studies | Syntalix Consultancy',
    description: 'Real AI outcomes: 80% faster document processing, 35% less downtime, 50% faster e-commerce. Explore Syntalix client case studies.',
    images: ['/og-image.png'],
  },
};

const caseStudies = [
  {
    title: "Automated Document Processing with LLMs",
    slug: "automated-document-processing-llm",
    industry: "Finance & Legal",
    outcome: "80% reduction in processing time",
    description: "Syntalix built an LLM-powered document processing pipeline utilizing RAG and custom fine-tuned models to extract structured data from unstructured legal and financial documents.",
  },
  {
    title: "Predictive Maintenance AI Infrastructure",
    slug: "predictive-maintenance-ai-infrastructure",
    industry: "Manufacturing",
    outcome: "35% reduction in downtime",
    description: "Syntalix developed an end-to-end AI infrastructure integrating IoT sensor data with custom ML models to predict equipment failures before they occur.",
  },
  {
    title: "Enterprise E-Commerce Modernization",
    slug: "enterprise-ecommerce-modernization",
    industry: "Retail",
    outcome: "50% faster load times, 20% conversion bump",
    description: "Syntalix modernized a legacy e-commerce platform using Next.js and a headless architecture, integrating AI-driven product recommendations.",
  }
];

const caseStudiesBreadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.syntalixconsultancy.com" },
    { "@type": "ListItem", "position": 2, "name": "Case Studies", "item": "https://www.syntalixconsultancy.com/case-studies" }
  ]
};

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen pt-32 pb-24 bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(caseStudiesBreadcrumbSchema) }} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Client Case Studies</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover how we help enterprises transform their operations with cutting-edge AI and scalable software solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study) => (
            <Link 
              key={study.slug} 
              href={`/case-studies/${study.slug}`}
              className="group flex flex-col justify-between bg-card border border-border rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {study.industry}
                  </span>
                </div>
                <h2 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {study.title}
                </h2>
                <p className="text-muted-foreground mb-6 line-clamp-3">
                  {study.description}
                </p>
              </div>
              <div>
                <div className="bg-primary/5 rounded-xl p-4 mb-6 border border-primary/10">
                  <span className="block text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1">Key Outcome</span>
                  <span className="text-primary font-bold text-lg">{study.outcome}</span>
                </div>
                <div className="flex items-center text-primary font-semibold text-sm">
                  Read Full Case Study <HiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
