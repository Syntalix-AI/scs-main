import { motion } from "framer-motion";
import { TiArrowDown } from "react-icons/ti";
import { FaFacebook, FaXTwitter, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa6';
import Link from 'next/link';

const social = [
    {
        title: "Facebook",
        href: "https://www.facebook.com/achintyasolutions",
        svg: <FaFacebook className='w-6 h-6' />
    },
    {
        title: "Twitter",
        href: "https://twitter.com/AchintyaCompany",
        svg: <FaXTwitter className='w-6 h-6' />
    },
    {
        title: "Instagram",
        href: "https://www.instagram.com/achintyasolutions/",
        svg: <FaInstagram className='w-6 h-6' />
    },
    {
        title: "Linkeden",
        href: "https://www.linkedin.com/company/achintyasolutions/",
        svg: <FaLinkedin className='w-6 h-6' />
    },
    {
        title: "Youtube",
        href: "https://www.youtube.com/@achintyasolutions-services",
        svg: <FaYoutube className='w-6 h-6' />
    },
];

const Hero = () => {
    return (
        <section className="relative pt-28 pb-16 md:pt-36 md:pb-20 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-purple-50 to-white"></div>
            <div className="container mx-auto px-4 relative">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center max-w-3xl mx-auto"
                >
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">
                        Get in Touch
                    </h1>
                    <p className="text-lg text-gray-600 mb-8">
                        Have a question or want to discuss your project? We&apos;re here to help. 
                        Fill out the form below and we&apos;ll get back to you as soon as possible.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;