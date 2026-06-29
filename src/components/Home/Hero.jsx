"use client";

import { motion } from "framer-motion";
import LeadForm from "../shared/LeadForm";
// import ThreeScene from "./ThreeScene"; // Re-enable when stable

const Hero = () => {
  return (
    <section className="relative w-full overflow-hidden bg-background pt-10 pb-16 lg:pt-16 lg:pb-24">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-primary/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-secondary/20 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Column: Text Content */}
        <motion.div
          initial={false}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-left space-y-6"
        >
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground leading-tight">
            Software, AI &amp; ML Development Company in India
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-lg">
            We craft high-performance websites, robust software, LLM applications, and AI-driven solutions tailored to scale your enterprise. From idea to deployment, Syntalix LLP is your end-to-end technology partner.
          </p>
          <p className="text-base text-muted-foreground max-w-lg mt-2">
              Serving enterprises in Gujarat (Ahmedabad, Surat, Vadodara), Delhi NCR, Bengaluru, Kolkata, and Uttar Pradesh — and clients globally across the US, UK, UAE, and Australia. From AI consulting and AEO strategy to production deployment, we deliver on time and within budget.
            </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button
              onClick={() => document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" })}
              className="px-8 py-4 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-bold shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:scale-105 transition-all duration-300"
            >
              Get Started
            </button>
            <button className="px-8 py-4 rounded-full bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 text-foreground font-bold hover:bg-gray-50 dark:hover:bg-slate-700 hover:border-gray-300 dark:hover:border-slate-600 transition-all duration-300 shadow-sm">
              View Our Work
            </button>
          </div>

          <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-100 dark:border-slate-700 mt-8">
            <div>
              <p className="text-2xl font-bold text-primary">50+</p>
              <p className="text-sm text-muted-foreground">Projects delivered across fintech, healthcare &amp; e-commerce</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-primary">98%</p>
              <p className="text-sm text-muted-foreground">Client satisfaction rate across all engagements</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-primary">24/7</p>
              <p className="text-sm text-muted-foreground">Dedicated support and SLA-backed delivery</p>
            </div>
          </div>

          {/* Brand Clarity — helps Google entity disambiguation */}
          <p className="text-xs text-muted-foreground/70 mt-4">
            Syntalix Consultancy is the official brand of{' '}
            <strong className="font-semibold text-muted-foreground">Syntalix LLP</strong>
            {' '}(LLPIN: ACR-6280), a registered AI/ML consultancy in India.
          </p>
        </motion.div>

        {/* Right Column: Visual / Form */}
        <motion.div
          initial={false}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="relative flex justify-center lg:justify-end lg:mt-0 mt-12"
        >
          {/* Placeholder for 3D or Hero Image */}
          {/* <div className="w-full h-[400px] md:h-[500px] bg-gray-100 rounded-2xl flex items-center justify-center border border-gray-200 shadow-xl">
             <ThreeScene /> 
            <span className="text-muted-foreground">3D Visual / Hero Image</span>
          </div> */}

          {/* Contact Form Card (Floating) */}
          <div id="contact-form" className="w-full max-w-md mt-6 lg:mt-0">
            <LeadForm />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
