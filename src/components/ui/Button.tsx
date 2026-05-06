import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & { variant?: "primary" | "ghost" };

export function Button({ type = "button", variant = "primary", className, ...props }: Props) {
  return (
    <button
      type={type}
      className={cn(
        "inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2",
        variant === "primary"
          ? "bg-blue-600 text-white hover:bg-blue-500"
          : "bg-slate-100 text-slate-900 hover:bg-slate-200",
        className,
      )}
      {...props}
    />
  );
}
