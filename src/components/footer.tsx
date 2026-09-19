import Link from "next/link";
import { Github, Mail, Send, Linkedin, Phone, Calendar, MessageSquare, Twitter } from "lucide-react";

const footerLinks = [
  { href: "https://github.com/Mykhailo-Zhuk", label: "GitHub", icon: Github },
  { href: "mailto:mzhuk.gth@gmail.com", label: "Email", icon: Mail },
  { href: "https://t.me/Zhuk_Mykhailo", label: "Telegram", icon: Send },
  { href: "https://www.linkedin.com/in/mykhailo-zhuk-8720a8203/", label: "LinkedIn", icon: Linkedin },
  { href: "https://wa.me/380674966309", label: "WhatsApp", icon: Phone },
  { href: "https://x.com/Mykhailo_Zhuk", label: "Twitter / X", icon: Twitter },
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
          {footerLinks.map(({ href, label, icon: Icon }) => (
            <Link
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="transition-colors hover:text-foreground"
              aria-label={label}
              title={label}
            >
              <Icon className="h-4.5 w-4.5" />
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
