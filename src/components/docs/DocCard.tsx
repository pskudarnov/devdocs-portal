import Link from "next/link";
import type { DocItem } from "@/data/docs";
import { Badge } from "@/components/ui/Badge";
import { formatDate } from "@/lib/format";

export function DocCard({ doc }: { doc: DocItem }) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="flex items-center justify-between">
        <Badge label={doc.category} />
        <span className="text-xs text-slate-500">{doc.readTime}</span>
      </div>
      <h3 className="mt-3 text-lg font-medium text-slate-900">{doc.title}</h3>
      <p className="mt-2 text-sm text-slate-600">{doc.description}</p>
      <p className="mt-3 text-xs text-slate-500">
        {doc.difficulty} · Updated {formatDate(doc.updatedAt)}
      </p>
      <Link
        href={`/docs/${doc.slug}`}
        className="mt-3 inline-block text-sm text-blue-700 hover:underline"
      >
        Details
      </Link>
    </article>
  );
}
