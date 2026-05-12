import type { DocItem } from "@/data/docs";
import { DocCard } from "@/components/docs/DocCard";
import { Search } from "lucide-react";

export function DocsGrid({ docs }: { docs: DocItem[] }) {
  if (!docs.length)
    return (
      <div className="rounded-2xl border border-dashed border-outline-variant/30 p-16 text-center bg-surface-container-low/50">
        <div className="mx-auto w-12 h-12 rounded-full bg-surface-variant flex items-center justify-center mb-4 text-on-surface-variant">
           <Search className="h-6 w-6" />
        </div>
        <h3 className="text-lg font-bold text-on-surface mb-2">No articles found</h3>
        <p className="text-sm text-on-surface-variant max-w-xs mx-auto">
          Try adjusting your search or filters to find what you're looking for.
        </p>
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
