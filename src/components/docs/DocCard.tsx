import Link from "next/link";
import type { DocItem } from "@/data/docs";
import { Clock, BarChart, ArrowRight } from "lucide-react";

export function DocCard({ doc }: { doc: DocItem }) {
  return (
    <article className="group relative flex min-h-72 flex-col rounded-lg border border-outline-variant/20 bg-surface-container-high p-5 transition-colors hover:border-primary/50 hover:bg-surface-bright hover:shadow-xl hover:shadow-primary/5">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
        <span className="rounded-full border border-primary/20 bg-primary/10 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-primary">
          {doc.category}
        </span>
        {doc.popularity >= 90 ? (
          <span className="rounded-full border border-tertiary/20 bg-tertiary/10 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-tertiary">
            Popular
          </span>
        ) : null}
      </div>
      <h3 className="mb-2 text-xl font-bold text-on-surface transition-colors group-hover:text-primary">
        <Link href={`/docs/${doc.slug}`}>{doc.title}</Link>
      </h3>
      <p className="line-clamp-3 text-sm leading-relaxed text-on-surface-variant">
        {doc.description}
      </p>
      <div className="mt-3 flex flex-wrap gap-1.5">
        {doc.tags.slice(0, 4).map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-outline-variant/25 px-2 py-0.5 text-[10px] uppercase tracking-wide text-on-surface-variant"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="mt-auto pt-5">
        <div className="mb-3 flex items-center justify-between text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">
          <span className="inline-flex items-center gap-1">
            <BarChart className="h-3.5 w-3.5 text-primary/60" />
            {doc.difficulty}
          </span>
          <span className="inline-flex items-center gap-1">
            <Clock className="h-3.5 w-3.5" />
            {doc.readTime}
          </span>
          <span>{doc.updatedAt}</span>
        </div>
        <Link
          href={`/docs/${doc.slug}`}
          className="inline-flex items-center gap-2 text-sm font-bold text-primary transition-colors hover:text-on-surface"
        >
          Read article
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </article>
  );
}
