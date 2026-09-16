import type { Project } from "@/lib/types";

export const projects: Project[] = [
  {
    id: "universal-service-template",
    title: "Universal Service Template",
    description:
      "Open-source SaaS template for restaurants, cafes, salons & local businesses. Production-ready with admin panel, Telegram bot, LiqPay payments, i18n (UA/EN/RU), and dark/light themes.",
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
    id: "content-repurposer",
    title: "Content Repurposer",
    description:
      "AI pipeline (YouTube → Blog → Twitter) using FastAPI + Celery + Redis. Async architecture with distributed task queue, retries, and result tracking.",
    image:
      "https://images.unsplash.com/photo-1626814026160-2237a95fc5d5?w=1200&h=800&fit=crop",
    tags: ["AI", "FastAPI", "Celery", "Redis", "Python"],
    github: "https://github.com/Mykhailo-Zhuk/content-repurposer",
    demo: null,
    featured: true,
    metrics: [
      { label: "Pipeline", value: "Async" },
      { label: "Queue", value: "Celery+Redis" },
      { label: "Stack", value: "Full-stack" },
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
    demo: null,
    featured: true,
    metrics: [
      { label: "Build", value: "Vite SPA" },
      { label: "Templates", value: "Reusable" },
      { label: "UA payments", value: "Integrated" },
    ],
  },
  {
    id: "conference-ei",
    title: "Conference European Integration",
    description:
      "Corporate site for international conference with full i18n (UA/EN/PL). Program, speakers, registration — production-ready with 46K lines of TypeScript and Embla Carousel auto-scroll.",
    image:
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=1200&h=800&fit=crop",
    tags: ["Next.js 14", "TypeScript", "DaisyUI", "Embla Carousel", "i18n"],
    github: null,
    demo: "https://conference-ei.vercel.app",
    featured: true,
    metrics: [
      { label: "Delivery", value: "14 days" },
      { label: "Languages", value: "3" },
      { label: "Production", value: "Live" },
    ],
  },
  {
    id: "bookhub",
    title: "BookHub — Supabase E-commerce",
    description:
      "Full-stack e-commerce with cart, checkout, admin panel. PostgreSQL via Supabase with PL/pgSQL stored procedures. Compact 121KB codebase, production-deployed on Vercel.",
    image:
      "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=1200&h=800&fit=crop",
    tags: ["Next.js", "Supabase", "PostgreSQL", "PL/pgSQL", "E-commerce"],
    github: null,
    demo: "https://bookhub-new.vercel.app",
    featured: true,
    metrics: [
      { label: "DB", value: "Supabase" },
      { label: "Storage", value: "PL/pgSQL" },
      { label: "Status", value: "Live" },
    ],
  },
];