"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { User, Mail, Building2, MessageSquare, Send, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";

/**
 * Interface for lead capture form state data
 */
export interface LeadFormData {
  name: string;
  email: string;
  company: string;
  message: string;
}

/**
 * Form validation errors interface
 */
export interface FormErrors {
  name?: string;
  email?: string;
  company?: string;
  message?: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<LeadFormData>({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [serverMessage, setServerMessage] = useState("");

  /**
   * Client-side input validation helper
   */
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Full name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Work email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid work email address";
    }

    if (!formData.company.trim()) {
      newErrors.company = "Company name is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Please briefly outline your upskilling requirements";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  /**
   * Input change handler
   */
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear field error on change
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  /**
   * Form submission handler targeting /api/contact
   */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setStatus("loading");
    setServerMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setStatus("success");
        setServerMessage(result.message || "Lead captured successfully.");
        // Reset form inputs after successful submission
        setFormData({ name: "", email: "", company: "", message: "" });
      } else {
        setStatus("error");
        setServerMessage(result.message || "Failed to submit request. Please try again.");
      }
    } catch (err) {
      console.error("Submission error:", err);
      setStatus("error");
      setServerMessage("Network error. Please check your connection.");
    }
  };

  return (
    <section id="contact" className="relative py-24 bg-[#070A12] border-t border-white/10 overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#0055FF]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Exact Required Section Heading */}
        <SectionHeading
          badge="START TRANSFORMATION"
          title="Accelerate Your Enterprise"
          subtitle="Connect with our solutions team to architect your custom upskilling deployment"
          className="mb-14"
        />

        <div className="max-w-2xl mx-auto">
          <GlassCard className="p-8 sm:p-12">
            
            {status === "success" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-10 space-y-4"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto shadow-[0_0_30px_rgba(16,185,129,0.3)]">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white font-heading">
                  Lead Captured Successfully!
                </h3>
                <p className="text-sm text-slate-300 max-w-md mx-auto font-sans leading-relaxed">
                  Thank you for reaching out. An Accredian enterprise capability architect will review your request and contact you within 24 business hours.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-6 inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
                >
                  Submit Another Inquiry
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                
                {/* Server Error Alert Banner */}
                {status === "error" && (
                  <div 
                    role="alert" 
                    aria-live="assertive"
                    className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 flex items-center gap-3 text-red-400 text-sm"
                  >
                    <AlertCircle className="w-5 h-5 flex-shrink-0" aria-hidden="true" />
                    <span>{serverMessage}</span>
                  </div>
                )}

                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-xs uppercase tracking-wider font-semibold text-slate-300 font-mono mb-2">
                    Full Name <span className="text-[#38BDF8]">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      <User className="w-4 h-4" aria-hidden="true" />
                    </div>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      aria-invalid={errors.name ? "true" : undefined}
                      aria-describedby={errors.name ? "name-error" : undefined}
                      placeholder="e.g. Sarah Jenkins"
                      className={`w-full pl-10 pr-4 py-3 rounded-xl bg-white/5 border text-sm text-white placeholder-slate-500 focus:outline-none transition-all duration-200 ${
                        errors.name
                          ? "border-red-500/80 focus:border-red-500 focus:ring-1 focus:ring-red-500"
                          : "border-white/10 focus:border-[#0055FF] focus:ring-1 focus:ring-[#0055FF]"
                      }`}
                    />
                  </div>
                  {errors.name && <p id="name-error" className="mt-1 text-xs text-red-400">{errors.name}</p>}
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-xs uppercase tracking-wider font-semibold text-slate-300 font-mono mb-2">
                    Work Email Address <span className="text-[#38BDF8]">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      <Mail className="w-4 h-4" aria-hidden="true" />
                    </div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      aria-invalid={errors.email ? "true" : undefined}
                      aria-describedby={errors.email ? "email-error" : undefined}
                      placeholder="s.jenkins@enterprise.com"
                      className={`w-full pl-10 pr-4 py-3 rounded-xl bg-white/5 border text-sm text-white placeholder-slate-500 focus:outline-none transition-all duration-200 ${
                        errors.email
                          ? "border-red-500/80 focus:border-red-500 focus:ring-1 focus:ring-red-500"
                          : "border-white/10 focus:border-[#0055FF] focus:ring-1 focus:ring-[#0055FF]"
                      }`}
                    />
                  </div>
                  {errors.email && <p id="email-error" className="mt-1 text-xs text-red-400">{errors.email}</p>}
                </div>

                {/* Company Field */}
                <div>
                  <label htmlFor="company" className="block text-xs uppercase tracking-wider font-semibold text-slate-300 font-mono mb-2">
                    Company / Organization <span className="text-[#38BDF8]">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      <Building2 className="w-4 h-4" aria-hidden="true" />
                    </div>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      aria-invalid={errors.company ? "true" : undefined}
                      aria-describedby={errors.company ? "company-error" : undefined}
                      placeholder="e.g. Apex Global Technologies"
                      className={`w-full pl-10 pr-4 py-3 rounded-xl bg-white/5 border text-sm text-white placeholder-slate-500 focus:outline-none transition-all duration-200 ${
                        errors.company
                          ? "border-red-500/80 focus:border-red-500 focus:ring-1 focus:ring-red-500"
                          : "border-white/10 focus:border-[#0055FF] focus:ring-1 focus:ring-[#0055FF]"
                      }`}
                    />
                  </div>
                  {errors.company && <p id="company-error" className="mt-1 text-xs text-red-400">{errors.company}</p>}
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block text-xs uppercase tracking-wider font-semibold text-slate-300 font-mono mb-2">
                    Upskilling Requirements & Team Size <span className="text-[#38BDF8]">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute top-3.5 left-3.5 pointer-events-none text-slate-400">
                      <MessageSquare className="w-4 h-4" aria-hidden="true" />
                    </div>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      aria-invalid={errors.message ? "true" : undefined}
                      aria-describedby={errors.message ? "message-error" : undefined}
                      placeholder="Tell us about your team size, targeted skill domains (AI, Data, Product), and timeline..."
                      className={`w-full pl-10 pr-4 py-3 rounded-xl bg-white/5 border text-sm text-white placeholder-slate-500 focus:outline-none transition-all duration-200 ${
                        errors.message
                          ? "border-red-500/80 focus:border-red-500 focus:ring-1 focus:ring-red-500"
                          : "border-white/10 focus:border-[#0055FF] focus:ring-1 focus:ring-[#0055FF]"
                      }`}
                    />
                  </div>
                  {errors.message && <p id="message-error" className="mt-1 text-xs text-red-400">{errors.message}</p>}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-[#0055FF] hover:bg-[#0044CC] disabled:bg-[#0055FF]/50 text-white font-semibold text-base shadow-[0_0_30px_rgba(0,85,255,0.4)] hover:shadow-[0_0_40px_rgba(0,85,255,0.6)] transition-all duration-300 cursor-pointer disabled:cursor-not-allowed group"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin text-white" />
                      <span>Processing Request...</span>
                    </>
                  ) : (
                    <>
                      <span>Submit Enterprise Request</span>
                      <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                    </>
                  )}
                </button>
              </form>
            )}
          </GlassCard>
        </div>
      </div>
    </section>
  );
}
