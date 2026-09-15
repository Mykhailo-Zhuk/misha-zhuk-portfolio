"use client";

import Image from "next/image";
import { Reveal } from "@/components/ui/reveal";
import { Badge } from "@/components/ui/badge";

const stackBadges = [
  "Next.js 14",
  "TypeScript",
  "Tailwind CSS",
  "PostgreSQL",
  "Supabase",
  "Telegram Bot API",
  "LiqPay",
  "framer-motion",
  "Zod",
  "React Hook Form",
  "next-intl",
];

export function About() {
  return (
    <section
      id="about"
      className="border-b border-border bg-background py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <div className="grid items-center gap-12 md:grid-cols-[200px_1fr] lg:grid-cols-[240px_1fr]">
            <div className="relative mx-auto md:mx-0">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-[#7C5CFC] to-[#5B9CFF] opacity-50 blur" />
              <Image
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400&h=400&fit=crop&crop=face"
                alt="Mykhailo Zhuk"
                width={240}
                height={240}
                priority
                className="relative h-48 w-48 rounded-2xl object-cover shadow-lg md:h-60 md:w-60"
              />
            </div>

            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  About me
                </h2>
                <div className="mt-2 h-1 w-12 rounded-full bg-gradient-to-r from-[#7C5CFC] to-[#5B9CFF]" />
              </div>

              <div className="space-y-4 text-muted-foreground">
                <p>
                  I&apos;m a full-stack developer with{" "}
                  <span className="font-semibold text-foreground">4 years</span>{" "}
                  of production experience, focused on building SaaS for local
                  businesses — restaurants, cafes, salons, auto services,
                  educational platforms. I work primarily with{" "}
                  <span className="font-semibold text-foreground">Next.js</span>,{" "}
                  <span className="font-semibold text-foreground">TypeScript</span>
                  , and{" "}
                  <span className="font-semibold text-foreground">
                    PostgreSQL
                  </span>
                  .
                </p>
                <p>
                  My approach is template-driven: I maintain an open-source{" "}
                  <a
                    href="https://universal-service-template.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-foreground underline decoration-[#7C5CFC] underline-offset-4 transition-colors hover:text-[#7C5CFC]"
                  >
                    Universal Service Template
                  </a>{" "}
                  that lets me ship a new client project in 3-5 days instead of 2-3
                  weeks. I integrate UA payment providers (LiqPay, MonoPay,
                  Fondy, WayForPay) and Telegram Bot notifications out of the box.
                </p>
                <p>
                  I use AI-assisted tools (Claude Code, GPT-5) as a competitive
                  advantage — delivering production-grade work 2-3× faster than
                  average.
                </p>
              </div>

              <div>
                <div className="mb-3 text-sm font-medium text-foreground">
                  Primary stack
                </div>
                <div className="flex flex-wrap gap-2">
                  {stackBadges.map((badge) => (
                    <Badge key={badge}>{badge}</Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}