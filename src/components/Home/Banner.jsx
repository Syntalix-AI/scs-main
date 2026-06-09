'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { MdOutlineMail, MdCall, MdWhatsapp } from 'react-icons/md';
import { RiGlobalLine } from 'react-icons/ri';
import L1 from '/assets/Banner/bgg.svg';

const Reach = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });

  return (
    <section className="px-4 py-6 lg:px-8 lg:py-20 max-w-full md:max-w-[90%] mx-auto" ref={sectionRef}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.4 }}
        className="relative isolate overflow-hidden rounded-2xl bg-custom-gradient shadow-xl shadow-gray-400"
      >
        <Image src={L1} alt="Contact Syntalix Consultancy Services banner background" className="absolute top-0" />

        <div className="relative isolate overflow-hidden py-12 px-4 sm:px-24">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center text-base font-semibold leading-7 uppercase bg-white rounded-xl w-fit px-4 py-1 text-black lg:text-left"
          >
            Get in touch
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl mt-3 font-cabr text-white md:text-6xl max-w-md font-semibold"
          >
            How Can You <span className="text-primary-2"> Reach Us</span>?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="my-auto mt-3 max-w-2xl text-base text-gray-300 md:text-lg"
          >
            If you need to get in touch, there are several ways to contact us.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col md:flex-row w-full gap-y-4 justify-between mt-8 text-lg"
          >
            {/* Email Link */}
            <Link href="mailto:syntalixconsultancy@gmail.com" className="text-white flex gap-2 items-center hover:text-gray-200 transition-colors">
              <MdOutlineMail className="text-yellow-500 w-7 h-7" />
              syntalixconsultancy@gmail.com
            </Link>

            {/* Phone Link - Updated Number */}
            <Link href="tel:+919259750107" target="_blank" className="text-white flex gap-2 items-center hover:text-gray-200 transition-colors">
              <MdCall className="text-blue-600 w-7 h-7" />
              +91 9259750107
            </Link>

            {/* WhatsApp Link - Updated Number & Functionality */}
            <Link
              href="https://wa.me/919259750107"
              target="_blank"
              className="text-white flex gap-2 items-center hover:text-gray-200 transition-colors"
            >
              <MdWhatsapp className="text-green-500 w-7 h-7" />
              +91 9259750107
            </Link>

            {/* Website Link */}
            <Link href="/" className="text-white flex gap-2 items-center hover:text-gray-200 transition-colors">
              <RiGlobalLine className="text-purple-500 w-7 h-7" />
              syntalixconsultancy.in
            </Link>
          </motion.div>

          <motion.ul
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="mt-8 text-gray-300 list-disc ml-4 text-sm md:text-base"
          >
            <li>Submit your query and state your requirements.</li>
            <li>Receive a call back from our experts as per your query to help for your need.</li>
          </motion.ul>
        </div>
      </motion.div>
    </section>
  );
};

export default Reach;
