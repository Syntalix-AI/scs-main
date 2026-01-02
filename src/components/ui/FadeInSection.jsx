"use client";

import { motion } from "framer-motion";

export const FadeInSection = ({ children, className = "" }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }} // Triggers when 20% visible, fades out when scrolling away
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default FadeInSection;