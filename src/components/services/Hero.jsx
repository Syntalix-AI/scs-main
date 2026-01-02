"use client";

import { motion } from "framer-motion";
import { useState } from "react";
// import ThreeScene from "./ThreeScene"; // Re-enable when stable

const Hero = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    budget: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-background pt-20 md:pt-0">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-primary/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-secondary/20 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Column: Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-left space-y-6"
        >
          {/* --- ANIMATED BADGE START --- */}
          <motion.div 
            initial="initial"
            whileHover="hover"
            animate="initial"
            variants={{
              initial: { scale: 1, rotate: 0 },
              hover: { 
                scale: 1.05, 
                rotate: [0, -2, 2, -2, 2, 0], // Playful Wiggle Keyframes
                transition: { 
                  rotate: { duration: 0.5, ease: "easeInOut" },
                  scale: { duration: 0.2 }
                } 
              }
            }}
            className="relative overflow-hidden inline-flex items-center px-4 py-1.5 rounded-full bg-purple-100 dark:bg-purple-900/30 border border-purple-300 dark:border-purple-700/50 text-purple-700 dark:text-purple-300 font-medium text-sm mb-2 backdrop-blur-sm cursor-default"
          >
            {/* Shimmer Effect Layer */}
            <motion.div
              variants={{
                initial: { x: "-100%", opacity: 0 },
                hover: { 
                  x: "200%", 
                  opacity: 1,
                  transition: { duration: 1, ease: "easeInOut" } 
                }
              }}
              className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/60 dark:via-white/20 to-transparent skew-x-12 pointer-events-none"
            />

            {/* Rocket Animation - Continuous Rotation */}
            <motion.span
              animate={{ rotate: [0, 15, 0] }}
              transition={{ 
                duration: 2, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              className="mr-2 inline-block"
            >
              🚀
            </motion.span>
            
            Elevate Your Digital Presence
          </motion.div>
          {/* --- ANIMATED BADGE END --- */}
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl md:text-6xl font-bold tracking-tight leading-tight"
          >
            Building <span className="text-purple-600 dark:text-purple-400">Digital Excellence</span> for Your Business
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-lg md:text-xl text-gray-600 dark:text-muted-foreground max-w-lg"
          >
            We craft high-performance websites, robust software, and AI-driven solutions tailored to scale your enterprise.
          </motion.p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            
            {/* Animated Get Started Button */}
            <button
              onClick={() => document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" })}
              className="relative inline-flex h-14 overflow-hidden rounded-full p-[2px] hover:scale-105 transition-transform duration-300 group shadow-lg shadow-purple-500/30"
            >
              {/* Spinning Gradient Border Layer */}
              <span className="absolute inset-[-1200%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#ffffff_0%,#050505_50%,#ffffff_100%)] dark:bg-[conic-gradient(from_90deg_at_50%_50%,#000000_0%,#737373_50%,#000000_100%)]" />
              
              {/* Button Content Layer */}
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-indigo-600 px-8 py-4 text-sm font-bold text-white backdrop-blur-3xl transition-all duration-300 group-hover:brightness-110">
                Get Started
              </span>
            </button>
            
            <button className="px-8 py-4 rounded-full bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 text-foreground font-bold hover:bg-gray-50 dark:hover:bg-slate-700 hover:border-gray-300 dark:hover:border-slate-600 transition-all duration-300 shadow-sm">
              View Our Work
            </button>
          </div>

          {/* Stats / Trust Indicators */}
          <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-100 dark:border-slate-700 mt-8">
            <div>
              <h3 className="text-2xl font-bold text-primary">50+</h3>
              <p className="text-sm text-muted-foreground">Projects Delivered</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-primary">98%</h3>
              <p className="text-sm text-muted-foreground">Client Satisfaction</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-primary">24/7</h3>
              <p className="text-sm text-muted-foreground">Support System</p>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Visual / Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="relative flex justify-center lg:justify-end"
        >
          {/* Contact Form Card (Floating) */}
          <div id="contact-form" className="w-full max-w-md bg-white/80 backdrop-blur-md border border-white/20 shadow-2xl rounded-2xl p-8 dark:bg-gray-900/80 dark:border-gray-800">
            <h3 className="text-2xl font-bold mb-2 text-foreground">Let&apos;s Talk Business</h3>
            <p className="text-sm text-muted-foreground mb-6">Fill out the form below and we&apos;ll get back to you within 24 hours.</p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all dark:bg-gray-800 dark:border-gray-700"
                  placeholder="John Doe"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all dark:bg-gray-800 dark:border-gray-700"
                  placeholder="john@example.com"
                  required
                />
              </div>
              <div>
                <label htmlFor="budget" className="block text-sm font-medium text-foreground mb-1">Budget</label>
                <select
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all dark:bg-gray-800 dark:border-gray-700"
                  required
                >
                  <option value="">Select Range</option>
                  <option value="<1000">$1,000 - $5,000</option>
                  <option value="5000-10000">$5,000 - $10,000</option>
                  <option value="10000+">$10,000+</option>
                </select>
              </div>
              <button
                type="submit"
                className="w-full py-3.5 rounded-lg bg-primary text-white font-bold shadow-lg shadow-primary/25 hover:bg-primary/90 hover:shadow-primary/40 transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;