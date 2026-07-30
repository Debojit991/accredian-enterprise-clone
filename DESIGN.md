# Accredian Enterprise - Design System Specifications

## Executive Overview
A corporate-grade B2B design system built for high trust, executive authority, and enterprise workforce upskilling platforms.

---

## 1. Color Palette

| Token Role | Name | Hex Code | Purpose |
| :--- | :--- | :--- | :--- |
| **Primary Brand** | Midnight Slate Navy | `#0B132B` *(Manually Tweaked from `#0F172A`)* | Hero background, primary headings, core corporate identity |
| **Secondary Brand** | Deep Steel Slate | `#1C2541` | Card containers, surface backgrounds, component fills |
| **Accent / CTA** | Enterprise Sapphire Blue | `#0055FF` *(Manually Tweaked from `#0284C7`)* | Primary buttons, active tabs, interactive indicators |
| **Accent Glow** | Electric Cyan Highlight | `#38BDF8` | Micro-animations, gradient borders, metric badge accents |
| **Neutral Background** | Dark Vault Base | `#070A12` | Dark mode page background |
| **Neutral Card** | Glass Slate Surface | `rgba(28, 37, 65, 0.6)` | Glassmorphism cards with backdrop blur |
| **Neutral Text** | Pure Ice / Muted Slate | `#F8FAFC` / `#94A3B8` | Body text, captions, secondary details |

---

## 2. Typography Strategy

*   **Heading Font**: `Plus Jakarta Sans` / `Outfit` (Modern, bold, authoritative geometric sans-serif for executive headers).
*   **Body Font**: `Inter` (High legibility, clean corporate reading experience for enterprise metrics and feature blocks).

---

## 3. Spacing Scale

Based on a 4px grid system:
*   `xs`: `4px` (`0.25rem`)
*   `sm`: `8px` (`0.5rem`)
*   `md`: `16px` (`1rem`)
*   `lg`: `24px` (`1.5rem`)
*   `xl`: `32px` (`2rem`)
*   `2xl`: `48px` (`3rem`)
*   `3xl`: `64px` (`4rem`)
*   `4xl`: `96px` (`6rem`)

---

## 4. Border Radius & Elevation Conventions

*   **Border Radius**:
    *   `card-radius`: `14px` (`0.875rem`) *(Manually Tweaked from `16px` for sharper enterprise framing)*
    *   `button-radius`: `8px` (`0.5rem`)
    *   `pill-radius`: `9999px`
*   **Shadows**:
    *   `card-shadow`: `0 20px 40px -15px rgba(0, 0, 0, 0.5)`
    *   `accent-glow`: `0 0 25px rgba(0, 85, 255, 0.35)`
    *   `border-glow`: `1px solid rgba(56, 189, 248, 0.2)`

---

## 5. Tailwind v4 CSS Theme Extension

```css
@theme {
  --color-primary: #0B132B;
  --color-secondary: #1C2541;
  --color-accent: #0055FF;
  --color-accent-glow: #38BDF8;
  --color-surface: #070A12;
  --color-card: rgba(28, 37, 65, 0.6);
  --color-text-main: #F8FAFC;
  --color-text-muted: #94A3B8;

  --font-heading: 'Plus Jakarta Sans', sans-serif;
  --font-body: 'Inter', sans-serif;

  --radius-card: 0.875rem;
  --radius-btn: 0.5rem;

  --shadow-card: 0 20px 40px -15px rgba(0, 0, 0, 0.5);
  --shadow-accent-glow: 0 0 25px rgba(0, 85, 255, 0.35);
}
```
