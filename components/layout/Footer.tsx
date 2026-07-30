import Link from "next/link";
import { ShieldCheck, Globe, Share2, Mail, ExternalLink } from "lucide-react";

/**
 * Footer link structure interface
 */
export interface FooterLink {
  label: string;
  href: string;
}

/**
 * Footer navigation column section interface
 */
export interface FooterColumn {
  title: string;
  links: FooterLink[];
}

/**
 * Data-driven footer columns configuration
 */
const FOOTER_COLUMNS: FooterColumn[] = [
  {
    title: "Platform",
    links: [
      { label: "AI & Data Upskilling", href: "#capabilities" },
      { label: "Workforce Analytics", href: "#metrics" },
      { label: "LMS & Enterprise Integration", href: "#" },
      { label: "Custom Executive Curricula", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Accredian", href: "#" },
      { label: "Leadership Team", href: "#" },
      { label: "Enterprise Careers", href: "#" },
      { label: "Contact Sales", href: "#contact" },
    ],
  },
  {
    title: "Legal & Security",
    links: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Security & SOC2 Type II", href: "#" },
      { label: "Data Governance", href: "#" },
    ],
  },
];

/**
 * Social & network links
 */
const SOCIAL_LINKS = [
  { icon: Globe, href: "https://accredian.com", label: "Global Network" },
  { icon: Share2, href: "#", label: "Share Platform" },
  { icon: Mail, href: "mailto:enterprise@accredian.com", label: "Enterprise Support" },
  { icon: ExternalLink, href: "#", label: "Client Portal" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#070A12] border-t border-white/10 text-slate-400 font-sans relative overflow-hidden">
      {/* Subdued Background Gradient Orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#0055FF]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#38BDF8]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-16">
          
          {/* Column 1: Brand & Enterprise Mission */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0055FF] to-[#38BDF8] p-0.5 flex items-center justify-center shadow-[0_0_15px_rgba(0,85,255,0.4)]">
                <div className="w-full h-full bg-[#070A12] rounded-[10px] flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5 text-[#38BDF8]" />
                </div>
              </div>
              <span className="font-extrabold text-xl tracking-tight text-white font-heading">
                ACCREDIAN <span className="text-[#38BDF8]">ENTERPRISE</span>
              </span>
            </Link>

            <p className="text-sm leading-relaxed text-slate-400">
              Architecting high-impact workforce transformation. Accredian empowers Fortune 500 enterprises with world-class AI, Data, and Executive Leadership capability building.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {SOCIAL_LINKS.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-9 h-9 rounded-lg bg-white/5 hover:bg-[#0055FF]/20 border border-white/10 hover:border-[#0055FF]/50 flex items-center justify-center text-slate-400 hover:text-white transition-all duration-200 cursor-pointer"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Columns 2-4: Mapped Navigation Sections */}
          {FOOTER_COLUMNS.map((column) => (
            <div key={column.title} className="space-y-4">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-white font-heading">
                {column.title}
              </h3>
              <ul className="space-y-3 text-sm">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-slate-400 hover:text-[#38BDF8] transition-colors duration-200 cursor-pointer"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Sub-Footer Bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {currentYear} Accredian Enterprise Technologies. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>SOC2 Type II Certified</span>
            <span>•</span>
            <span>GDPR Compliant</span>
            <span>•</span>
            <span>99.9% Platform Uptime</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
