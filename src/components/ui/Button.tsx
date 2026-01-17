import { forwardRef } from "react";
import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-xl font-semibold transition-all duration-200",
          "focus:outline-none focus:ring-2 focus:ring-[#7E22CE] dark:focus:ring-[#C084FC] focus:ring-offset-2 focus:ring-offset-surface",
          "disabled:opacity-50 disabled:cursor-not-allowed",
          {
            "bg-brand-yellow text-gray-900 hover:bg-yellow-300":
              variant === "primary",
            "bg-brand-purple text-white hover:bg-purple-600":
              variant === "secondary",
            "bg-transparent text-brand-lavender hover:bg-white/5":
              variant === "ghost",
          },
          {
            "px-4 py-2 text-sm": size === "sm",
            "px-6 py-3 text-base": size === "md",
            "px-8 py-4 text-lg": size === "lg",
          },
          className
        )}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";
