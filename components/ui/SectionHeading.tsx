import React from "react";
import { cn } from "@/lib/utils";

/**
 * Interface for SectionHeading Reusable Props
 */
export interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

/**
 * SectionHeading Reusable Component
 * Renders consistent titles, category badges, and descriptive subtitles across all section modules
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
        "max-w-3xl",
        centered ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      {badge && (
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0055FF]/10 border border-[#0055FF]/20 text-[#0055FF] text-xs uppercase tracking-widest font-mono font-semibold mb-4">
          <span>{badge}</span>
        </div>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-4xl font-extrabold text-slate-900 font-heading tracking-tight leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base sm:text-lg text-slate-600 font-sans leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
