"use client";

import { motion } from "framer-motion";
import { Sliders, Cpu, Layers, Clock, UserCheck, Rocket, TrendingUp } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";

export interface EdgePillar {
  step: number;
  title: string;
  description: string;
  icon: React.ElementType;
}

const EDGE_PILLARS: EdgePillar[] = [
  {
    step: 1,
    title: "Tailored Solutions",
    description: "Customized learning pathways mapped directly to your organization's tech stack and growth goals.",
    icon: Sliders,
  },
  {
    step: 2,
    title: "Innovative Framework",
    description: "Outcome-driven methodology integrating cutting-edge enterprise AI and data science practices.",
    icon: Cpu,
  },
  {
    step: 3,
    title: "Diverse Offerings",
    description: "Comprehensive executive, technical, and domain-specific upskilling modules.",
    icon: Layers,
  },
  {
    step: 4,
    title: "Flexible Delivery",
    description: "Hybrid, live interactive, and self-paced execution tailored for global enterprise schedules.",
    icon: Clock,
  },
  {
    step: 5,
    title: "Expert Guidance",
    description: "Mentorship led by seasoned industry practitioners and C-suite technical advisors.",
    icon: UserCheck,
  },
  {
    step: 6,
    title: "Advanced Technology",
    description: "Hands-on cloud labs, sandbox environments, and proprietary evaluation dashboards.",
    icon: Rocket,
  },
  {
    step: 7,
    title: "Proven Impact",
    description: "Measurable ROI with real-time progress tracking, skill verification, and business metrics.",
    icon: TrendingUp,
  },
];

export default function AccredianEdge() {
  return (
    <section id="edge" className="relative py-24 bg-gradient-to-b from-white via-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Exact Required Steering Headline */}
        <SectionHeading
          badge="THE ACCREDIAN DIFFERENCE"
          title="The Accredian Edge"
          subtitle="A 7-pillar strategic upskilling architecture engineered for high-performance enterprise teams."
          className="mb-16"
        />

        {/* 7-Step Horizontal / Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {EDGE_PILLARS.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className={index === 6 ? "md:col-span-2 lg:col-span-2" : ""}
              >
                <GlassCard hoverEffect className="p-6 bg-white border-slate-200/80 space-y-4 h-full flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-full bg-[#0055FF] text-white flex items-center justify-center font-bold text-sm shadow-md">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-mono font-bold text-[#0055FF] bg-blue-50 px-2.5 py-1 rounded-full border border-blue-100">
                        Pillar 0{pillar.step}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 font-heading mb-2">
                      {pillar.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed font-sans">
                      {pillar.description}
                    </p>
                  </div>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
