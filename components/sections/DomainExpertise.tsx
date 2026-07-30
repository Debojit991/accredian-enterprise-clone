"use client";

import { motion } from "framer-motion";
import { Sparkles, Bot, Award, LineChart, ShieldCheck, Globe, CreditCard } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";

export interface DomainItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ElementType;
}

const DOMAINS: DomainItem[] = [
  {
    id: "product-hub",
    title: "Product & Innovation Hub",
    subtitle: "AI-First Lifecycles",
    description: "Accelerate product strategy, agile scaling, and customer-centric feature delivery for digital enterprise platforms.",
    icon: Sparkles,
  },
  {
    id: "gen-ai",
    title: "Gen-AI Mastery",
    subtitle: "LLMs & Agentic Workflows",
    description: "Equip engineering and product teams to design, fine-tune, and deploy secure RAG pipelines and neural models.",
    icon: Bot,
  },
  {
    id: "leadership",
    title: "Leadership Elevation",
    subtitle: "CXO Strategic Vision",
    description: "Empower directors and executive leaders to govern AI integration, mitigate risk, and capture business value.",
    icon: Award,
  },
  {
    id: "tech-data",
    title: "Tech & Data Insights",
    subtitle: "Predictive Analytics",
    description: "Transform raw organizational data streams into strategic foresight with advanced MLOps and cloud data lakes.",
    icon: LineChart,
  },
  {
    id: "operations",
    title: "Operations Excellence",
    subtitle: "Automated Workflows",
    description: "Streamline enterprise processes and internal ops with intelligent automation and lean digital practices.",
    icon: ShieldCheck,
  },
  {
    id: "digital-enterprise",
    title: "Digital Enterprise",
    subtitle: "Cloud & Security Architecture",
    description: "Modernize legacy systems, enforce cloud governance, and architect resilient digital infrastructures.",
    icon: Globe,
  },
  {
    id: "fintech-lab",
    title: "Fintech Innovation Lab",
    subtitle: "Financial Intelligence",
    description: "Master modern financial technologies, risk modeling, and automated compliance for global financial ecosystems.",
    icon: CreditCard,
  },
];

export default function DomainExpertise() {
  return (
    <section id="expertise" className="relative py-24 bg-slate-50 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Exact Required Steering Headline */}
        <SectionHeading
          badge="CAPABILITY DOMAINS"
          title="Our Domain Expertise"
          subtitle="Specialized corporate verticals designed in alignment with enterprise industry standards."
          className="mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {DOMAINS.map((domain, index) => {
            const Icon = domain.icon;
            return (
              <motion.div
                key={domain.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className={index === 6 ? "md:col-span-2 lg:col-span-3 text-center" : ""}
              >
                <GlassCard hoverEffect className="p-8 bg-white border-slate-200/80 text-center space-y-4 h-full flex flex-col items-center justify-center">
                  <div className="w-14 h-14 rounded-2xl bg-[#0055FF]/10 text-[#0055FF] flex items-center justify-center shadow-xs">
                    <Icon className="w-7 h-7" />
                  </div>
                  <div>
                    <span className="text-xs font-mono uppercase tracking-wider text-[#0055FF] font-semibold block mb-1">
                      {domain.subtitle}
                    </span>
                    <h3 className="text-xl font-bold text-slate-900 font-heading">
                      {domain.title}
                    </h3>
                  </div>
                  <p className="text-sm text-slate-600 font-sans leading-relaxed max-w-md mx-auto">
                    {domain.description}
                  </p>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
