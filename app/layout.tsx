import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";

// Configure Enterprise Typography Tokens via next/font/google
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Accredian Enterprise | Workforce Upskilling & AI Transformation",
  description: "Architecting high-impact workforce transformation. Accredian empowers Fortune 500 enterprises with world-class AI, Data Science, Product, and Executive Leadership capability building.",
  keywords: ["Enterprise Upskilling", "Corporate Training", "AI Education", "Data Science Corporate", "Leadership Programs", "Workforce Transformation"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${plusJakartaSans.variable} dark scroll-smooth h-full antialiased`}
    >
      <body className="bg-[#070A12] text-[#F8FAFC] min-h-full flex flex-col font-sans selection:bg-[#0055FF] selection:text-white">
        {/* Sticky Glassmorphism Header */}
        <Navbar />

        {/* Main Content Area padded below the fixed 80px Navbar */}
        <main className="flex-1 pt-20">
          {children}
        </main>

        {/* Enterprise Global Footer */}
        <Footer />
      </body>
    </html>
  );
}
