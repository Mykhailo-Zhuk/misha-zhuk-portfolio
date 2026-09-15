"use client";

import { motion } from "framer-motion";
import {
  Database,
  Brain,
  Cloud,
  Layers,
  Bot,
  Sparkles,
  Code2,
  Server,
  Workflow,
  GitBranch,
  Shield,
  Boxes,
} from "lucide-react";
import { Reveal } from "@/components/ui/reveal";

interface StackGroup {
  title: string;
  icon: React.ReactNode;
  accent: string;
  items: string[];
}

const stackGroups: StackGroup[] = [
  {
    title: "Frontend",
    icon: <Layers className="h-5 w-5" />,
    accent: "from-[#7C5CFC] to-[#5B9CFF]",
    items: [
      "Next.js 14 (App Router)",
      "React 18",
      "TypeScript (strict)",
      "Tailwind CSS",
      "framer-motion",
      "shadcn/ui-style",
      "lucide-react",
      "React Hook Form",
      "Zod (runtime validation)",
      "next-intl (i18n UA/EN/RU)",
      "DaisyUI",
      "Embla Carousel",
      "qrcode.react",
    ],
  },
  {
    title: "Backend & Database",
    icon: <Database className="h-5 w-5" />,
    accent: "from-[#5B9CFF] to-[#7C5CFC]",
    items: [
      "PostgreSQL",
      "Supabase (Realtime + Auth)",
      "PL/pgSQL stored procedures",
      "Next.js API routes (REST)",
      "Webhooks",
      "Python (FastAPI-style)",
    ],
  },
  {
    title: "AI / ML",
    icon: <Brain className="h-5 w-5" />,
    accent: "from-[#7C5CFC] to-pink-500",
    items: [
      "Claude Code (Sonnet/Opus)",
      "OpenAI API (GPT-4/GPT-5)",
      "Anthropic API",
      "Agent orchestration",
      "RAG patterns",
      "Multi-model routing (Omniroute)",
    ],
  },
  {
    title: "Integrations",
    icon: <Bot className="h-5 w-5" />,
    accent: "from-[#5B9CFF] to-cyan-400",
    items: [
      "Telegram Bot API",
      "LiqPay / MonoPay",
      "Fondy / WayForPay",
      "Stripe",
      "Google Sheets API",
      "Vercel (deployment)",
    ],
  },
  {
    title: "DevOps & Tools",
    icon: <Cloud className="h-5 w-5" />,
    accent: "from-purple-400 to-[#7C5CFC]",
    items: [
      "Vercel",
      "GitHub Actions",
      "CI/CD pipelines",
      "ESLint + Prettier",
      "pnpm / npm",
      "MIT open-source",
    ],
  },
];

const highlights = [
  {
    icon: <Sparkles className="h-4 w-4" />,
    label: "AI-augmented",
    value: "2-3× faster delivery",
  },
  {
    icon: <Code2 className="h-4 w-4" />,
    label: "Type safety",
    value: "TS strict + Zod",
  },
  {
    icon: <Server className="h-4 w-4" />,
    label: "Production",
    value: "15+ Vercel deploys",
  },
  {
    icon: <Workflow className="h-4 w-4" />,
    label: "Templates",
    value: "MIT-licensed UST",
  },
  {
    icon: <GitBranch className="h-4 w-4" />,
    label: "Open-source",
    value: "Universal template",
  },
  {
    icon: <Shield className="h-4 w-4" />,
    label: "Validated",
    value: "Zod runtime checks",
  },
];

export function Stack() {
  return (
    <section
      id="stack"
      className="relative overflow-hidden border-b border-border bg-background py-20 sm:py-28"
    >
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-30"
        aria-hidden
      >
        <div className="absolute right-1/4 top-0 h-[300px] w-[300px] rounded-full bg-[#7C5CFC]/20 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-[300px] w-[300px] rounded-full bg-[#5B9CFF]/20 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Tech stack
          </h2>
          <div className="mt-2 h-1 w-12 rounded-full bg-gradient-to-r from-[#7C5CFC] to-[#5B9CFF]" />
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Production-grade tools I use daily. Production code in Next.js 14,
            TypeScript strict, and PostgreSQL — with deep integrations for the
            UA market.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {stackGroups.map((group, idx) => (
            <Reveal key={group.title} delay={Math.min(idx * 0.05, 0.25)}>
              <div className="group relative h-full overflow-hidden rounded-xl border border-border bg-card p-6 transition-colors hover:bg-card/80">
                <div
                  className={`absolute -right-12 -top-12 h-32 w-32 rounded-full bg-gradient-to-br ${group.accent} opacity-10 blur-2xl transition-opacity duration-500 group-hover:opacity-30`}
                />
                <div className="relative">
                  <div className="mb-4 flex items-center gap-3">
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br ${group.accent} text-white shadow-sm`}
                    >
                      {group.icon}
                    </div>
                    <h3 className="text-lg font-semibold">{group.title}</h3>
                  </div>
                  <ul className="space-y-1.5">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-foreground/40" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3}>
          <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {highlights.map((h) => (
              <div
                key={h.label}
                className="flex flex-col gap-1 rounded-lg border border-border bg-card/50 p-3 transition-colors hover:bg-card"
              >
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  {h.icon}
                  <span>{h.label}</span>
                </div>
                <div className="text-sm font-semibold">{h.value}</div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.4}>
          <motion.div
            className="mt-10 flex items-center justify-center gap-2 rounded-lg border border-border bg-card/40 px-4 py-3 text-sm text-muted-foreground"
          >
            <Boxes className="h-4 w-4 text-[#7C5CFC]" />
            <span>
              And 11 pet-projects · 60+ private repos · 23 forks in archive
            </span>
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}