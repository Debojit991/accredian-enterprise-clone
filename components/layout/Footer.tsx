import Link from "next/link";
import { ShieldCheck, Globe, Mail, ExternalLink } from "lucide-react";

/**
 * Interface defining structured footer navigation columns
 */
export interface FooterColumn {
  title: string;
  links: { label: string; href: string }[];
}

/**
 * Footer columns content
 */
const FOOTER_COLUMNS: FooterColumn[] = [
  {
    title: "Capabilities",
    links: [
      { label: "AI & Generative AI", href: "#expertise" },
      { label: "Enterprise Data Science", href: "#expertise" },
      { label: "Product & Innovation", href: "#expertise" },
      { label: "Leadership Elevation", href: "#expertise" },
    ],
  },
  {
    title: "Framework",
    links: [
      { label: "The Accredian Edge", href: "#edge" },
      { label: "CAT Framework", href: "#cat" },
      { label: "Track Record & Stats", href: "#metrics" },
      { label: "Client Partners", href: "#partners" },
    ],
  },
  {
    title: "Enterprise",
    links: [
      { label: "Custom Deployment", href: "#contact" },
      { label: "Executive Upskilling", href: "#hero" },
      { label: "Contact Solutions Team", href: "#contact" },
      { label: "Privacy Policy", href: "#" },
    ],
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-[#0055FF] p-0.5 flex items-center justify-center text-white">
                <ShieldCheck className="w-5 h-5" aria-hidden="true" />
              </div>
              <span className="font-extrabold text-xl tracking-tight text-white font-heading">
                ACCREDIAN <span className="text-[#0055FF]">ENTERPRISE</span>
              </span>
            </Link>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Cultivate high-performance teams through expert learning. Enterprise workforce capability architecting in AI, Data Science, Product, and Leadership.
            </p>

            <div className="flex items-center gap-4 text-slate-400 text-xs font-mono pt-2">
              <span className="flex items-center gap-1.5">
                <Globe className="w-4 h-4 text-[#0055FF]" /> enterprise.accredian.com
              </span>
              <span className="flex items-center gap-1.5">
                <Mail className="w-4 h-4 text-[#0055FF]" /> enterprise@accredian.com
              </span>
            </div>
          </div>

          {/* Navigation Columns */}
          {FOOTER_COLUMNS.map((col) => (
            <div key={col.title} className="space-y-4">
              <h3 className="text-xs font-mono uppercase tracking-wider text-[#0055FF] font-bold">
                {col.title}
              </h3>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-xs text-slate-400 hover:text-white transition-colors duration-200 inline-flex items-center gap-1 focus:outline-none focus-visible:ring-1 focus-visible:ring-[#0055FF] rounded"
                    >
                      <span>{link.label}</span>
                      {link.href === "#" && <ExternalLink className="w-3 h-3 opacity-60" />}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {currentYear} Accredian Enterprise. All rights reserved.</p>
          <p className="font-mono">Next-Gen Capability Architecture Platform</p>
        </div>
      </div>
    </footer>
  );
}
