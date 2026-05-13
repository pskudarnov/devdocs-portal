import Link from "next/link";
import type { DocItem } from "@/data/docs";
import { Clock, BarChart, ArrowRight } from "lucide-react";

export function DocCard({ doc }: { doc: DocItem }) {
  return (
    <article className="group relative flex min-h-64 flex-col rounded-lg border border-outline-variant/20 bg-surface-container-high p-5 transition-colors hover:border-primary/50 hover:bg-surface-bright hover:shadow-xl hover:shadow-primary/5">
      <div className="mb-6 flex items-center justify-between gap-3">
        <span className="rounded-full border border-primary/20 bg-primary/10 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-primary">
          {doc.category}
        </span>
        <div className="flex items-center gap-1.5 text-on-surface-variant/60">
          <Clock className="h-3.5 w-3.5" />
          <span className="text-[10px] font-bold uppercase tracking-widest">{doc.readTime}</span>
        </div>
      </div>

      <div className="flex-1">
        <h3 className="mb-3 text-xl font-bold text-on-surface transition-colors group-hover:text-primary">
          <Link href={`/docs/${doc.slug}`} className="rounded-md">
            {doc.title}
          </Link>
        </h3>
        <p className="line-clamp-3 text-sm leading-relaxed text-on-surface-variant opacity-85 transition-opacity group-hover:opacity-100">
          {doc.description}
        </p>
      </div>

      <div className="mt-8 flex items-center justify-between gap-4 border-t border-outline-variant/10 pt-5">
        <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">
          <BarChart className="h-3.5 w-3.5 text-primary/60" />
          <span>{doc.difficulty}</span>
        </div>
        <Link
          href={`/docs/${doc.slug}`}
          aria-label={`Read ${doc.title}`}
          className="inline-flex shrink-0 items-center gap-2 rounded-md text-sm font-bold text-primary transition-colors hover:text-on-surface"
        >
          View Guide
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </article>
  );
}
