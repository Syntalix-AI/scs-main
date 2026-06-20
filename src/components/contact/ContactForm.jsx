"use client";
import { motion } from "framer-motion";
import LeadForm from "../shared/LeadForm";

const ContactForm = () => {
  return (
    <section className="py-16 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto"
        >
          <LeadForm 
            title="Drop Us a Line"
            subtitle="Whether it's a new project, an inquiry, or just a hello, we'd love to hear from you."
            className="w-full bg-transparent p-0"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default ContactForm;