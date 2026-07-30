"use client";

import { motion } from "framer-motion";
import { Bot, LineChart, Layers, Target, ArrowUpRight, CheckCircle2 } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";

/**
 * Capability Interface
 * Defines data schema driving modular enterprise learning capability bento grid cards
 */
export interface Capability {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ElementType;
  tags: string[];
  metric: string;
  colSpanDesktop: string;
  featured?: boolean;
}

/**
 * Data-driven array driving the 4 enterprise capability bento cards
 */
const CAPABILITIES_DATA: Capability[] = [
  {
    id: "ai-genai",
    title: "AI & Generative AI Leadership",
    subtitle: "Custom LLMs & Neural Workflows",
    description: "Architect cutting-edge Generative AI applications, enterprise RAG pipelines, and model fine-tuning frameworks. Equip technical teams to build secure, scalable AI ecosystems.",
    icon: Bot,
    tags: ["LLMs & RAG", "Prompt Engineering", "Model Fine-Tuning", "Agentic AI"],
    metric: "4.2x Faster Deployment",
    colSpanDesktop: "lg:col-span-2 lg:row-span-2",
    featured: true,
  },
  {
    id: "data-science",
    title: "Enterprise Data Science",
    subtitle: "Predictive Intelligence & MLOps",
    description: "Transform raw organizational data into strategic foresight with advanced MLOps pipelines and automated predictive modeling.",
    icon: LineChart,
    tags: ["Predictive Analytics", "Big Data", "ML Ops", "Data Governance"],
    metric: "99.8% Model Accuracy",
    colSpanDesktop: "lg:col-span-1 lg:row-span-1",
  },
  {
    id: "product-mgmt",
    title: "Product Management & Scaling",
    subtitle: "AI-First Product Architectures",
    description: "Drive agile scaling and enterprise product lifecycles tailored for modern tech-enabled business platforms.",
    icon: Layers,
    tags: ["Product Strategy", "Agile Scaling", "Lifecycle Management", "User Analytics"],
    metric: "3x Delivery Velocity",
    colSpanDesktop: "lg:col-span-1 lg:row-span-1",
  },
  {
    id: "cxo-leadership",
    title: "CXO Executive Transformation",
    subtitle: "Digital Governance & Strategic ROI",
    description: "Prepare C-suite leaders and senior directors to navigate digital disruption, enforce AI governance, and capture enterprise value.",
    icon: Target,
    tags: ["Digital Transformation", "AI Governance", "Risk & Ethics", "Strategic ROI"],
    metric: "100% C-Suite Alignment",
    colSpanDesktop: "lg:col-span-2 lg:row-span-1",
  },
];

export default function CapabilitiesGrid() {
  return (
    <section id="capabilities" className="relative py-24 bg-[#070A12] overflow-hidden">
      {/* Background Subtle Accent Glow */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-[#0055FF]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Reusable Section Heading */}
        <SectionHeading
          badge="MODULAR LEARNING PILLARS"
          title="Modular Enterprise Upskilling: Custom-Engineered for Strategic Dominance"
          subtitle="Targeted capability verticals designed in collaboration with global industry leaders to accelerate enterprise digital transformation."
          className="mb-16"
        />

        {/* Asymmetric Bento Grid (1 Column on Mobile, 3 Columns on Desktop) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {CAPABILITIES_DATA.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                className={item.colSpanDesktop}
              >
                <GlassCard hoverEffect className="p-6 sm:p-8 flex flex-col justify-between h-full group">
                  {/* Subtle Card Background Accent Glow on Hover */}
                  <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-[#0055FF]/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  <div>
                    {/* Card Header & Icon */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0055FF]/20 to-[#38BDF8]/10 border border-white/10 group-hover:border-[#38BDF8]/40 flex items-center justify-center text-[#38BDF8] group-hover:scale-110 transition-all duration-300">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div className="flex items-center gap-1 text-xs font-semibold text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>{item.metric}</span>
                      </div>
                    </div>

                    {/* Title & Subtitle */}
                    <span className="text-xs font-mono uppercase tracking-wider text-[#38BDF8] font-semibold">
                      {item.subtitle}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white font-heading mt-1 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-[#38BDF8] transition-all">
                      {item.title}
                    </h3>
                    <p className="text-sm text-slate-300 leading-relaxed font-sans mb-6">
                      {item.description}
                    </p>
                  </div>

                  {/* Tag Chips & Interactive Link */}
                  <div className="pt-6 border-t border-white/10 flex flex-col gap-4 mt-auto">
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-slate-300 group-hover:border-[#0055FF]/40 group-hover:bg-[#0055FF]/10 group-hover:text-[#38BDF8] transition-all duration-300 font-sans font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between text-xs font-semibold text-slate-400 group-hover:text-[#38BDF8] transition-colors pt-2">
                      <span>Explore Curricula & Syllabus</span>
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                    </div>
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
