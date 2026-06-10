"use client";

import Link from "next/link";
import { FaLinkedin, FaFacebook, FaWhatsapp, FaGithub } from "react-icons/fa";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Blog", href: "/blog" },
  { name: "Careers", href: "/careers" },
  { name: "Contact", href: "/contact" },
];

const serviceLinks = [
  { name: "AI & ML Infrastructure", href: "/services/ai-ml-infrastructure" },
  { name: "LLM Engineering", href: "/services/llm-engineering" },
  { name: "Agentic AI Systems", href: "/services/agentic-systems" },
  { name: "Web & Mobile Apps", href: "/services/web-mobile-development" },
];

const socialLinks = [
  { name: "LinkedIn", href: "https://www.linkedin.com/company/syntalix/", icon: FaLinkedin },
  { name: "Facebook", href: "https://www.facebook.com/syntalix/", icon: FaFacebook },
  { name: "GitHub", href: "https://github.com/Syntalix-AI", icon: FaGithub },
  { name: "WhatsApp", href: "https://wa.me/919259750107", icon: FaWhatsapp },
];

export function Foot() {
  return (
    <footer className="relative bg-gray-950 text-white overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-40%] left-[-15%] w-[50%] h-[70%] bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-40%] right-[-15%] w-[50%] h-[70%] bg-secondary/5 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Main Footer */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:pr-8">
            <h3 className="text-2xl font-bold mb-4 syntalix-heading">
              <span className="gradient-text">Syntalix</span>
            </h3>
            <p className="text-gray-400 leading-relaxed text-sm mb-6">
              Empowering businesses with AI-driven strategies, custom LLM engineering, and enterprise-grade software solutions.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-gray-800/80 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110"
                  aria-label={social.name}
                >
                  <social.icon className="text-lg" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base font-semibold mb-6 text-white uppercase tracking-wider text-sm">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-primary transition-colors duration-200 text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-gray-600 group-hover:bg-primary transition-colors" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-base font-semibold mb-6 text-white uppercase tracking-wider text-sm">Services</h3>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-primary transition-colors duration-200 text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-gray-600 group-hover:bg-primary transition-colors" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-base font-semibold mb-6 text-white uppercase tracking-wider text-sm">Contact</h3>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-primary mt-1.5 shrink-0" />
                <a href="mailto:syntalix.consultancy@gmail.com" className="hover:text-primary transition-colors">
                  syntalix.consultancy@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-secondary mt-1.5 shrink-0" />
                <a href="tel:+919259750107" className="hover:text-primary transition-colors">
                  +91 9259750107
                </a>
              </li>
              <li className="flex items-start gap-3 pt-3 border-t border-gray-800">
                <span className="w-2 h-2 rounded-full bg-accent mt-1.5 shrink-0" />
                <span className="leading-relaxed text-xs text-gray-500">
                  <strong className="text-gray-300">Syntalix LLP</strong><br />
                  A Registered LLP in India<br />
                  LLPIN: ACR-6280<br />
                  Serving Clients Globally
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Syntalix LLP. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <Link href="/contact" className="hover:text-primary transition-colors">Contact</Link>
            <Link href="/careers" className="hover:text-primary transition-colors">Careers</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
