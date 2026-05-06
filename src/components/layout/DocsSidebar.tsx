import Link from "next/link";
import { docs } from "@/data/docs";

export function DocsSidebar() {
  return (
    <aside className="hidden w-64 shrink-0 lg:block" aria-label="Docs sidebar">
      <div className="sticky top-24 rounded-xl border border-slate-200 bg-white p-4">
        <p className="mb-3 text-sm font-semibold text-slate-900">All docs</p>
        <nav className="space-y-2 text-sm">
          {docs.slice(0, 10).map((doc) => (
            <Link
              key={doc.id}
              href={`/docs/${doc.slug}`}
              className="block rounded-md px-2 py-1 hover:bg-slate-100"
            >
              {doc.title}
            </Link>
          ))}
        </nav>
      </div>
    </aside>
  );
}
