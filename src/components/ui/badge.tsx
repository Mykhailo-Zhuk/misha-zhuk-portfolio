"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  className?: string;
}

export function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-border bg-card px-2.5 py-1 text-xs font-medium text-foreground/80 transition-colors hover:bg-muted",
        className
      )}
    >
      {children}
    </span>
  );
}

export function MotionBadge({ children }: { children: ReactNode }) {
  return (
    <motion.span
      whileHover={{ y: -2 }}
      className="inline-flex items-center rounded-full border border-border bg-card px-2.5 py-1 text-xs font-medium text-foreground/80"
    >
      {children}
    </motion.span>
  );
}