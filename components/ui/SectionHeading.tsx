import React from "react";
import { Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Props definition for the reusable SectionHeading component
 */
export interface SectionHeadingProps {
  /** Optional badge text displayed above the title */
  badge?: string;
  /** Primary section title */
  title: string;
  /** Optional descriptive subtitle paragraph */
  subtitle?: string;
  /** Align text to center (defaults to true) */
  centered?: boolean;
  /** Custom wrapper CSS class names */
  className?: string;
}

/**
 * SectionHeading - Reusable section title component for enterprise sections
 */
export default function SectionHeading({
  badge,
  title,
  subtitle,
  centered = true,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-3xl mb-12",
        centered ? "text-center mx-auto" : "text-left",
        className
      )}
    >
      {badge && (
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0055FF]/10 border border-[#0055FF]/20 text-[#38BDF8] text-xs uppercase tracking-widest font-mono mb-4">
          <Sparkles className="w-3.5 h-3.5" />
          <span>{badge}</span>
        </div>
      )}

      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-heading tracking-tight leading-tight">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-4 text-base sm:text-lg text-slate-400 font-sans leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
