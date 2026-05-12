import { changelog } from "@/data/changelog";
import { Badge } from "@/components/ui/Badge";
import { formatDate } from "@/lib/format";
import { History, GitBranch } from "lucide-react";

export default function ChangelogPage() {
  return (
    <section className="relative min-h-screen py-16">
      {/* Background glow */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-secondary/5 blur-[120px] rounded-full pointer-events-none -z-10" />
      
      <div className="mx-auto max-w-container-max px-gutter">
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-secondary/20 bg-secondary/5 mb-6">
            <History className="h-3.5 w-3.5 text-secondary" />
            <span className="text-[10px] font-bold text-secondary tracking-wider uppercase">Project History</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-on-surface">Changelog</h1>
          <p className="mt-4 text-lg text-on-surface-variant max-w-2xl leading-relaxed">
            Stay updated with the latest improvements and technical refinements to the DevDocs Premium platform.
          </p>
        </div>

        <div className="relative space-y-12 before:absolute before:inset-y-0 before:left-[11px] before:w-px before:bg-outline-variant/20">
          {changelog.map((entry) => (
            <div key={entry.version} className="relative pl-10">
              {/* Timeline marker */}
              <div className="absolute left-0 top-1.5 h-[23px] w-[23px] rounded-full border-2 border-outline-variant bg-surface-container flex items-center justify-center z-10">
                 <GitBranch className="h-3 w-3 text-primary" />
              </div>

              <div className="glass rounded-2xl p-8 border border-outline-variant/20 hover:border-primary/30 transition-all duration-300 shadow-xl group">
                <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                  <div className="flex items-center gap-4">
                    <h2 className="text-2xl font-bold text-on-surface group-hover:text-primary transition-colors">
                      v{entry.version}
                    </h2>
                    <Badge label={entry.type} />
                  </div>
                  <span className="text-sm font-mono text-on-surface-variant bg-surface-variant/30 px-3 py-1 rounded-full border border-outline-variant/10">
                    {formatDate(entry.date)}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-on-surface mb-4">{entry.title}</h3>
                
                <ul className="grid gap-4 md:grid-cols-2">
                  {entry.bullets.map((b) => (
                    <li key={b} className="flex gap-3 text-on-surface-variant text-sm leading-relaxed">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
