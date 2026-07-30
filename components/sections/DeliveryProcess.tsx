"use client";

import { motion } from "framer-motion";
import { Search, MapPin, Sliders } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";

export interface DeliveryStep {
  step: number;
  title: string;
  description: string;
  icon: React.ElementType;
}

const DELIVERY_STEPS: DeliveryStep[] = [
  {
    step: 1,
    title: "Skill Gap Analysis",
    description: "Assess team skill gaps and developmental needs through empirical diagnostic tools and leadership consultations.",
    icon: Search,
  },
  {
    step: 2,
    title: "Customized Training Plan",
    description: "Create a tailored roadmap addressing specific organizational goals, technical stacks, and capability metrics.",
    icon: MapPin,
  },
  {
    step: 3,
    title: "Flexible Program Delivery",
    description: "Deliver adaptable programs aligned with industry and organizational needs through live, hybrid, or self-paced modalities.",
    icon: Sliders,
  },
];

export default function DeliveryProcess() {
  return (
    <section id="delivery" className="relative py-24 bg-[#F8FAFC] border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Exact Required Steering Headline */}
        <SectionHeading
          badge="OUR METHODOLOGY"
          title="How We Deliver Results That Matter?"
          subtitle="A Structured Three-Step Approach to Skill Development"
          className="mb-16"
        />

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {DELIVERY_STEPS.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <GlassCard hoverEffect className="p-8 bg-white border-slate-200/80 space-y-6 h-full flex flex-col justify-between">
                  <div className="space-y-4">
                    
                    {/* Step Icon & Number Badge */}
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-xl bg-[#0055FF]/10 text-[#0055FF] flex items-center justify-center shadow-xs">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-mono font-bold text-[#0055FF] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                        Step 0{item.step}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 font-heading">
                      {item.title}
                    </h3>

                    <p className="text-sm text-slate-600 font-sans leading-relaxed">
                      {item.description}
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
