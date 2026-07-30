"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { CheckCircle2, ArrowRight, Award, ShieldCheck, Users } from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";

const HERO_CHECKMARKS = [
  "Tailored Solutions",
  "Industry Insights",
  "Expert Guidance",
];

export default function Hero() {
  return (
    <section id="hero" className="relative pt-28 sm:pt-36 pb-20 sm:pb-24 bg-gradient-to-b from-[#F8FAFC] via-white to-white overflow-hidden">
      {/* Subtle Background Accent Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#0055FF]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headlines & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            {/* Category Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0055FF]/10 border border-[#0055FF]/20 text-[#0055FF] text-xs uppercase tracking-widest font-mono font-semibold">
              <Award className="w-4 h-4" />
              <span>ENTERPRISE WORKFORCE TRANSFORMATION</span>
            </div>

            {/* Exact Required Steering Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 font-heading tracking-tight leading-[1.15]">
              Next-Gen Expertise For Your Enterprise
            </h1>

            {/* Exact Required Subheadline */}
            <p className="text-lg sm:text-xl text-slate-600 font-sans leading-relaxed max-w-2xl">
              Cultivate high-performance teams through expert learning.
            </p>

            {/* 3 Reference Checkmarks */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-2">
              {HERO_CHECKMARKS.map((item) => (
                <div key={item} className="flex items-center gap-2 text-slate-800 text-sm font-semibold font-sans">
                  <CheckCircle2 className="w-5 h-5 text-[#0055FF] flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Single Blue Enquire Now CTA */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                href="#contact"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-lg bg-[#0055FF] hover:bg-[#0044CC] text-white font-semibold text-base shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#0055FF]"
              >
                <span>Enquire Now</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>

          {/* Right Column: Corporate Visual Preview */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-5"
          >
            <GlassCard className="p-8 border-slate-200/80 shadow-md bg-white space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#0055FF]/10 text-[#0055FF] flex items-center justify-center">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900 font-heading">Accredian Enterprise</h3>
                    <p className="text-xs text-slate-500 font-mono">Capability Matrix v4.2</p>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-semibold">
                  Active
                </span>
              </div>

              <div className="space-y-4">
                <div className="p-4 rounded-lg bg-slate-50 border border-slate-100 space-y-2">
                  <div className="flex justify-between text-xs font-semibold text-slate-700">
                    <span>Leadership AI & Data Mastery</span>
                    <span className="text-[#0055FF]">98.4%</span>
                  </div>
                  <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                    <div className="bg-[#0055FF] h-full rounded-full w-[98.4%]" />
                  </div>
                </div>

                <div className="p-4 rounded-lg bg-slate-50 border border-slate-100 space-y-2">
                  <div className="flex justify-between text-xs font-semibold text-slate-700">
                    <span>Organizational Upskilling Velocity</span>
                    <span className="text-[#0055FF]">4.2x</span>
                  </div>
                  <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                    <div className="bg-[#0055FF] h-full rounded-full w-[85%]" />
                  </div>
                </div>
              </div>

              <div className="pt-2 flex items-center justify-between text-xs text-slate-500 font-mono">
                <span className="flex items-center gap-1">
                  <Users className="w-4 h-4 text-[#0055FF]" /> 10,000+ Trained
                </span>
                <span>Fortune 500 Ready</span>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
