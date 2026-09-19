"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail, Sparkles } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden border-b border-border">
      {/* Gradient mesh background */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-30 dark:opacity-40"
        aria-hidden
      >
        <div className="absolute left-1/2 top-1/4 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-gradient-to-br from-[#7C5CFC] via-[#5B9CFF] to-transparent blur-3xl" />
        <div className="absolute right-0 top-0 h-[400px] w-[400px] rounded-full bg-gradient-to-bl from-[#7C5CFC]/40 to-transparent blur-3xl" />
        <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-gradient-to-tr from-[#5B9CFF]/30 to-transparent blur-3xl" />
      </div>

      {/* Subtle grid */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-grid-pattern opacity-50" aria-hidden />

      <div className="mx-auto flex max-w-6xl flex-col items-center px-4 pb-20 pt-32 text-center sm:px-6 sm:pt-40">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
          </span>
          Available for new projects · Q4 2026
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="text-balance text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
        >
          Hi, I&apos;m Mykhailo —
          <br className="hidden sm:block" />{" "}
          <span className="bg-gradient-to-br from-[#7C5CFC] via-[#5B9CFF] to-[#7C5CFC] bg-gradient-to-r bg-clip-text text-transparent animate-gradient-shift bg-[length:200%_auto]">
            I build SaaS for local businesses
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-6 max-w-2xl text-balance text-base text-muted-foreground sm:text-lg"
        >
          Full-stack developer specializing in Next.js, TypeScript, and
          AI-augmented workflows. I help restaurants, salons, and small
          businesses launch production-grade web apps — fast.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-10 flex flex-col items-center gap-3 sm:flex-row"
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-transform hover:scale-[1.02]"
          >
            See my work
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="mailto:mzhuk.gth@gmail.com"
            className="group inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-medium transition-colors hover:bg-muted"
          >
            <Mail className="h-4 w-4" />
            Contact me
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 grid w-full max-w-3xl grid-cols-2 gap-6 sm:grid-cols-4"
        >
          {[
            { value: "67+", label: "Projects shipped" },
            { value: "4 yrs", label: "Production code" },
            { value: "MIT", label: "Open-source" },
            { value: "15+", label: "Live deployments" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl border border-border bg-card/50 p-4 backdrop-blur transition-colors hover:bg-card"
            >
              <div className="text-2xl font-bold sm:text-3xl">{stat.value}</div>
              <div className="mt-1 text-xs text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-10 flex items-center gap-1.5 text-xs text-muted-foreground"
        >
          <Sparkles className="h-3.5 w-3.5 text-[#7C5CFC]" />
          <span>AI-assisted workflow · 2-3× faster delivery</span>
        </motion.div>
      </div>
    </section>
  );
}