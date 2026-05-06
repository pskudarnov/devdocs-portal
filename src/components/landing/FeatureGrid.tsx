import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";

const items = ["Searchable docs", "Structured navigation", "Code examples", "SEO-ready pages"];

export function FeatureGrid() {
  return (
    <section className="py-10">
      <SectionHeading title="Portal features" />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {items.map((item) => (
          <Card key={item}>
            <p className="text-slate-700">{item}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}
