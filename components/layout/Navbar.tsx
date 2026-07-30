"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ShieldCheck, ArrowRight } from "lucide-react";

/**
 * Route definition interface for data-driven navigation links
 */
export interface NavRoute {
  label: string;
  href: string;
}

/**
 * Navigation items configuration
 */
const NAV_LINKS: NavRoute[] = [
  { label: "Solutions", href: "#capabilities" },
  { label: "Industries", href: "#partners" },
  { label: "Case Studies", href: "#testimonials" },
  { label: "Resources", href: "#metrics" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-[#070A12]/85 border-b border-white/10 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo & Authority Badge */}
          <Link 
            href="/" 
            className="flex items-center gap-2 group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#38BDF8] rounded-xl p-1"
            aria-label="Accredian Enterprise Home"
            onClick={closeMenu}
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0055FF] to-[#38BDF8] p-0.5 flex items-center justify-center shadow-[0_0_15px_rgba(0,85,255,0.4)] group-hover:scale-105 transition-transform duration-300">
              <div className="w-full h-full bg-[#070A12] rounded-[10px] flex items-center justify-center">
                <ShieldCheck className="w-5 h-5 text-[#38BDF8]" aria-hidden="true" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-xl tracking-tight text-white font-heading">
                ACCREDIAN <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38BDF8] to-[#0055FF]">ENTERPRISE</span>
              </span>
              <span className="text-[10px] uppercase tracking-widest text-slate-400 font-mono -mt-1">
                Workforce Transformation
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main Navigation">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-slate-300 hover:text-[#38BDF8] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#38BDF8] rounded-md px-2 py-1 transition-colors duration-200 cursor-pointer"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Primary Call to Action */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#0055FF] hover:bg-[#0044CC] text-white text-sm font-semibold shadow-[0_0_20px_rgba(0,85,255,0.35)] hover:shadow-[0_0_25px_rgba(0,85,255,0.5)] transition-all duration-300 cursor-pointer group"
            >
              <span>Book Enterprise Demo</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              type="button"
              className="p-2.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/5 focus:outline-none cursor-pointer"
              aria-expanded={isOpen}
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-6 h-6 text-[#38BDF8]" /> : <Menu className="w-6 h-6" />}
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
            className="md:hidden border-t border-white/10 bg-[#070A12]/95 backdrop-blur-2xl overflow-hidden"
          >
            <div className="max-w-7xl mx-auto px-4 py-6 space-y-4 flex flex-col">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={closeMenu}
                  className="px-3 py-2.5 rounded-lg text-base font-medium text-slate-200 hover:text-white hover:bg-white/5 transition-colors cursor-pointer"
                >
                  {link.label}
                </Link>
              ))}

              <div className="pt-4 border-t border-white/10">
                <Link
                  href="#contact"
                  onClick={closeMenu}
                  className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-[#0055FF] text-white font-semibold text-center shadow-[0_0_20px_rgba(0,85,255,0.4)] cursor-pointer"
                >
                  <span>Book Enterprise Demo</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
