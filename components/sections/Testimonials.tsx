"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Building2, Award } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  impactMetric: string;
  avatarInitials: string;
}

/**
 * Exact real client quotes from Bayer
 */
const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: "bayer-1",
    name: "Enterprise Learning Lead",
    role: "Learning & Capability Development",
    company: "Bayer",
    quote: "We would like to thank Accredian for the wonderful support and the beautiful journey. The team turned our vision into reality with unparalleled dedication, service, and expertise throughout the entire process.",
    impactMetric: "Validated Partner Impact",
    avatarInitials: "BY",
  },
  {
    id: "bayer-2",
    name: "Senior Talent Partner",
    role: "Global Talent & Capability",
    company: "Bayer",
    quote: "Accredian's commitment to excellence is unmatched. They consistently go the extra mile to ensure our needs are met and exceeded, providing reliable support and high-quality service every step of the way.",
    impactMetric: "Exceeded Expectation Score",
    avatarInitials: "BY",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);

  const total = TESTIMONIALS_DATA.length;

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % total);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + total) % total);
  };

  const currentTestimonial = TESTIMONIALS_DATA[currentIndex];

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0,
      scale: 0.96,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 100 : -100,
      opacity: 0,
      scale: 0.96,
    }),
  };

  return (
    <section id="testimonials" className="relative py-24 bg-[#F8FAFC] border-t border-slate-200/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Exact Required Steering Headline */}
        <SectionHeading
          badge="CLIENT PERSPECTIVES"
          title="Testimonials from Our Partners: What Our Clients Are Saying"
          subtitle="Real executive perspectives on Accredian's enterprise capability transformation engagements."
          className="mb-16"
        />

        {/* Carousel Container */}
        <div className="max-w-4xl mx-auto relative">
          
          {/* Main Animated Testimonial Card */}
          <div className="relative min-h-[340px] sm:min-h-[280px] flex items-center">
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={currentTestimonial.id}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="w-full"
              >
                <GlassCard className="p-8 sm:p-12 relative bg-white border-slate-200/80 shadow-md">
                  {/* Background Quote Icon */}
                  <Quote className="absolute top-6 right-8 w-20 h-20 text-slate-100 pointer-events-none" />

                  <div className="flex flex-col justify-between h-full space-y-8 relative z-10">
                    
                    {/* Quote Text */}
                    <p className="text-lg sm:text-xl lg:text-2xl text-slate-800 font-sans italic leading-relaxed">
                      &ldquo;{currentTestimonial.quote}&rdquo;
                    </p>

                    {/* Impact Metric Badge & Author Info */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pt-6 border-t border-slate-100">
                      
                      {/* Author Details */}
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-[#0055FF] flex items-center justify-center text-white font-bold font-heading text-sm shadow-md">
                          {currentTestimonial.avatarInitials}
                        </div>
                        <div>
                          <h4 className="text-base font-bold text-slate-900 font-heading">
                            {currentTestimonial.name}
                          </h4>
                          <p className="text-xs text-[#0055FF] font-semibold font-sans">
                            {currentTestimonial.role}
                          </p>
                          <p className="text-xs text-slate-500 font-mono flex items-center gap-1 mt-0.5">
                            <Building2 className="w-3.5 h-3.5 text-[#0055FF]" />
                            <span className="font-bold text-slate-700">{currentTestimonial.company}</span>
                          </p>
                        </div>
                      </div>

                      {/* Highlight Metric Chip */}
                      <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-50 border border-blue-100 text-[#0055FF] text-xs font-semibold">
                        <Award className="w-4 h-4 text-[#0055FF]" />
                        <span>{currentTestimonial.impactMetric}</span>
                      </div>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls & Pagination Indicators */}
          <div className="flex items-center justify-between mt-8">
            
            {/* Slide Index Indicators */}
            <div className="flex items-center gap-2">
              {TESTIMONIALS_DATA.map((_, idx) => (
                <button
                  key={`dot-${idx}`}
                  onClick={() => {
                    setDirection(idx > currentIndex ? 1 : -1);
                    setCurrentIndex(idx);
                  }}
                  aria-label={`Go to testimonial slide ${idx + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    idx === currentIndex
                      ? "w-8 bg-[#0055FF]"
                      : "w-2 bg-slate-300 hover:bg-slate-400"
                  }`}
                />
              ))}
            </div>

            {/* Accessible Navigation Buttons */}
            <div className="flex items-center gap-3">
              <button
                onClick={prevSlide}
                aria-label="Previous Testimonial"
                className="w-11 h-11 rounded-xl bg-white border border-slate-200 hover:border-[#0055FF] hover:bg-slate-50 flex items-center justify-center text-slate-700 transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#0055FF]"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextSlide}
                aria-label="Next Testimonial"
                className="w-11 h-11 rounded-xl bg-white border border-slate-200 hover:border-[#0055FF] hover:bg-slate-50 flex items-center justify-center text-slate-700 transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#0055FF]"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
