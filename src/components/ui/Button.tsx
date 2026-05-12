import type { ButtonHTMLAttributes } from "react";
import { clsx } from "clsx";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & { 
  variant?: "primary" | "secondary" | "ghost" | "outline" 
};

export function Button({ type = "button", variant = "primary", className, ...props }: Props) {
  const variants = {
    primary: "bg-primary-container text-on-primary-container hover:bg-primary border border-primary/50 shadow-[0_0_20px_rgba(77,142,255,0.1)]",
    secondary: "bg-surface-container-highest text-on-surface hover:bg-surface-variant border border-outline-variant/30",
    outline: "bg-transparent border border-outline-variant/30 text-on-surface hover:border-primary/50 hover:bg-surface-container",
    ghost: "bg-transparent text-on-surface-variant hover:text-primary hover:bg-surface-variant/30",
  };

  return (
    <button
      type={type}
      className={clsx(
        "inline-flex items-center justify-center rounded-xl px-6 py-2.5 text-sm font-bold transition-all active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 disabled:opacity-50 disabled:pointer-events-none",
        variants[variant],
        className,
      )}
      {...props}
    />
  );
}
