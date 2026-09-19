"use client";

import Link from "next/link";
import { ArrowRight, Github, Mail, Send, MapPin } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";

const contactMethods = [
  {
    icon: <Mail className="h-5 w-5" />,
    label: "Email",
    value: "mzhuk.gth@gmail.com",
    href: "mailto:mzhuk.gth@gmail.com",
    accent: "from-[#7C5CFC] to-[#5B9CFF]",
  },
  {
    icon: <Github className="h-5 w-5" />,
    label: "GitHub",
    value: "@Mykhailo-Zhuk",
    href: "https://github.com/Mykhailo-Zhuk",
    accent: "from-gray-700 to-gray-900 dark:from-gray-300 dark:to-gray-100",
  },
  {
    icon: <Send className="h-5 w-5" />,
    label: "Telegram",
    value: "@Zhuk_Mykhailo",
    href: "https://t.me/Zhuk_Mykhailo",
    accent: "from-cyan-400 to-blue-500",
  },
];

export function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden border-b border-border bg-background py-20 sm:py-28"
    >
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-50"
        aria-hidden
      >
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-[#7C5CFC]/30 via-[#5B9CFF]/20 to-transparent blur-3xl" />
      </div>

      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <Reveal>
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
            </span>
            Available · Q4 2026
          </div>

          <h2 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl">
            Let&apos;s build something{" "}
            <span className="bg-gradient-to-br from-[#7C5CFC] via-[#5B9CFF] to-[#7C5CFC] bg-clip-text text-transparent animate-gradient-shift bg-[length:200%_auto]">
              together
            </span>
          </h2>

          <p className="mt-4 text-balance text-base text-muted-foreground sm:text-lg">
            Have a project in mind? Whether it&apos;s a SaaS MVP, a landing
            page with Telegram bot, or a full e-commerce build — drop me a line
            and let&apos;s talk.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <Link
            href="mailto:mzhuk.gth@gmail.com"
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#7C5CFC] to-[#5B9CFF] px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-[#7C5CFC]/20 transition-transform hover:scale-[1.03]"
          >
            <Mail className="h-4 w-4" />
            mzhuk.gth@gmail.com
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-12 grid gap-3 sm:grid-cols-3">
            {contactMethods.map((method) => (
              <Link
                key={method.label}
                href={method.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 rounded-xl border border-border bg-card p-4 text-left transition-all hover:border-foreground/20 hover:bg-card/80"
              >
                <div
                  className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br ${method.accent} text-white shadow-sm`}
                >
                  {method.icon}
                </div>
                <div className="min-w-0">
                  <div className="text-xs text-muted-foreground">
                    {method.label}
                  </div>
                  <div className="truncate text-sm font-medium">
                    {method.value}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="mt-10 flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4" />
            <span>Ukraine · Remote-friendly · UTC+2</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}