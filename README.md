# Accredian Enterprise Landing Page Clone

A production-ready, highly responsive, dark-mode enterprise landing page built with **Next.js 15 (App Router)**, **Tailwind CSS v4**, and **Framer Motion**. Designed as a strategic clone of the [Accredian Enterprise](https://enterprise.accredian.com) workforce transformation platform.

---

## 🚀 Project Overview

This application serves as a modern B2B upskilling landing page targeting Fortune 500 decision-makers and enterprise leaders. It features an interactive hero section, animated quantitative metrics counters, continuous partner logo marquees, modular bento grid capability showcases, an executive testimonial carousel, and a full-stack lead capture form.

### Key Highlights
*   **Next.js 15 App Router & Server/Client Architecture**
*   **Tailwind CSS v4 Theme Token Extensions** (`#0B132B` primary navy, `#0055FF` sapphire accent, glassmorphism utilities)
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

1.  **Design System & Theme Extensions**: Defined a custom dark-mode enterprise color palette, typography pairing (`Plus Jakarta Sans` + `Inter`), 4px grid spacing scale, and glassmorphism elevation rules in `DESIGN.md` and `app/globals.css`.
2.  **Modular Reusable UI Components**:
    *   `<GlassCard>`: Reusable glassmorphism surface container leveraging `clsx` and `tailwind-merge` (`cn`).
    *   `<SectionHeading>`: Reusable header component for consistent section titles, subtitles, and uppercase category badges.
3.  **Strict Data-Driven Sections**: Every section is driven by typed TypeScript interfaces (`EnterpriseMetric`, `Capability`, `Testimonial`, `NavRoute`, `FooterColumn`, `Partner`):
    *   `Hero.tsx`: Ambient gradient mesh, exact headline, dual CTAs, and live analytics mockup.
    *   `MetricsBar.tsx`: Intersection observer count-up counters with `{ once: true }` trigger to prevent scroll lag.
    *   `PartnerStrip.tsx`: Infinite-scroll marquee with pause-on-hover and gradient edge fading masks.
    *   `CapabilitiesGrid.tsx`: Asymmetric Bento Grid layout with mobile breakpoint overrides.
    *   `Testimonials.tsx`: Modulo arithmetic bounds-safe carousel with Framer Motion slide/fade transitions.
    *   `ContactForm.tsx`: Lead capture form with real-time field validation and feedback states.

---

## 🤖 AI Usage & Manual Engineering

This application was developed in partnership with AI tooling (Antigravity & 21st.dev Magic MCP) under strict human architectural supervision, as documented in [`AI-LOG.md`](./AI-LOG.md).

### AI Scaffolding & Assistance
*   Used **21st.dev Magic MCP** to query and fetch component layout patterns (`Hero Section Dark`, `id: 19`).
*   Used **UI/UX Pro Max** skill for design system recommendation queries.
*   Generated initial component scaffolding and structural boilerplate.

### Manual Engineering Overrides
*   **Backend Persistence API Route**: Manually engineered `app/api/contact/route.ts` with POST payload validation, console logging (`"New Enterprise Lead Captured:"`), and simulated network latency.
*   **Mobile Breakpoint Overrides**: Manually engineered CSS grid column overrides (`grid-cols-1 lg:grid-cols-3`) on the Capabilities Bento Grid to eliminate horizontal overflow on mobile screens (~375px).
*   **Class Merging Utility**: Created `lib/utils.ts` (`cn`) combining `clsx` and `tailwind-merge` for conflict-free class overrides.
*   **Accessibility & Motion Auditing**: Added explicit `aria-label` attributes to carousel buttons and navbar triggers, `aria-hidden="true"` to decorative icons and duplicated marquee items, and `aria-live="assertive"` alert banners on form submission states.
*   **CSS Import Optimization**: Resolved CSS `@import` order warnings by moving Google Fonts imports to Line 1 of `app/globals.css`.

---

## 🔮 Future Improvements

1.  **Zod Schema Validation**: Integrate Zod alongside React Hook Form for type-safe, schema-driven client and server-side validation.
2.  **Database Persistence**: Connect the Next.js `/api/contact` API route to a real-time database (e.g., Supabase or PostgreSQL via Prisma).
3.  **Comprehensive Automated Testing**: Add unit and component integration tests using Jest, React Testing Library, and Playwright E2E test suites.
