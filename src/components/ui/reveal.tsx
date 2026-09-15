"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import type { MotionProps } from "framer-motion";

/**
 * A drop-in replacement for `motion.div initial={...} whileInView={...}`.
 * Triggers animation on real scroll via IntersectionObserver (no once flag — animates on each scroll-in).
 * Fallback: if reduced motion is preferred, content shows immediately.
 */
export function Reveal({
  children,
  delay = 0,
  y = 12,
  duration = 0.4,
  amount = 0.05,
  ...rest
}: {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  duration?: number;
  amount?: number;
} & Omit<MotionProps, "initial" | "whileInView" | "viewport">) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      setVisible(true);
      return;
    }
    const node = ref.current;
    if (!node) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
          }
        });
      },
      { threshold: amount, rootMargin: "0px 0px -10% 0px" }
    );
    obs.observe(node);
    return () => obs.disconnect();
  }, [amount, prefersReducedMotion]);

  return (
    <motion.div
      ref={ref}
      initial={prefersReducedMotion ? false : { opacity: 0, y }}
      animate={visible ? { opacity: 1, y: 0 } : prefersReducedMotion ? { opacity: 1 } : undefined}
      transition={{ duration, delay, ease: "easeOut" }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}