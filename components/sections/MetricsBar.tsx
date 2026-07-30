"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { Users, Award, BookOpen } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";

/**
 * EnterpriseMetric Interface
 */
export interface EnterpriseMetric {
  id: string;
  numericTarget: number;
  suffix: string;
  label: string;
  subtext: string;
  icon: React.ElementType;
}

/**
 * Data strictly matching reference requirement
 */
const METRICS_DATA: EnterpriseMetric[] = [
  {
    id: "trained",
    numericTarget: 10000,
    suffix: "+",
    label: "Professionals Trained",
    subtext: "Across Global Enterprise Clients",
    icon: Users,
  },
  {
    id: "sessions",
    numericTarget: 200,
    suffix: "+",
    label: "Sessions Delivered",
    subtext: "High-Impact Workshops & Programs",
    icon: Award,
  },
  {
    id: "learners",
    numericTarget: 5000,
    suffix: "+",
    label: "Active Learners",
    subtext: "Engaged in Skill Masterclass Pipelines",
    icon: BookOpen,
  },
];

function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.floor(latest).toLocaleString("en-US"));

  const [displayValue, setDisplayValue] = useState("0");

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, target, {
        duration: 2,
        ease: [0.16, 1, 0.3, 1],
      });
      return () => controls.stop();
    }
  }, [isInView, count, target]);

  useEffect(() => {
    const unsubscribe = rounded.on("change", (v) => setDisplayValue(v));
    return () => unsubscribe();
  }, [rounded]);

  return (
    <span ref={ref} className="font-heading tracking-tight">
      {displayValue}
      {suffix}
    </span>
  );
}

export default function MetricsBar() {
  return (
    <section id="metrics" className="relative py-20 bg-slate-50 border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Exact Required Steering Headline */}
        <SectionHeading
          badge="PROVEN PERFORMANCE"
          title="Our Track Record: The Numbers Behind Our Success"
          className="mb-12"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {METRICS_DATA.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <motion.div
                key={metric.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <GlassCard hoverEffect className="p-8 text-center bg-white space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-[#0055FF]/10 text-[#0055FF] flex items-center justify-center mx-auto">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="text-4xl sm:text-5xl font-black text-slate-900 font-heading">
                    <AnimatedCounter target={metric.numericTarget} suffix={metric.suffix} />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900 font-heading">{metric.label}</h3>
                    <p className="text-xs text-slate-500 font-medium mt-1 font-sans">{metric.subtext}</p>
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
