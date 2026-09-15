import Link from "next/link";
import { Github, Mail, Send } from "lucide-react";

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
        <div className="flex items-center gap-4">
          <Link
            href="https://github.com/Mykhailo-Zhuk"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-foreground"
            aria-label="GitHub"
          >
            <Github className="h-4.5 w-4.5" />
          </Link>
          <Link
            href="mailto:misha@zhuk.dev"
            className="transition-colors hover:text-foreground"
            aria-label="Email"
          >
            <Mail className="h-4.5 w-4.5" />
          </Link>
          <Link
            href="https://t.me/mzhuk"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-foreground"
            aria-label="Telegram"
          >
            <Send className="h-4.5 w-4.5" />
          </Link>
        </div>
      </div>
    </footer>
  );
}