"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";
import { fadeInUp, viewportOnce } from "@/lib/animations";
import { cn } from "@/lib/utils";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  variants?: Variants;
  /** Delay before animation starts (seconds) */
  delay?: number;
  /** Only animate once when entering viewport */
  once?: boolean;
}

export function AnimatedSection({
  children,
  className,
  variants = fadeInUp,
  delay = 0,
  once = true,
}: AnimatedSectionProps) {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={once ? viewportOnce : { amount: 0.2 }}
      variants={variants}
      transition={{ delay }}
      className={cn(className)}
    >
      {children}
    </motion.section>
  );
}
