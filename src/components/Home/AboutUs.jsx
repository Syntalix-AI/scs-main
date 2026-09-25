import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const AboutUs = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-8">
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="relative w-full md:w-1/2"
      >
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-700/30 via-purple-600/20 to-indigo-600/30 rounded-3xl blur-3xl"></div>
          <Image
            src={AboutUsImage}
            alt="About Us"
            className="relative rounded-3xl shadow-2xl shadow-purple-500/30 transition-all duration-300 hover:shadow-purple-500/40"
            width={600}
            height={400}
            priority
          />
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-8"
      >
        <Link
          href="https://www.linkedin.com/company/syntalix-llp/"
          target="_blank"
          className="inline-flex items-center rounded-full bg-gradient-to-r from-purple-700 via-purple-600 to-purple-500 text-white px-6 py-3 text-lg font-medium hover:opacity-95 hover:scale-105 active:scale-95 transition-all duration-500 shadow-lg hover:shadow-xl"
        >
          Learn More
          <ArrowUpRight className="ml-2 h-5 w-5" />
        </Link>
      </motion.div>
    </div>
  );
};

export default AboutUs; 
