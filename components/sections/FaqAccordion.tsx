"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";

export interface FaqItem {
  question: string;
  answer: string;
}

export type FaqCategory = "About the Course" | "About the Delivery" | "Miscellaneous";

const FAQ_DATA: Record<FaqCategory, FaqItem[]> = {
  "About the Course": [
    {
      question: "What types of corporate training programs does Accredian offer?",
      answer: "Accredian offers specialized enterprise upskilling across Generative AI, Enterprise Data Science, Product Management & Scaling, and CXO Executive Transformation.",
    },
    {
      question: "Can curricula be customized for our tech stack and domain?",
      answer: "Yes, 100% of our enterprise programs are custom-tailored to your organization's specific technical ecosystem, compliance standards, and business goals.",
    },
    {
      question: "Are certificates issued upon completion?",
      answer: "Yes, all participating professionals receive industry-recognized enterprise capability certifications and verifiable digital badges upon passing capstone projects.",
    },
  ],
  "About the Delivery": [
    {
      question: "How are the training programs delivered to global distributed teams?",
      answer: "Programs are delivered through a flexible hybrid model combining live interactive virtual masterclasses, self-paced sandbox labs, and hands-on capstone simulations.",
    },
    {
      question: "What is the typical duration of an enterprise upskilling engagement?",
      answer: "Engagement timelines range from intensive 2-week executive sprints to comprehensive multi-month capability transformation roadmaps.",
    },
    {
      question: "Is live mentorship provided during the program?",
      answer: "Yes, teams receive direct 1-on-1 mentorship from senior technical practitioners, AI architects, and C-suite advisors throughout the deployment.",
    },
  ],
  "Miscellaneous": [
    {
      question: "How do enterprise leadership teams track ROI and skill mastery?",
      answer: "Leadership teams receive full access to real-time executive analytics dashboards monitoring engagement, skill acquisition metrics, and project evaluation scores.",
    },
    {
      question: "What support is provided after program completion?",
      answer: "We provide post-deployment review sessions, ongoing learning community access, and quarterly refresher modules to ensure long-term retention.",
    },
  ],
};

const CATEGORIES: FaqCategory[] = ["About the Course", "About the Delivery", "Miscellaneous"];

export default function FaqAccordion() {
  const [activeTab, setActiveTab] = useState<FaqCategory>("About the Course");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section id="faq" className="relative py-24 bg-white border-t border-slate-200/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Exact Required Steering Headline */}
        <SectionHeading
          badge="GOT QUESTIONS?"
          title="Frequently Asked Questions"
          subtitle="Everything you need to know about Accredian Enterprise upskilling engagements."
          className="mb-12"
        />

        {/* Tab Navigation */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10">
          {CATEGORIES.map((tab) => (
            <button
              key={tab}
              onClick={() => {
                setActiveTab(tab);
                setOpenIndex(0);
              }}
              className={`px-5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#0055FF] ${
                activeTab === tab
                  ? "bg-[#0055FF] text-white shadow-md"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQ_DATA[activeTab].map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <GlassCard key={index} className="overflow-hidden bg-white border-slate-200/80">
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0055FF] rounded-lg"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-[#0055FF] flex-shrink-0" />
                    <span className="text-base font-bold text-slate-900 font-heading">
                      {faq.question}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-500 transition-transform duration-200 flex-shrink-0 ${
                      isOpen ? "rotate-180 text-[#0055FF]" : ""
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-2 text-sm text-slate-600 font-sans leading-relaxed border-t border-slate-100">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </GlassCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
