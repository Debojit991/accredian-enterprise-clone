"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { Users, Award, Star, TrendingUp } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";

/**
 * EnterpriseMetric Interface
 * Defines data schema driving quantitative enterprise performance statistics in the Metrics Bar
 */
export interface EnterpriseMetric {
  id: string;
  numericTarget: number;
  prefix?: string;
  suffix: string;
  decimals?: number;
  label: string;
  subtext: string;
  icon: React.ElementType;
}

/**
 * Data-driven array driving the metrics bar stats
 */
const METRICS_DATA: EnterpriseMetric[] = [
  {
    id: "professionals",
    numericTarget: 50000,
    suffix: "+",
    label: "Professionals Upskilled",
    subtext: "Across Global Enterprises",
    icon: Users,
  },
  {
    id: "completion",
    numericTarget: 95,
    suffix: "%",
    label: "Program Completion",
    subtext: "Industry-Leading Retention",
    icon: Award,
  },
  {
    id: "rating",
    numericTarget: 4.8,
    suffix: "/5",
    decimals: 1,
    label: "Enterprise Rating",
    subtext: "From CXOs & HR Leaders",
    icon: Star,
  },
  {
    id: "roi",
    numericTarget: 3.5,
    suffix: "x",
    decimals: 1,
    label: "Talent ROI",
    subtext: "Measured Productivity Uplift",
    icon: TrendingUp,
  },
];

/**
 * Animated Counter sub-component using Framer Motion motion values
 * Triggered strictly once when scrolled into view
 */
function AnimatedCounter({ 
  target, 
  prefix = "", 
  suffix = "", 
  decimals = 0 
}: { 
  target: number; 
  prefix?: string; 
  suffix?: string; 
  decimals?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) =>
    latest.toLocaleString("en-US", {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    })
  );

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
      {prefix}
      {displayValue}
      {suffix}
    </span>
  );
}

export default function MetricsBar() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isContainerInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section id="metrics" className="relative z-20 -mt-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-20">
      <div ref={containerRef}>
        
        {/* Reusable Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={isContainerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <SectionHeading
            badge="PROVEN PERFORMANCE"
            title="Quantifiable Excellence: Scaling Capability at Enterprise Velocity"
            className="mb-8"
          />
        </motion.div>

        {/* Reusable GlassCard Wrapper */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isContainerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
        >
          <GlassCard className="p-6 sm:p-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
              {METRICS_DATA.map((metric, index) => {
                const Icon = metric.icon;
                return (
                  <div
                    key={metric.id}
                    className={`flex flex-col items-center text-center ${
                      index > 0 ? "pt-6 sm:pt-0 sm:pl-6 lg:pl-8" : ""
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-8 h-8 rounded-lg bg-[#0055FF]/20 flex items-center justify-center text-[#38BDF8]">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-xs uppercase tracking-wider font-semibold text-slate-400 font-sans">
                        {metric.label}
                      </span>
                    </div>

                    <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-white text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-[#38BDF8]">
                      <AnimatedCounter
                        target={metric.numericTarget}
                        prefix={metric.prefix}
                        suffix={metric.suffix}
                        decimals={metric.decimals}
                      />
                    </div>

                    <p className="text-xs text-slate-400 font-medium mt-2">
                      {metric.subtext}
                    </p>
                  </div>
                );
              })}
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}
