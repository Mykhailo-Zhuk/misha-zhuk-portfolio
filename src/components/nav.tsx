"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";

// Fixed nav height offset (h-16 = 4rem = 64px). Used to compensate for the
// fixed header so anchored sections are not hidden underneath it.
const NAV_OFFSET = 64;

const navLinks = [
  { href: "#hero", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#stack", label: "Stack" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    // Always prevent the browser's default jump so we control the scroll
    // (smooth + offset for fixed nav). Previously this lived AFTER an
    // `if (!el) return;` guard, which silently fell back to the default
    // anchor jump with no offset — appearing as "nav doesn't work".
    e.preventDefault();

    const id = href.replace(/^#/, "");
    const el = document.getElementById(id);

    // Close mobile menu regardless of whether we found the target.
    setMobileOpen(false);

    if (!el) {
      // Section not yet in DOM (e.g. very early click before sections
      // hydrate). Still update the URL so refresh/back behaves correctly.
      if (window.history && window.history.pushState) {
        window.history.pushState(null, "", href);
      }
      return;
    }

    // Account for fixed nav (h-16 = 4rem).
    const top = el.getBoundingClientRect().top + window.scrollY - NAV_OFFSET;
    window.scrollTo({ top, behavior: "smooth" });

    // Update URL hash without triggering another default jump.
    if (window.history && window.history.pushState) {
      window.history.pushState(null, "", href);
    }
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border/60 bg-background/70 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link
          href="/"
          className="group flex items-center gap-2 text-sm font-semibold tracking-tight"
        >
          <span className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[#7C5CFC] to-[#5B9CFF] text-white shadow-sm">
            M
          </span>
          <span className="hidden sm:inline">Mykhailo Zhuk</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="rounded-md px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "#contact")}
            className="hidden rounded-full bg-foreground px-4 py-1.5 text-sm font-medium text-background transition-transform hover:scale-[1.02] sm:inline-block"
          >
            Hire me
          </a>
          <button
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
            className="flex h-9 w-9 items-center justify-center rounded-md border border-border bg-card md:hidden"
          >
            <div className="flex flex-col gap-1">
              <span
                className={cn(
                  "h-0.5 w-4 bg-foreground transition-transform",
                  mobileOpen && "translate-y-1.5 rotate-45"
                )}
              />
              <span
                className={cn(
                  "h-0.5 w-4 bg-foreground transition-opacity",
                  mobileOpen && "opacity-0"
                )}
              />
              <span
                className={cn(
                  "h-0.5 w-4 bg-foreground transition-transform",
                  mobileOpen && "-translate-y-1.5 -rotate-45"
                )}
              />
            </div>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden border-t border-border bg-background md:hidden"
          >
            <nav className="flex flex-col gap-1 px-4 py-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, "#contact")}
                className="mt-2 rounded-full bg-foreground px-4 py-2 text-center text-sm font-medium text-background"
              >
                Hire me
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}