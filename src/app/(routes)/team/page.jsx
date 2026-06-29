"use client";

import { motion } from "framer-motion";
import { HiOutlineUserGroup, HiOutlineLightBulb, HiOutlineGlobeAlt, HiOutlineSparkles } from "react-icons/hi";

const teamBreadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.syntalixconsultancy.com" },
    { "@type": "ListItem", "position": 2, "name": "Team", "item": "https://www.syntalixconsultancy.com/team" }
  ]
};

const expertiseAreas = [
  {
    id: "llm",
    title: "LLM Engineering",
    description: "Our LLM engineers have shipped production RAG pipelines, fine-tuned domain-specific models using LoRA and QLoRA, and built hallucination-mitigation layers used by clients in finance, legal, and healthcare.",
    tags: ["LangChain", "LangGraph", "RAG", "Fine-Tuning", "Prompt Engineering", "Azure OpenAI", "Ollama"]
  },
  {
    id: "agentic",
    title: "Agentic & Multi-Agent Systems",
    description: "Specialists in building autonomous AI systems that plan, reason, and act across multi-step workflows. Our agent engineers have deployed systems that handle document processing, research automation, and business process orchestration.",
    tags: ["LangGraph", "AutoGen", "Multi-Agent", "Tool Use", "Human-in-the-Loop", "Evaluation"]
  },
  {
    id: "mlops",
    title: "AI/ML Infrastructure & MLOps",
    description: "End-to-end ML lifecycle engineering: from custom model architecture and training pipelines to production monitoring, drift detection, and cost optimisation. Our infrastructure team has designed systems processing millions of inference requests monthly.",
    tags: ["MLflow", "DVC", "OpenTelemetry", "Docker", "Kubernetes", "GPU Infrastructure", "FastAPI"]
  },
  {
    id: "engineering",
    title: "Full-Stack Engineering",
    description: "Senior engineers with deep expertise in modern full-stack development. We build performant Next.js frontends, FastAPI backends, and cross-platform mobile apps that are production-tested at enterprise scale.",
    tags: ["Next.js", "React", "FastAPI", "React Native", "iOS", "Android", "TypeScript", "PostgreSQL"]
  }
];

const culturePillars = [
  {
    id: "innovation",
    title: "Driven by Innovation",
    icon: <HiOutlineLightBulb className="w-8 h-8 text-primary" />,
    description: "At Syntalix, we don't just use technology; we push its boundaries. Our team thrives on solving complex enterprise problems using cutting-edge artificial intelligence, robust machine learning pipelines, and highly scalable software architectures."
  },
  {
    id: "collaboration",
    title: "Seamless Collaboration",
    icon: <HiOutlineUserGroup className="w-8 h-8 text-primary" />,
    description: "Great software isn't built in silos. Our culture is rooted in deep collaboration—both internally across engineering and design teams, and externally with our clients. We believe transparent communication is the bedrock of project success."
  },
  {
    id: "global",
    title: "Global Perspective",
    icon: <HiOutlineGlobeAlt className="w-8 h-8 text-primary" />,
    description: "Operating from India, our team has a global footprint, delivering high-impact solutions for businesses in the US, UK, UAE, and Australia. This international exposure gives us a diverse, worldly perspective on digital transformation."
  },
  {
    id: "excellence",
    title: "Commitment to Excellence",
    icon: <HiOutlineSparkles className="w-8 h-8 text-primary" />,
    description: "We take immense pride in our craft. Whether it's fine-tuning an LLM, building an autonomous agentic system, or designing a high-performance web application, our team maintains rigorous standards for code quality and user experience."
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export default function TeamPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Syntalix Consultancy",
    "legalName": "Syntalix LLP",
    "url": "https://www.syntalixconsultancy.com",
    "logo": "https://www.syntalixconsultancy.com/syntalix_logo.webp",
    "description": "The Syntalix team is a collective of elite AI engineers, LLM specialists, and full-stack developers building production-grade AI and software systems for global enterprise clients."
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(teamBreadcrumbSchema) }}
      />
      <div className="min-h-screen pt-32 pb-24 bg-background overflow-hidden relative">
        {/* Background Gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] opacity-20 pointer-events-none blur-[100px] bg-gradient-to-br from-primary via-purple-500 to-cyan-500 rounded-full" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-400">Team & Expertise</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We are a collective of elite AI engineers, LLM specialists, and full-stack developers. Our unified mission: build robust, intelligent systems that drive enterprise success.
            </p>
          </motion.div>

          {/* Expertise Areas */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-24"
          >
            {expertiseAreas.map((area) => (
              <div
                key={area.id}
                className="bg-card/50 backdrop-blur-xl border border-white/10 dark:border-slate-800 rounded-3xl p-8 shadow-xl hover:shadow-2xl hover:border-primary/30 transition-all duration-300"
              >
                <h2 className="text-2xl font-bold text-foreground mb-4">{area.title}</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">{area.description}</p>
                <div className="flex flex-wrap gap-2">
                  {area.tags.map((tag) => (
                    <span key={tag} className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary font-medium">{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
          >
            {culturePillars.map((pillar) => (
              <motion.div 
                key={pillar.id}
                variants={itemVariants}
                className="bg-card/50 backdrop-blur-xl border border-white/10 dark:border-slate-800 rounded-3xl p-8 shadow-xl hover:shadow-2xl hover:border-primary/30 transition-all duration-300"
              >
                <div className="flex flex-col gap-6 items-start">
                  <div className="p-4 bg-primary/10 rounded-2xl">
                    {pillar.icon}
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-foreground mb-4">{pillar.title}</h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-24 text-center"
          >
            <div className="inline-block p-[1px] rounded-full bg-gradient-to-r from-primary via-purple-500 to-cyan-500">
              <div className="bg-background rounded-full px-8 py-6 max-w-xl mx-auto">
                <h3 className="text-2xl font-bold text-foreground mb-3">Want to join us?</h3>
                <p className="text-muted-foreground mb-6 text-lg">We are always looking for exceptional talent who share our passion for AI and enterprise software.</p>
                <a 
                  href="/careers" 
                  className="inline-flex items-center px-6 py-3 rounded-full bg-primary/10 text-primary font-semibold hover:bg-primary/20 transition-colors"
                >
                  View Open Positions <span className="ml-2">→</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
