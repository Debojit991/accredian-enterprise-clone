# Accredian Enterprise Landing Page Clone

A production-ready, highly responsive, light-mode corporate enterprise landing page built with **Next.js 15 (App Router)**, **Tailwind CSS v4**, and **Framer Motion**. Designed as a strategic clone of the [Accredian Enterprise](https://enterprise.accredian.com) workforce transformation platform.

---

## 🚀 Project Overview

This application serves as a modern B2B upskilling landing page targeting Fortune 500 decision-makers and enterprise leaders. It features an interactive hero section, animated quantitative metrics counters, continuous partner logo marquees, 7-step Accredian Edge pillars, 7 domain expertise modules, the CAT Framework, a 3-step delivery process, tabbed FAQ accordions, authentic Bayer partner testimonials, a corporate blue CTA banner, and a full-stack lead capture form.

### Key Highlights
*   **Next.js 15 App Router & Server/Client Architecture**
*   **Tailwind CSS v4 Theme Token Extensions** (`#FFFFFF` pure white, `#0F172A` slate, `#0055FF` corporate blue accent)
*   **Hardware-Accelerated Framer Motion Micro-Animations**
*   **Data-Driven Dynamic Component Renderers** (100% typed interfaces, zero hardcoded JSX repetition)
*   **Custom Next.js API Route Backend (`/api/contact`)**
*   **WCAG AAA Accessibility & Screen Reader Optimization**

---

## 🛠️ Setup Instructions

Follow these steps to run the project locally on your machine:

```bash
# 1. Clone the repository
git clone https://github.com/Debojit991/accredian-enterprise-clone.git

# 2. Navigate into the project folder
cd accredian-enterprise-clone

# 3. Install dependencies
npm install

# 4. Launch the local development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

---

## 🏗️ Architectural Approach

The project was executed following a strict phase-by-phase engineering strategy:

1.  **Design System & Theme Extensions**: Defined a clean corporate light-mode design system, typography pairing (`Plus Jakarta Sans` + `Inter`), 4px grid spacing scale, and soft drop shadow elevation rules in `DESIGN.md` and `app/globals.css`.
2.  **Modular Reusable UI Components**:
    *   `<GlassCard>`: Reusable corporate card container leveraging `clsx` and `tailwind-merge` (`cn`).
    *   `<SectionHeading>`: Reusable header component for consistent section titles, subtitles, and uppercase category badges.
3.  **Strict Data-Driven Sections**: Every section is driven by typed TypeScript interfaces (`EnterpriseMetric`, `EdgePillar`, `DomainItem`, `CATStep`, `DeliveryStep`, `FaqItem`, `Testimonial`, `NavRoute`, `FooterColumn`, `Partner`):
    *   `Hero.tsx`: Exact headline *"Next-Gen Expertise For Your Enterprise"*, subhead, 3 feature checkmarks, and single `'Enquire Now'` CTA.
    *   `MetricsBar.tsx`: Track record stats (`10K+ Professionals Trained`, `200+ Sessions Delivered`, `5K+ Active Learners`).
    *   `PartnerStrip.tsx`: Infinite-scroll marquee showcasing corporate client partners (`HCL`, `Reliance`, `IBM`, `CRIF`, `ADP`, `Bayer`).
    *   `AccredianEdge.tsx`: 7-step horizontal framework timeline grid.
    *   `DomainExpertise.tsx`: 7 corporate domain expertise white cards.
    *   `CATFramework.tsx`: 3-stage pedagogical methodology (`Concept`, `Application`, `Tools`).
    *   `DeliveryProcess.tsx`: 3-step structured delivery approach (`Skill Gap Analysis`, `Customized Training Plan`, `Flexible Program Delivery`).
    *   `FaqAccordion.tsx`: Tabbed FAQ interface with expanding accordion panels.
    *   `Testimonials.tsx`: Interactive carousel featuring authentic Bayer client partner quotes.
    *   `CtaBanner.tsx`: Corporate blue engagement banner with white CTA button.
    *   `ContactForm.tsx`: Full-stack lead capture form wired to `/api/contact`.

---

## 🤖 AI Usage & Manual Engineering

This application was developed in partnership with AI tooling (Antigravity & 21st.dev Magic MCP) under strict human architectural supervision, as documented in [`AI-LOG.md`](./AI-LOG.md).

### AI Scaffolding & Assistance
*   Used **21st.dev Magic MCP** to query and fetch component layout patterns.
*   Used **UI/UX Pro Max** skill for design system recommendation queries.
*   Generated initial component scaffolding and structural boilerplate.

### Manual Engineering Overrides
*   **Master Visual Pivot to Light Mode**: Intervened when AI initially scaffolded a dark-mode SaaS theme, re-engineering the entire architecture to match the live `enterprise.accredian.com` corporate light-mode aesthetic.
*   **Backend Persistence API Route**: Manually engineered `app/api/contact/route.ts` with POST payload validation, console logging (`"New Enterprise Lead Captured:"`), and simulated network latency.
*   **Surgical Refactoring**: Deleted leftover dark-mode components (`CapabilitiesGrid.tsx`) and constructed missing reference sections (`DeliveryProcess`, `FaqAccordion`, `CtaBanner`, `AccredianEdge`, `DomainExpertise`, `CATFramework`).
*   **Class Merging Utility**: Created `lib/utils.ts` (`cn`) combining `clsx` and `tailwind-merge` for conflict-free class overrides.
*   **Accessibility & Motion Auditing**: Added explicit `aria-label` attributes to carousel buttons and navbar triggers, `aria-hidden="true"` to decorative icons and duplicated marquee items, and `aria-live="assertive"` alert banners on form submission states.

---

## 🔮 Future Improvements

1.  **Zod Schema Validation**: Integrate Zod alongside React Hook Form for type-safe, schema-driven client and server-side validation.
2.  **Database Persistence**: Connect the Next.js `/api/contact` API route to a real-time database (e.g., Supabase or PostgreSQL via Prisma).
3.  **Comprehensive Automated Testing**: Add unit and component integration tests using Jest, React Testing Library, and Playwright E2E test suites.
