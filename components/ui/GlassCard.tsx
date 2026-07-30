import React from "react";
import { cn } from "@/lib/utils";

/**
 * Interface for GlassCard Reusable Props
 */
export interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  hoverEffect?: boolean;
  className?: string;
}

/**
 * GlassCard Reusable Component
 * Renders a crisp corporate card container with subtle border and elevation
 */
export default function GlassCard({
  children,
  hoverEffect = false,
  className,
  ...props
}: GlassCardProps) {
  return (
    <div
      className={cn(
        "bg-white border border-slate-200/80 rounded-xl shadow-sm transition-all duration-300",
        hoverEffect && "hover:shadow-md hover:border-slate-300 hover:-translate-y-0.5",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
