# The Brew Theory: Website

A modern, multi-page marketing site for The Brew Theory, a volunteer-led community that
partners with cafés across Lucknow to host events and experiences.

## Tech Stack

- Next.js 15 (App Router) + React 19 + TypeScript
- Tailwind CSS v4
- Framer Motion
- Lucide React icons
- Self-hosted fonts via `@fontsource` (Fraunces + Inter), with no external network calls at runtime

## Getting Started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

To build for production:

```bash
npm run build
npm run start
```

## Structure

```
src/
  app/
    layout.tsx        Root layout: fonts, SEO/OG metadata, navbar/footer shell
    page.tsx           Home page
    about/page.tsx      About Us
    services/page.tsx   Services
    contact/page.tsx    Contact
    not-found.tsx       Custom 404
    globals.css         Design tokens (color, font) + base styles
  components/
    Navbar.tsx, Footer.tsx, ScrollProgress.tsx, ScrollToTop.tsx
    ServiceCard.tsx, FAQAccordion.tsx, NewsletterForm.tsx, ContactForm.tsx
    AnimatedCounter.tsx, SteamThread.tsx  (signature steam-ribbon motif)
    ui.tsx              Shared buttons, eyebrow label, reveal-on-scroll wrapper
    home/               Homepage-only sections (Hero, WhyBrewTheory, etc.)
  lib/
    data.ts             Central content: nav links, services, FAQs, stats
public/
  images/logo.png       Brand logo
```

## Environment Variables

Copy `.env.example` to `.env.local` and add a free Web3Forms access key
(https://web3forms.com) to enable real contact form submissions:

```bash
cp .env.example .env.local
```

Without a key, the form will still attempt to submit but will show the error state,
since Web3Forms requires a valid `access_key`.

## Notes

- Colors, fonts, and spacing are defined as CSS custom properties in `globals.css` and exposed
  to Tailwind via `@theme inline`, so utility classes like `bg-blush`, `text-brown-soft`, and
  `font-display` are available everywhere.
- The contact form submits to Web3Forms (see Environment Variables above). The newsletter
  form is still a client-side simulation, since it needs a mailing-list provider rather than
  a form-to-email service.
- "Upcoming Events" and "Partner Cafés" now feature real content ("The Receipt Never Lies" and
  VIJ HOUSE CAFE); remaining slots are honest "coming soon" placeholders, not fabricated content.
- Motion is deliberately restrained: 3D tilt is scoped to Featured Experience and Upcoming
  Event cards only; magnetic hover is scoped to the Hero and final CTA "Partner With Us"
  buttons only. Everything else uses simple lift, shadow, and border-glow on hover.
- Reduced motion is respected globally via `prefers-reduced-motion`.
