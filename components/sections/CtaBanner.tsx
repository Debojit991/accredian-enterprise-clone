import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export default function CtaBanner() {
  return (
    <section className="relative py-16 bg-[#0055FF] text-white overflow-hidden shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
          
          <div className="space-y-2 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white text-xs uppercase tracking-widest font-mono font-semibold mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>READY TO TRANSFORM YOUR WORKFORCE?</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-heading tracking-tight leading-tight">
              Want to Learn More About Our Training Solutions?
            </h2>
            <p className="text-base sm:text-lg text-blue-100 font-sans font-medium">
              Get Expert Guidance for Your Team&apos;s Success!
            </p>
          </div>

          <Link
            href="#contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-white text-[#0055FF] hover:bg-slate-50 font-bold text-base shadow-md hover:shadow-xl transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-white flex-shrink-0"
          >
            <span>Contact Us</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
