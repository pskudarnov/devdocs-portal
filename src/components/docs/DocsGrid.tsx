import type { DocItem } from "@/data/docs";
import { DocCard } from "@/components/docs/DocCard";

export function DocsGrid({ docs }: { docs: DocItem[] }) {
  if (!docs.length)
    return (
      <div className="rounded-2xl border border-dashed border-slate-300 p-10 text-center text-slate-600">
        No docs found for selected filters.
      </div>
    );
  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
      {docs.map((doc) => (
        <DocCard key={doc.id} doc={doc} />
      ))}
    </div>
  );
}
