"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles, ShieldCheck, PlayCircle, Award, TrendingUp, Users } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#070A12] py-20 lg:py-28">
      {/* Ambient Framer Motion Background Gradient Orbs */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: [0.3, 0.5, 0.3], scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-[#0055FF]/25 via-[#38BDF8]/15 to-transparent rounded-full blur-[120px] pointer-events-none"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-[#0055FF]/15 rounded-full blur-[100px] pointer-events-none"
      />

      {/* Subtle Background Grid Pattern */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          
          {/* Authority Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-white/10 text-xs font-semibold uppercase tracking-wider text-[#38BDF8] mb-8 shadow-sm"
          >
            <Sparkles className="w-4 h-4 text-[#38BDF8] animate-pulse" />
            <span>Enterprise Workforce Intelligence</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8]" />
            <span className="text-slate-300">Trusted by Fortune 500 Leaders</span>
          </motion.div>

          {/* Exact Required Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white font-heading leading-[1.15]"
          >
            Future-Proof Your Enterprise:{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-[#38BDF8]">
              Architecting High-Impact Talent
            </span>{" "}
            in AI & Data Leadership
          </motion.h1>

          {/* Enterprise Subheadline (Manually Refined Copy) */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="mt-6 text-lg sm:text-xl text-slate-300 font-sans leading-relaxed max-w-3xl"
          >
            Empower your executive, technical, and product teams with enterprise-grade AI, data science, and strategic leadership masteries. Drive scalable workforce capability using custom-engineered curricula designed for maximum business impact.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
          >
            {/* Primary CTA */}
            <Link
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-[#0055FF] hover:bg-[#0044CC] text-white font-semibold text-base shadow-[0_0_30px_rgba(0,85,255,0.4)] hover:shadow-[0_0_40px_rgba(0,85,255,0.6)] transition-all duration-300 group cursor-pointer"
            >
              <span>Book Enterprise Demo</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>

            {/* Secondary Outlined CTA */}
            <Link
              href="#capabilities"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl glass-card border border-white/20 hover:border-[#38BDF8]/60 text-slate-200 hover:text-white font-semibold text-base hover:bg-white/5 transition-all duration-300 cursor-pointer"
            >
              <PlayCircle className="w-5 h-5 text-[#38BDF8]" />
              <span>Explore Curricula</span>
            </Link>
          </motion.div>

          {/* Key Enterprise Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            className="mt-12 flex flex-wrap items-center justify-center gap-8 text-xs font-medium text-slate-400 border-t border-white/10 pt-8"
          >
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#38BDF8]" />
              <span>SOC2 Type II Certified Security</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-[#38BDF8]" />
              <span>Top Academic Institution Accreditation</span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-[#38BDF8]" />
              <span>3.5x Average Enterprise ROI</span>
            </div>
          </motion.div>
        </div>

        {/* Floating Glassmorphism Platform Mockup Preview */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          className="mt-16 lg:mt-20 relative max-w-5xl mx-auto"
        >
          <div className="glass-card p-4 sm:p-6 rounded-2xl border border-white/15 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)] relative group">
            {/* Header bar mock */}
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/80" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <span className="w-3 h-3 rounded-full bg-green-500/80" />
                <span className="ml-2 text-xs font-mono text-slate-400">enterprise.accredian.com/dashboard/analytics</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-[#38BDF8] bg-[#0055FF]/20 px-3 py-1 rounded-full">
                <Users className="w-3.5 h-3.5" />
                <span>Live Capability Metrics</span>
              </div>
            </div>

            {/* Dashboard Content Grid Mock */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-[#0B132B]/80 p-5 rounded-xl border border-white/10">
                <p className="text-xs text-slate-400 font-medium">Enterprise Learners Active</p>
                <p className="text-2xl font-bold text-white mt-1 font-heading">52,400+</p>
                <span className="inline-block mt-2 text-xs text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">+18.4% this quarter</span>
              </div>
              <div className="bg-[#0B132B]/80 p-5 rounded-xl border border-white/10">
                <p className="text-xs text-slate-400 font-medium">AI & Data Competency Score</p>
                <p className="text-2xl font-bold text-[#38BDF8] mt-1 font-heading">94.8%</p>
                <span className="inline-block mt-2 text-xs text-[#38BDF8] bg-[#0055FF]/10 px-2 py-0.5 rounded">Top 5% Industry Benchmark</span>
              </div>
              <div className="bg-[#0B132B]/80 p-5 rounded-xl border border-white/10">
                <p className="text-xs text-slate-400 font-medium">Executive Program Completion</p>
                <p className="text-2xl font-bold text-white mt-1 font-heading">96.2%</p>
                <span className="inline-block mt-2 text-xs text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">Guaranteed Outcomes</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
