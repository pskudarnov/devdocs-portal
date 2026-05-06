import { changelog } from "@/data/changelog";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { formatDate } from "@/lib/format";

export default function ChangelogPage() {
  return (
    <section className="py-10">
      <h1 className="text-3xl font-semibold">Changelog</h1>
      <p className="mt-2 text-sm text-slate-600">Product and documentation updates over time.</p>
      <div className="mt-6 space-y-4">
        {changelog.map((entry) => (
          <Card key={entry.version}>
            <div className="flex flex-wrap items-center gap-2">
              <h2 className="text-lg font-semibold text-slate-900">v{entry.version}</h2>
              <Badge label={entry.type} />
              <span className="text-xs text-slate-500">{formatDate(entry.date)}</span>
            </div>
            <p className="mt-2 text-sm text-slate-700">{entry.title}</p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-700">
              {entry.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </section>
  );
}
