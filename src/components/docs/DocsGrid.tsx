import type { DocItem } from "@/data/docs";
import { DocCard } from "@/components/docs/DocCard";
import { Search } from "lucide-react";

export function DocsGrid({ docs }: { docs: DocItem[] }) {
  if (!docs.length)
    return (
      <div className="rounded-lg border border-dashed border-outline-variant/35 bg-surface-container-low/50 p-10 text-center md:p-16">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-surface-variant text-on-surface-variant">
          <Search className="h-6 w-6" />
        </div>
        <h3 className="mb-2 text-lg font-bold text-on-surface">No articles found</h3>
        <p className="mx-auto max-w-xs text-sm text-on-surface-variant">
          Try adjusting your search or filters to find what you&apos;re looking for.
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
