import { clsx } from "clsx";

export function Badge({ label, className }: { label: string; className?: string }) {
  return (
    <span
      className={clsx(
        "rounded-full border border-primary/20 bg-primary/10 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-primary",
        className,
      )}
    >
      {label}
    </span>
  );
}
