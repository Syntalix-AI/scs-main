"use client";

import { motion } from "framer-motion";
import { HiOutlineUserGroup, HiOutlineLightBulb, HiOutlineCode } from "react-icons/hi";

const teamDivisions = [
  {
    id: "leadership",
    title: "Leadership & Architecture",
    icon: <HiOutlineLightBulb className="w-8 h-8 text-primary" />,
    description: "Our leadership and principal architects bring decades of combined experience in enterprise software, artificial intelligence, and strategic digital transformation. They guide the vision and ensure every solution aligns with our clients' core business objectives.",
    members: [
      { role: "Lead AI Architect", expertise: "LLM Systems, Distributed ML, Cloud Architecture" },
      { role: "Principal Software Engineer", expertise: "Microservices, High-Availability Systems" },
    ]
  },
  {
    id: "ai-engineering",
    title: "AI Engineering Division",
    icon: <HiOutlineUserGroup className="w-8 h-8 text-primary" />,
    description: "A specialized cohort of Machine Learning Engineers, Data Scientists, and AI Researchers. This division focuses on training custom models, designing agentic AI systems, and deploying scalable MLOps pipelines.",
    members: [
      { role: "Senior ML Engineer", expertise: "Computer Vision, Predictive Modeling" },
      { role: "LLM & NLP Specialist", expertise: "RAG, Prompt Engineering, Fine-tuning" },
      { role: "Data Engineer", expertise: "Data Lakes, Real-time Streaming, ETL" },
    ]
  },
  {
    id: "web-mobile",
    title: "Web & Mobile Development Team",
    icon: <HiOutlineCode className="w-8 h-8 text-primary" />,
    description: "Our full-stack developers and UI/UX designers craft intuitive, high-performance applications. They bridge the gap between complex backend AI systems and seamless, user-centric frontends.",
    members: [
      { role: "Lead Frontend Developer", expertise: "React, Next.js, Web Performance" },
      { role: "Senior Mobile Developer", expertise: "React Native, iOS, Android" },
      { role: "UI/UX Designer", expertise: "User Research, Prototyping, Design Systems" },
    ]
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
    "name": "Syntalix",
    "url": "https://www.syntalixconsultancy.com",
    "logo": "https://www.syntalixconsultancy.com/syntalix_logo.webp",
    "description": "Expert team of AI engineers, software architects, and developers delivering enterprise technology solutions.",
    "department": [
      {
        "@type": "Organization",
        "name": "Leadership & Architecture"
      },
      {
        "@type": "Organization",
        "name": "AI Engineering Division"
      },
      {
        "@type": "Organization",
        "name": "Web & Mobile Development Team"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
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
              Meet the <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-400">Syntalix Team</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We are a collective of elite engineers, visionary architects, and creative problem-solvers. While our expertise spans diverse technologies, our unified mission is to build robust, intelligent systems that drive enterprise success.
            </p>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-12"
          >
            {teamDivisions.map((division) => (
              <motion.div 
                key={division.id}
                variants={itemVariants}
                className="bg-card/50 backdrop-blur-xl border border-white/10 dark:border-slate-800 rounded-3xl p-8 md:p-12 shadow-2xl"
              >
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="flex-shrink-0 p-4 bg-primary/10 rounded-2xl">
                    {division.icon}
                  </div>
                  
                  <div className="flex-grow">
                    <h2 className="text-3xl font-bold text-foreground mb-4">{division.title}</h2>
                    <p className="text-lg text-muted-foreground mb-8 max-w-3xl">
                      {division.description}
                    </p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      {division.members.map((member, index) => (
                        <div key={index} className="bg-background/50 border border-border rounded-xl p-5 hover:border-primary/50 transition-colors">
                          <h3 className="font-semibold text-foreground mb-1">{member.role}</h3>
                          <p className="text-sm text-primary font-medium">{member.expertise}</p>
                        </div>
                      ))}
                    </div>
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
              <div className="bg-background rounded-full px-8 py-4">
                <h3 className="text-2xl font-bold text-foreground mb-2">Want to join us?</h3>
                <p className="text-muted-foreground mb-4">We're always looking for exceptional talent.</p>
                <a 
                  href="/careers" 
                  className="inline-flex items-center text-primary font-semibold hover:text-primary/80 transition-colors"
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
