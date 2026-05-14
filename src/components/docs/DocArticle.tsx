import type { DocItem } from "@/data/docs";
import { Badge } from "@/components/ui/Badge";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { formatDate, slugifyHeading } from "@/lib/format";
import { Clock, BarChart } from "lucide-react";

export function DocArticle({ doc }: { doc: DocItem }) {
  return (
    <article className="max-w-4xl">
      <header className="mb-10 border-b border-outline-variant/20 pb-10 md:mb-12 md:pb-12">
        <div className="mb-6 flex flex-wrap items-center gap-4">
          <Badge label={doc.category} />
          <div className="flex items-center gap-4 text-xs font-medium text-on-surface-variant">
            <div className="flex items-center gap-1.5">
              <BarChart className="h-3.5 w-3.5" />
              {doc.difficulty}
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5" />
              {doc.readTime}
            </div>
            <span className="opacity-40" aria-hidden="true">
              •
            </span>
            <span>Updated {formatDate(doc.updatedAt)}</span>
          </div>
        </div>

        <h1 className="mb-6 text-4xl font-bold tracking-tight text-on-surface md:text-5xl">
          {doc.title}
        </h1>
        <p className="text-lg leading-relaxed text-on-surface-variant md:text-xl">
          {doc.description}
        </p>
      </header>

      <div className="space-y-12">
        {doc.sections.map((section) => (
          <section
            key={section.heading}
            id={slugifyHeading(section.heading)}
            className="scroll-mt-32"
          >
            <h2 className="mb-4 flex items-center gap-3 text-2xl font-bold text-on-surface">
              <span className="h-6 w-1 rounded-full bg-primary" aria-hidden="true" />
              {section.heading}
            </h2>
            <div className="space-y-4 leading-relaxed text-on-surface-variant">
              <p>{section.body}</p>
            </div>
          </section>
        ))}
      </div>

      {doc.codeExamples && doc.codeExamples.length > 0 && (
        <div className="mt-16 space-y-10 border-t border-outline-variant/20 pt-12 md:pt-16">
          <h2 className="text-2xl font-bold text-on-surface">Code Examples</h2>
          {doc.codeExamples.map((example) => (
            <div key={example.title} className="space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-widest text-on-surface-variant">
                {example.title}
              </h3>
              <CodeBlock language={example.language} code={example.code} />
            </div>
          ))}
        </div>
      )}
    </article>
  );
}
