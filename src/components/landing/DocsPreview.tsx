import { docs } from "@/data/docs";
import { DocCard } from "@/components/docs/DocCard";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function DocsPreview() {
  return (
    <section className="py-10">
      <SectionHeading title="Popular docs" />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {docs.slice(0, 4).map((doc) => (
          <DocCard key={doc.id} doc={doc} />
        ))}
      </div>
    </section>
  );
}
