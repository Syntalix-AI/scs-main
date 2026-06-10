"use client";

import Image from "next/image";
import { useState, useCallback } from "react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 rounded-xl bg-gray-100/80 dark:bg-slate-800/80 text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all backdrop-blur-sm"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path
            d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h1a1 1 0 100 2h-1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </svg>
      ) : (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
        </svg>
      )}
    </button>
  );
};

const menuItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Blog", href: "/blog" },
  { name: "Careers", href: "/careers" },
  { name: "Contact", href: "/contact" },
];

export function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleNavClick = useCallback((e, item) => {
    // If we're on the homepage and the item has a section ID, smooth scroll
    if (isHomePage && item.homeSectionId) {
      e.preventDefault();
      setIsOpen(false);
      const element = document.getElementById(item.homeSectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      setIsOpen(false);
    }
  }, [isHomePage]);

  return (
    <>
      <nav className="fixed w-full z-50 top-0 left-0 pointer-events-none">
        <div className="glass pointer-events-auto border-b border-white/10 dark:border-slate-800/50">
          <div className="flex items-center justify-between mx-auto w-full px-4 md:px-8 h-16">
            {/* Left Side: Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-9 h-9 sm:w-10 sm:h-10">
                <Image
                  src="/syntalix_logo.webp"
                  alt="Syntalix Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <span className="self-center whitespace-nowrap text-base sm:text-lg font-bold text-foreground tracking-tight group-hover:text-primary transition-colors">
                Syntalix
              </span>
            </Link>

            {/* Center: Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={isHomePage && item.homeSectionId ? `/#${item.homeSectionId}` : item.href}
                  onClick={(e) => handleNavClick(e, item)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    pathname === item.href
                      ? "text-primary bg-primary/5"
                      : "text-muted-foreground hover:text-foreground hover:bg-gray-100/50 dark:hover:bg-slate-800/50"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Right Side: Theme Toggle, Contact CTA, Mobile Menu */}
            <div className="flex items-center gap-3">
              <ThemeToggle />
              <Link
                href="/contact"
                className="relative hidden md:inline-flex h-10 overflow-hidden rounded-full p-[2px] hover:scale-105 transition-transform duration-300 shadow-lg shadow-primary/20 group"
              >
                <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#4F46E5_0%,#7C3AED_33%,#06B6D4_67%,#4F46E5_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-background px-6 text-sm font-semibold text-foreground backdrop-blur-3xl group-hover:text-primary transition-colors">
                  Get in Touch
                </span>
              </Link>
              <button
                onClick={toggleMenu}
                className="lg:hidden p-2 rounded-lg text-foreground hover:bg-gray-100/80 dark:hover:bg-slate-800/80 transition-colors"
                aria-label="Toggle menu"
              >
                <HiMenuAlt3 className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Spacer to prevent content from hiding behind fixed nav */}
      <div className="h-16" />

      {/* Mobile Side Menu (Drawer) */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleMenu}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[60]"
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 h-full w-[300px] bg-white dark:bg-slate-900 shadow-2xl z-[70] p-6 flex flex-col"
            >
              <div className="flex justify-between items-center mb-8">
                <Link href="/" onClick={() => setIsOpen(false)} className="flex items-center gap-2">
                  <div className="relative w-8 h-8">
                    <Image src="/syntalix_logo.webp" alt="Syntalix" fill className="object-contain" />
                  </div>
                  <span className="text-lg font-bold text-foreground">Syntalix</span>
                </Link>
                <button
                  onClick={toggleMenu}
                  className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  aria-label="Close menu"
                >
                  <HiX className="w-5 h-5 text-foreground" />
                </button>
              </div>

              <div className="flex flex-col gap-1">
                {menuItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 ${
                      pathname === item.href
                        ? "text-primary bg-primary/5"
                        : "text-foreground/80 hover:text-primary hover:bg-gray-50 dark:hover:bg-slate-800"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              <div className="mt-auto pt-6 border-t border-gray-200 dark:border-gray-800">
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="block w-full py-3 rounded-xl gradient-primary text-center text-white font-semibold shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all duration-300"
                >
                  Get in Touch
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}