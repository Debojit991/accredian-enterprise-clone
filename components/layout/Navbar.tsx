"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ShieldCheck } from "lucide-react";

/**
 * Interface defining navigation link structure
 */
export interface NavRoute {
  label: string;
  href: string;
}

/**
 * Exact reference links for Accredian Enterprise landing page
 */
const NAV_LINKS: NavRoute[] = [
  { label: "Home", href: "#hero" },
  { label: "Stats", href: "#metrics" },
  { label: "Clients", href: "#partners" },
  { label: "Accredian Edge", href: "#edge" },
  { label: "CAT", href: "#cat" },
  { label: "How It Works", href: "#expertise" },
  { label: "FAQs", href: "#contact" },
  { label: "Testimonials", href: "#testimonials" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm transition-all duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Brand Logo & Authority Badge */}
          <Link 
            href="/" 
            className="flex items-center gap-2 group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0055FF] rounded-xl p-1"
            aria-label="Accredian Enterprise Home"
            onClick={closeMenu}
          >
            <div className="w-9 h-9 rounded-lg bg-[#0055FF] p-0.5 flex items-center justify-center shadow-md group-hover:scale-105 transition-transform duration-300">
              <ShieldCheck className="w-5 h-5 text-white" aria-hidden="true" />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-lg sm:text-xl tracking-tight text-slate-900 font-heading">
                ACCREDIAN <span className="text-[#0055FF]">ENTERPRISE</span>
              </span>
              <span className="text-[9px] uppercase tracking-widest text-slate-500 font-mono -mt-1">
                Capability Architecture
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8" aria-label="Main Navigation">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-xs xl:text-sm font-semibold text-slate-700 hover:text-[#0055FF] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0055FF] rounded-md px-2 py-1 transition-colors duration-200 cursor-pointer font-sans"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:flex items-center">
            <Link
              href="#contact"
              className="px-5 py-2.5 rounded-lg bg-[#0055FF] hover:bg-[#0044CC] text-white text-xs sm:text-sm font-semibold shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#0055FF]"
            >
              Enquire Now
            </Link>
          </div>

          {/* Mobile Hamburger Toggle Button */}
          <div className="flex lg:hidden items-center">
            <button
              onClick={toggleMenu}
              aria-label="Toggle navigation menu"
              className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-[#0055FF] transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Animated Dropdown Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="lg:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-3 shadow-lg"
          >
            <div className="flex flex-col space-y-2">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={closeMenu}
                  className="px-3 py-2.5 rounded-lg text-sm font-semibold text-slate-700 hover:text-[#0055FF] hover:bg-slate-50 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="pt-2">
              <Link
                href="#contact"
                onClick={closeMenu}
                className="w-full inline-block text-center px-5 py-3 rounded-lg bg-[#0055FF] hover:bg-[#0044CC] text-white text-sm font-semibold shadow-md transition-all"
              >
                Enquire Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
