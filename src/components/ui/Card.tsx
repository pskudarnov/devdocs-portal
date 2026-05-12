import type { ReactNode } from "react";

export function Card({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={`rounded-2xl border border-outline-variant/20 bg-surface-container p-6 shadow-xl transition-all hover:border-primary/30 ${className ?? ""}`}>
      {children}
    </div>
  );
}
