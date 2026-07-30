"use client";

import { motion } from "framer-motion";
import { Cloud, Database, Cpu, Server, Shield, Globe, Terminal, Workflow, Zap } from "lucide-react";

/**
 * Enterprise Partner Interface
 */
export interface Partner {
  id: string;
  name: string;
  tier: string;
  icon: React.ElementType;
}

/**
 * Data-driven array of enterprise partners and corporate tech giants
 */
const PARTNERS: Partner[] = [
  { id: "google-cloud", name: "Google Cloud", tier: "AI & Cloud Partner", icon: Cloud },
  { id: "aws", name: "AWS Enterprise", tier: "Cloud Infrastructure", icon: Server },
  { id: "microsoft", name: "Microsoft AI", tier: "Enterprise Solutions", icon: Terminal },
  { id: "nvidia", name: "NVIDIA AI", tier: "Compute & Hardware", icon: Cpu },
  { id: "snowflake", name: "Snowflake", tier: "Data Platform", icon: Database },
  { id: "databricks", name: "Databricks", tier: "Lakehouse Intelligence", icon: Workflow },
  { id: "ibm", name: "IBM Quantum", tier: "Enterprise Tech", icon: Shield },
  { id: "oracle", name: "Oracle Cloud", tier: "Database Systems", icon: Zap },
  { id: "salesforce", name: "Salesforce", tier: "Enterprise CRM", icon: Globe },
];

// Duplicate partner array to ensure a 100% seamless, non-snapping infinite marquee loop
const MARQUEE_PARTNERS = [...PARTNERS, ...PARTNERS];

export default function PartnerStrip() {
  return (
    <section id="partners" className="relative py-12 bg-[#070A12] border-y border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
        {/* Subtle Headline Above Marquee */}
        <h3 className="text-xs uppercase tracking-widest font-mono text-slate-400 font-medium">
          Trusted by Global Market Leaders & Institutional Pioneers
        </h3>
      </div>

      {/* Marquee Outer Container with Gradient Mask Edge Fades */}
      <div 
        className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]"
        role="region"
        aria-label="Enterprise Client Partners Marquee"
      >
        {/* Framer Motion Continuous Marquee Strip */}
        <motion.div
          className="flex items-center gap-12 sm:gap-16 w-max py-2"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 35, // Smooth, steady marquee scroll speed
              ease: "linear",
            },
          }}
          whileHover={{ animationPlayState: "paused" }} // Smooth pause-on-hover
        >
          {MARQUEE_PARTNERS.map((partner, index) => {
            const Icon = partner.icon;
            const isDuplicate = index >= PARTNERS.length;
            return (
              <div
                key={`${partner.id}-${index}`}
                aria-hidden={isDuplicate ? "true" : undefined}
                className="group flex items-center gap-3 px-5 py-3 rounded-xl bg-white/[0.02] border border-white/5 hover:border-[#38BDF8]/40 hover:bg-white/[0.06] transition-all duration-300 cursor-pointer select-none"
              >
                <div className="w-8 h-8 rounded-lg bg-white/5 group-hover:bg-[#0055FF]/20 flex items-center justify-center text-slate-500 group-hover:text-[#38BDF8] transition-colors duration-300">
                  <Icon className="w-4 h-4" aria-hidden="true" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-sm font-bold tracking-tight text-slate-400 group-hover:text-white font-heading transition-colors duration-300">
                    {partner.name}
                  </span>
                  <span className="text-[10px] text-slate-600 group-hover:text-slate-400 font-mono transition-colors duration-300">
                    {partner.tier}
                  </span>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
