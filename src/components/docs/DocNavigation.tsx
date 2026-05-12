import Link from "next/link";
import { docs } from "@/data/docs";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function DocNavigation({ slug }: { slug: string }) {
  const idx = docs.findIndex((d) => d.slug === slug);
  const prev = idx > 0 ? docs[idx - 1] : null;
  const next = idx < docs.length - 1 ? docs[idx + 1] : null;

  return (
    <div className="grid gap-4 sm:grid-cols-2 mt-12">
      {prev ? (
        <Link 
          href={`/docs/${prev.slug}`}
          className="group flex flex-col items-start gap-2 rounded-2xl border border-outline-variant/20 bg-surface-container p-6 transition-all hover:border-primary/50 hover:bg-surface-bright"
        >
          <span className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-on-surface-variant group-hover:text-primary transition-colors">
            <ChevronLeft className="h-3 w-3" />
            Previous
          </span>
          <span className="text-lg font-bold text-on-surface truncate w-full">
            {prev.title}
          </span>
        </Link>
      ) : (
        <div />
      )}
      {next ? (
        <Link 
          href={`/docs/${next.slug}`}
          className="group flex flex-col items-end gap-2 rounded-2xl border border-outline-variant/20 bg-surface-container p-6 text-right transition-all hover:border-primary/50 hover:bg-surface-bright"
        >
          <span className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-on-surface-variant group-hover:text-primary transition-colors">
            Next
            <ChevronRight className="h-3 w-3" />
          </span>
          <span className="text-lg font-bold text-on-surface truncate w-full">
            {next.title}
          </span>
        </Link>
      ) : (
        <div />
      )}
    </div>
  );
}
