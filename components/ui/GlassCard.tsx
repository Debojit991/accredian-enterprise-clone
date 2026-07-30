import React from "react";
import { cn } from "@/lib/utils";

/**
 * Props definition for the reusable GlassCard component
 */
export interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  /** Enables hover glow and border elevation transitions */
  hoverEffect?: boolean;
  /** Custom CSS class overrides */
  className?: string;
}

/**
 * GlassCard - Reusable dark-mode glassmorphism container with optional hover transitions
 */
export const GlassCard = React.forwardRef<HTMLDivElement, GlassCardProps>(
  ({ children, hoverEffect = false, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] relative overflow-hidden transition-all duration-300",
          hoverEffect &&
            "hover:border-[#0055FF]/60 hover:shadow-[0_0_30px_rgba(0,85,255,0.25)] hover:-translate-y-1",
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

GlassCard.displayName = "GlassCard";

export default GlassCard;
