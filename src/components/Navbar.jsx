"use client";

import { Navbar } from "flowbite-react";
import Image from "next/image";
import { useState } from "react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { HiMenuAlt3, HiX } from "react-icons/hi";



const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 transition-all"
    >
      {theme === "dark" ? (
        <svg
          className="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h1a1 1 0 100 2h-1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
            fillRule="evenodd"
            clipRule="evenodd"
          ></path>
        </svg>
      ) : (
        <svg
          className="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
        </svg>
      )}
    </button>
  );
};

export function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const scrollToSection = (id) => {
    setIsOpen(false); // Close menu on click
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleContactClick = () => {
    const contactSection = document.getElementById("contact-form");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const menuItems = [
    { name: "Home", action: () => window.location.href = "/" },
    { name: "About Us", action: () => scrollToSection("about") },
    { name: "Services", action: () => scrollToSection("services") },
    { name: "Pricing", action: () => window.location.href = "#" },
    { name: "Careers", action: () => window.location.href = "/careers" },
  ];

  return (
    <>
      <nav className="absolute w-full z-50 top-0 left-0 py-4 pointer-events-none">
        <div className="flex items-center justify-between mx-auto w-full px-4 md:px-12">
          {/* Left Side: Hamburger + Logo */}
          <div className="flex items-center gap-3 pointer-events-auto">
            {/* Hamburger Button */}
            <button
              onClick={toggleMenu}
              className="p-2 rounded-lg text-foreground hover:bg-gray-100/80 dark:hover:bg-gray-800/80 transition-colors backdrop-blur-sm"
            >
              <HiMenuAlt3 className="w-8 h-8" />
            </button>

            {/* Logo */}
            <Link href="/" className="flex items-center gap-3">
              <div className="relative w-10 h-10 sm:w-12 sm:h-12">
                <Image
                  src="/syntalix_logo.svg"
                  alt="Syntalix Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <span className="self-center whitespace-nowrap text-base sm:text-lg font-bold text-foreground tracking-tight">
                Syntalix
              </span>
            </Link>
          </div>

          {/* Right Side: Theme Toggle, Contact */}
          <div className="flex items-center gap-4 pointer-events-auto">
            <ThemeToggle />
            <button
              onClick={handleContactClick}
              className="relative hidden md:inline-flex h-10 overflow-hidden rounded-full p-[2px] hover:scale-105 transition-transform duration-300 shadow-lg shadow-primary/25 group"
            >
              {/* Spinning Black/Gray Gradient Rim */}
              <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#ffffff_0%,#9ca3af_50%,#ffffff_100%)] dark:bg-[conic-gradient(from_90deg_at_50%_50%,#000000_0%,#737373_50%,#000000_100%)]" />
              
              {/* Button Inner Content */}
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-indigo-600 px-6 text-sm font-bold text-white backdrop-blur-3xl">
                Contact Us
              </span>
            </button>
          </div>
        </div>
      </nav>

      {/* Side Menu (Drawer) */}
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
                <span className="text-xl font-bold text-foreground">Menu</span>
                <button
                  onClick={toggleMenu}
                  className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                >
                  <HiX className="w-6 h-6 text-foreground" />
                </button>
              </div>

              <div className="flex flex-col gap-6">
                {menuItems.map((item, index) => (
                  <button
                    key={index}
                    onClick={item.action}
                    className="text-left text-lg font-medium text-foreground/80 hover:text-primary hover:pl-2 transition-all duration-300"
                  >
                    {item.name}
                  </button>
                ))}
              </div>

              <div className="mt-auto pt-8 border-t border-gray-200 dark:border-gray-800">
                <button
                  onClick={() => {
                    handleContactClick();
                    setIsOpen(false);
                  }}
                  className="w-full py-3 rounded-lg bg-primary text-white font-bold shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all duration-300"
                >
                  Contact Us
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}