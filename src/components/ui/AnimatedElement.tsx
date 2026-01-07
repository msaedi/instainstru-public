"use client";

import type { ComponentType, ReactNode } from "react";
import { motion, type Variants, type HTMLMotionProps } from "framer-motion";
import { fadeInUp } from "@/lib/animations";
import { cn } from "@/lib/utils";

const MOTION_COMPONENTS = {
  div: motion.div,
  section: motion.section,
  article: motion.article,
  span: motion.span,
  p: motion.p,
  h1: motion.h1,
  h2: motion.h2,
  h3: motion.h3,
  h4: motion.h4,
  ul: motion.ul,
  li: motion.li,
  header: motion.header,
  footer: motion.footer,
  nav: motion.nav,
  main: motion.main,
  button: motion.button,
  a: motion.a,
  img: motion.img,
} as const;

type MotionTag = keyof typeof MOTION_COMPONENTS;

type AnimatedElementProps = {
  as?: MotionTag;
  variants?: Variants;
  delay?: number;
  className?: string;
  children?: ReactNode;
} & HTMLMotionProps<MotionTag>;

export function AnimatedElement({
  as = "div",
  variants = fadeInUp,
  delay = 0,
  className,
  children,
  ...props
}: AnimatedElementProps) {
  const Component = MOTION_COMPONENTS[as] as ComponentType<HTMLMotionProps<MotionTag>>;

  return (
    <Component
      variants={variants}
      transition={{ delay }}
      className={cn(className)}
      {...props}
    >
      {children}
    </Component>
  );
}
