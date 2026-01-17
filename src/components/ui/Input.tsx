import { forwardRef } from "react";
import type { InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export const Input = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>(
  ({ className, type = "text", ...props }, ref) => {
    return (
      <input
        ref={ref}
        type={type}
        className={cn(
          "w-full rounded-xl border border-surface-border bg-surface-card px-4 py-2 text-surface-foreground placeholder:text-surface-muted",
          "focus:outline-none focus:ring-2 focus:ring-[#7E22CE] dark:focus:ring-[#C084FC] focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-900",
          className
        )}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";
