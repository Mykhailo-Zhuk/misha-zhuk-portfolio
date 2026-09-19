import Link from "next/link";
import { Github, Mail, Send, Linkedin, Phone, Calendar, MessageSquare, Twitter } from "lucide-react";
import { cn } from "@/lib/utils";

type FooterLink = {
  href: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  /** Optional classes applied to the <Icon /> itself, useful for brand colors. */
  iconClassName?: string;
};

const footerLinks: FooterLink[] = [
  // Brand colors stay vivid in any theme; contrast is enforced by Tailwind variants.
  {
    href: "https://github.com/Mykhailo-Zhuk",
    label: "GitHub",
    icon: Github,
    iconClassName: "text-[#181717] dark:text-white",
  },
  { href: "mailto:mzhuk.gth@gmail.com", label: "Email", icon: Mail },
  { href: "https://t.me/Zhuk_Mykhailo", label: "Telegram", icon: Send },
  { href: "https://www.linkedin.com/in/mykhailo-zhuk-8720a8203/", label: "LinkedIn", icon: Linkedin },
  { href: "https://wa.me/380674966309", label: "WhatsApp", icon: Phone },
  // Twitter/X brand blue reads well on both light and dark backgrounds.
  {
    href: "https://x.com/Mykhailo_Zhuk",
    label: "Twitter / X",
    icon: Twitter,
    iconClassName: "text-[#1DA1F2]",
  },
  { href: "https://calendly.com/mzhuk-gth", label: "Calendly", icon: Calendar },
];

// Discord has no public URL — show as a non-clickable badge with a tooltip-like label.
const footerBadges = [
  { label: "Discord: zhuk_mykhailo", icon: MessageSquare },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 text-sm text-muted-foreground sm:flex-row sm:px-6">
        <div className="flex items-center gap-2">
          <span className="flex h-6 w-6 items-center justify-center rounded-md bg-gradient-to-br from-[#7C5CFC] to-[#5B9CFF] text-xs font-bold text-white">
            M
          </span>
          <span>© {new Date().getFullYear()} Mykhailo Zhuk</span>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-4">
          {footerLinks.map(({ href, label, icon: Icon, iconClassName }) => (
            <Link
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="transition-colors hover:text-foreground"
              aria-label={label}
              title={label}
            >
              {/* Brand-colored icons override the parent's text color so they
                  stay visible in both light and dark mode. Other icons inherit
                  text-muted-foreground → text-foreground on hover. */}
              <Icon className={cn("h-4.5 w-4.5", iconClassName)} />
            </Link>
          ))}
          {footerBadges.map(({ label, icon: Icon }) => (
            <span
              key={label}
              className="flex items-center gap-1.5 text-xs"
              aria-label={label}
              title={label}
            >
              <Icon className="h-4.5 w-4.5" />
            </span>
          ))}
        </div>
      </div>
    </footer>
  );
}
