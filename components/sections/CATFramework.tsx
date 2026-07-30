"use client";

import { motion } from "framer-motion";
import { BookOpen, Layers, Wrench, ArrowRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";

export interface CATStep {
  letter: string;
  name: string;
  subtitle: string;
  description: string;
  icon: React.ElementType;
}

const CAT_STEPS: CATStep[] = [
  {
    letter: "C",
    name: "Concept",
    subtitle: "Foundational Mastery & Theory",
    description: "Deep dive into core enterprise frameworks, architectural principles, and theoretical foundations taught by industry authority leaders.",
    icon: BookOpen,
  },
  {
    letter: "A",
    name: "Application",
    subtitle: "Real-World Case Studies",
    description: "Translate theoretical knowledge into practice through live business simulations, capstone projects, and contextual problem-solving.",
    icon: Layers,
  },
  {
    letter: "T",
    name: "Tools",
    subtitle: "Hands-On Tech Integration",
    description: "Master industry-standard software, AI LLM APIs, cloud sandbox environments, and automated workflow pipelines.",
    icon: Wrench,
  },
];

export default function CATFramework() {
  return (
    <section id="cat" className="relative py-24 bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Exact Required Steering Headline */}
        <SectionHeading
          badge="LEARNING METHODOLOGY"
          title="The CAT Framework"
          subtitle="Our proprietary 3-stage pedagogical methodology designed to guarantee rapid capability absorption and retention."
          className="mb-16"
        />

        {/* 3-Step Flex / Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {CAT_STEPS.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.letter}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                className="relative"
              >
                <GlassCard hoverEffect className="p-8 bg-white border-slate-200/80 space-y-6 h-full flex flex-col justify-between">
                  <div className="space-y-4">
                    
                    {/* Header Letter Badge & Icon */}
                    <div className="flex items-center justify-between">
                      <div className="w-14 h-14 rounded-2xl bg-[#0055FF] text-white flex items-center justify-center font-extrabold font-heading text-2xl shadow-md">
                        {step.letter}
                      </div>
                      <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0055FF] flex items-center justify-center">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    {/* Step Title & Subtitle */}
                    <div>
                      <span className="text-xs font-mono uppercase tracking-wider text-[#0055FF] font-semibold block">
                        Phase 0{index + 1}: {step.subtitle}
                      </span>
                      <h3 className="text-2xl font-extrabold text-slate-900 font-heading mt-1">
                        {step.name}
                      </h3>
                    </div>

                    <p className="text-sm text-slate-600 font-sans leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {index < 2 && (
                    <div className="hidden md:block absolute -right-5 top-1/2 -translate-y-1/2 z-20 text-[#0055FF]">
                      <ArrowRight className="w-6 h-6" />
                    </div>
                  )}
                </GlassCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
