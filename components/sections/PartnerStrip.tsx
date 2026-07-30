"use client";

import { motion } from "framer-motion";
import { Building2, ShieldCheck } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

export interface Partner {
  id: string;
  name: string;
  category: string;
}

/**
 * Exact reference client names
 */
const PARTNERS: Partner[] = [
  { id: "hcl", name: "HCL", category: "Global Tech Giant" },
  { id: "reliance", name: "Reliance", category: "Conglomerate" },
  { id: "ibm", name: "IBM", category: "Enterprise AI Leader" },
  { id: "crif", name: "CRIF", category: "Financial Intelligence" },
  { id: "adp", name: "ADP", category: "Human Capital Management" },
  { id: "bayer", name: "Bayer", category: "Life Sciences & Innovation" },
];

const MARQUEE_PARTNERS = [...PARTNERS, ...PARTNERS, ...PARTNERS];

export default function PartnerStrip() {
  return (
    <section id="partners" className="relative py-16 bg-white overflow-hidden border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Exact Required Steering Headline */}
        <SectionHeading
          badge="TRUSTED BY INDUSTRY TITANS"
          title="Our Proven Partnerships"
          className="mb-10"
        />

        <div 
          className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]"
          role="region"
          aria-label="Enterprise Client Partners Marquee"
        >
          <motion.div
            className="flex items-center gap-10 sm:gap-14 w-max py-2"
            animate={{ x: ["0%", "-33.33%"] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 25,
                ease: "linear",
              },
            }}
          >
            {MARQUEE_PARTNERS.map((partner, index) => {
              const isDuplicate = index >= PARTNERS.length;
              return (
                <div
                  key={`${partner.id}-${index}`}
                  aria-hidden={isDuplicate ? "true" : undefined}
                  className="group flex items-center gap-3 px-6 py-3.5 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-[#0055FF]/40 hover:bg-blue-50/50 transition-all duration-300 select-none cursor-pointer"
                >
                  <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-[#0055FF] shadow-xs">
                    <Building2 className="w-4 h-4" aria-hidden="true" />
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="text-base font-extrabold tracking-tight text-slate-900 font-heading">
                      {partner.name}
                    </span>
                    <span className="text-[10px] text-slate-500 font-mono">
                      {partner.category}
                    </span>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
