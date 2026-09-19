import type { Project } from "@/lib/types";

export const projects: Project[] = [
  {
    id: "universal-service-template",
    title: "Universal Service Template",
    description:
      "Open-source SaaS template for restaurants, cafes, salons & local businesses. Production-ready with admin panel, Telegram bot, LiqPay payments, i18n (UA/EN), and dark/light themes.",
    image:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&h=800&fit=crop",
    tags: ["Next.js 14", "TypeScript", "Tailwind", "Supabase", "Telegram Bot", "MIT"],
    github: "https://github.com/Mykhailo-Zhuk/universal-service-template",
    demo: "https://universal-service-template.vercel.app",
    featured: true,
    metrics: [
      { label: "Delivery time", value: "3-5 days" },
      { label: "License", value: "MIT" },
      { label: "Stack coverage", value: "Full-stack" },
    ],
  },
  {
    id: "mvp-spa-booking-website-canada",
    title: "Spa Booking Website (Canada)",
    description:
      "MVP for a spa salon in Canada with booking system, services, gallery, and i18n localization. Built with Next.js 14, Zod runtime validation, and Tailwind CSS.",
    image:
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1200&h=800&fit=crop",
    tags: ["Next.js", "Spa", "Booking", "i18n", "Tailwind"],
    github: "https://github.com/Mykhailo-Zhuk/mvp-spa-booking-website-canada",
    demo: "https://mvp-spa-booking-website-canada.vercel.app",
    featured: true,
    metrics: [
      { label: "Market", value: "Canada" },
      { label: "i18n", value: "UA/EN" },
      { label: "Stack", value: "Next.js 14" },
    ],
  },
  {
    id: "dropship-landing",
    title: "Dropship Landing (MIST.UA)",
    description:
      "Production-ready e-commerce landing template for drop-ship clothing stores. Hero, benefits, gallery, reviews, FAQ accordion, order form, payment provider stubs (LiqPay/Fondy/WayForPay).",
    image:
      "https://images.unsplash.com/photo-1556742111-a301076d9d18?w=1200&h=800&fit=crop",
    tags: ["React", "Vite", "TypeScript", "Tailwind v4", "framer-motion"],
    github: "https://github.com/Mykhailo-Zhuk/dropship-landing",
    demo: "https://dropship-landing-theta.vercel.app/",
    featured: true,
    metrics: [
      { label: "Build", value: "Vite SPA" },
      { label: "Templates", value: "Reusable" },
      { label: "UA payments", value: "Integrated" },
    ],
  },
  {
    id: "vlob-landing",
    title: "VLOB Landing — Kids Coding Course",
    description:
      "Landing page for a kids' programming school with Telegram bot integration, hero animations, and fully responsive design.",
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200&h=800&fit=crop",
    tags: ["Next.js", "Landing", "Education", "Telegram Bot"],
    github: "https://github.com/Mykhailo-Zhuk/vlob-landing",
    demo: "https://vlob-landing.vercel.app",
    featured: true,
    metrics: [
      { label: "Audience", value: "Kids + parents" },
      { label: "Integration", value: "Telegram Bot" },
      { label: "Delivery", value: "Fast MVP" },
    ],
  },
  {
    id: "mvp-iron-master",
    title: "СТО IRON MASTER",
    description:
      "MVP for an auto-service (СТО) network with Google-style booking form, admin panel, and real-time bookings. Next.js 14 + Zod validation + Framer Motion animations.",
    image:
      "https://images.unsplash.com/photo-1486754735734-325b5831c3ad?w=1200&h=800&fit=crop",
    tags: ["Next.js", "SaaS", "Booking", "MVP", "Tailwind"],
    github: "https://github.com/Mykhailo-Zhuk/mvp-iron-master",
    demo: "https://mvp-iron-master.vercel.app",
    featured: true,
    metrics: [
      { label: "Booking", value: "Real-time" },
      { label: "Admin", value: "Full panel" },
      { label: "Form", value: "Google-style" },
    ],
  },
  {
    id: "client-hub",
    title: "Client Hub — Project Portal",
    description:
      "Public dashboard + per-client magic-link portal + agent console for project tracking. Real-time updates, comments, statistics with charts. Built for transparency between dev and client.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop",
    tags: ["Next.js", "SaaS", "Portal", "Magic Link", "Charts"],
    github: "https://github.com/Mykhailo-Zhuk/client-hub",
    demo: "https://temporary-brisk-crimson-sd1r9ww.vercel.app",
    featured: true,
    metrics: [
      { label: "Auth", value: "Magic-link" },
      { label: "Console", value: "Agent UI" },
      { label: "Updates", value: "Real-time" },
    ],
  },
];