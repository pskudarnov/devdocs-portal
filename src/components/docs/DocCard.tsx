import Link from "next/link";
import type { DocItem } from "@/data/docs";
import { Clock, BarChart, ArrowRight } from "lucide-react";

export function DocCard({ doc }: { doc: DocItem }) {
  return (
    <article className="group relative flex flex-col rounded-2xl border border-outline-variant/10 bg-surface-container-high p-6 transition-all duration-300 hover:border-primary/50 hover:bg-surface-bright hover:shadow-2xl hover:shadow-primary/5">
      <div className="flex items-center justify-between mb-6">
        <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-primary border border-primary/20">
          {doc.category}
        </span>
        <div className="flex items-center gap-1.5 text-on-surface-variant/60">
          <Clock className="h-3.5 w-3.5" />
          <span className="text-[10px] font-bold uppercase tracking-widest">{doc.readTime}</span>
        </div>
      </div>
      
      <div className="flex-1">
        <h3 className="text-xl font-bold text-on-surface group-hover:text-primary transition-colors mb-3">
          {doc.title}
        </h3>
        <p className="text-sm text-on-surface-variant line-clamp-2 leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity">
          {doc.description}
        </p>
      </div>
      
      <div className="mt-8 flex items-center justify-between pt-6 border-t border-outline-variant/10">
        <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">
          <BarChart className="h-3.5 w-3.5 text-primary/60" />
          <span>{doc.difficulty}</span>
        </div>
        <Link
          href={`/docs/${doc.slug}`}
          className="inline-flex items-center gap-2 text-sm font-bold text-primary group-hover:gap-3 transition-all"
        >
          View Guide
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </article>
  );
}
