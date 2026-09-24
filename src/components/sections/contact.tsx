"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Github,
  Mail,
  Send,
  MapPin,
  Linkedin,
  Twitter,
  Phone,
  Calendar,
  MessageSquare,
  Copy,
  Check,
} from "lucide-react";
import { Reveal } from "@/components/ui/reveal";

type ContactMethod = {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
  copyable?: boolean;
  accent: string;
  /** Color of the icon sitting on top of the accent gradient. */
  iconColor: string;
};

const contactMethods: ContactMethod[] = [
  {
    icon: <Mail className="h-5 w-5" />,
    label: "Email",
    value: "mzhuk.gth@gmail.com",
    href: "mailto:mzhuk.gth@gmail.com",
    accent: "from-[#7C5CFC] to-[#5B9CFF]",
    iconColor: "text-white",
  },
  {
    icon: <Github className="h-5 w-5" />,
    label: "GitHub",
    value: "@Mykhailo-Zhuk",
    href: "https://github.com/Mykhailo-Zhuk",
    accent: "from-[#24292e] to-[#0d1117]",
    iconColor: "text-white",
  },
  {
    icon: <Send className="h-5 w-5" />,
    label: "Telegram",
    value: "@Zhuk_Mykhailo",
    href: "https://t.me/Zhuk_Mykhailo",
    accent: "from-cyan-400 to-blue-500",
    iconColor: "text-white",
  },
  {
    icon: <Linkedin className="h-5 w-5" />,
    label: "LinkedIn",
    value: "mykhailo-zhuk-8720a8203",
    href: "https://www.linkedin.com/in/mykhailo-zhuk-8720a8203/",
    accent: "from-[#0A66C2] to-[#004182]",
    iconColor: "text-white",
  },
  {
    icon: <MessageSquare className="h-5 w-5" />,
    label: "Discord",
    value: "zhuk_mykhailo",
    copyable: true,
    accent: "from-[#5865F2] to-[#404EED]",
    iconColor: "text-white",
  },
  {
    icon: <Phone className="h-5 w-5" />,
    label: "WhatsApp",
    value: "+380 67 496 6309",
    href: "https://wa.me/380674966309",
    accent: "from-[#25D366] to-[#128C7E]",
    iconColor: "text-white",
  },
  {
    icon: <Twitter className="h-5 w-5" />,
    label: "Twitter / X",
    value: "@Mykhailo_Zhuk",
    href: "https://x.com/Mykhailo_Zhuk",
    accent: "from-black to-[#1a1a1a]",
    iconColor: "text-white",
  },
  {
    icon: <Calendar className="h-5 w-5" />,
    label: "Calendly",
    value: "mzhuk-gth",
    href: "https://calendly.com/mzhuk-gth",
    accent: "from-[#006BFF] to-[#00A2FF]",
    iconColor: "text-white",
  },
];

export function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async (value: string) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      // Fallback: no-op; copy UI will not flip but link is still usable.
    }
  };

  return (
    <section
      id="contact" className="scroll-mt-24"
      className="relative overflow-hidden border-b border-border bg-background py-20 pb-12 sm:py-28 sm:pb-16"
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
          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {contactMethods.map((method) => {
              const inner = (
                <>
                  <div
                    className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br ${method.accent} shadow-sm ${method.iconColor}`}
                  >
                    {method.icon}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-xs text-muted-foreground">
                      {method.label}
                    </div>
                    <div className="truncate text-sm font-medium">
                      {method.value}
                    </div>
                  </div>
                  {method.copyable && (
                    <span
                      className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors group-hover:border-foreground/30 group-hover:text-foreground"
                      aria-hidden
                    >
                      {copied ? (
                        <Check className="h-3.5 w-3.5" />
                      ) : (
                        <Copy className="h-3.5 w-3.5" />
                      )}
                    </span>
                  )}
                </>
              );

              const baseClass =
                "group flex items-center gap-3 rounded-xl border border-border bg-card p-4 text-left transition-all hover:border-foreground/20 hover:bg-card/80";

              if (method.href) {
                return (
                  <Link
                    key={method.label}
                    href={method.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={baseClass}
                  >
                    {inner}
                  </Link>
                );
              }

              return (
                <button
                  key={method.label}
                  type="button"
                  onClick={() => handleCopy(method.value)}
                  className={baseClass}
                  aria-label={`Copy ${method.label} handle: ${method.value}`}
                >
                  {inner}
                </button>
              );
            })}
          </div>
          {copied && (
            <div
              role="status"
              className="mt-3 text-xs text-muted-foreground"
            >
              Discord handle copied to clipboard
            </div>
          )}
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
