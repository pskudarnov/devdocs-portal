import type { DocItem } from "@/data/docs";
import { Badge } from "@/components/ui/Badge";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { formatDate } from "@/lib/format";
import { Clock, BarChart } from "lucide-react";

export function DocArticle({ doc }: { doc: DocItem }) {
  return (
    <article className="max-w-4xl">
      <header className="mb-12 border-b border-outline-variant/20 pb-12 animate-fade-in-up opacity-0">
        <div className="flex flex-wrap items-center gap-4 mb-6">
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
            <span className="opacity-40">•</span>
            <span>Updated {formatDate(doc.updatedAt)}</span>
          </div>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-on-surface mb-6">
          {doc.title}
        </h1>
        <p className="text-xl text-on-surface-variant leading-relaxed">
          {doc.description}
        </p>
      </header>

      <div className="space-y-12">
        {doc.sections.map((section) => (
          <section key={section.heading} id={section.heading.toLowerCase().replaceAll(" ", "-")} className="scroll-mt-32">
            <h2 className="text-2xl font-bold text-on-surface mb-4 flex items-center gap-3">
              <span className="h-6 w-1 bg-primary rounded-full" />
              {section.heading}
            </h2>
            <div className="text-on-surface-variant leading-relaxed space-y-4">
              <p>{section.body}</p>
            </div>
          </section>
        ))}
      </div>

      {doc.codeExamples && doc.codeExamples.length > 0 && (
        <div className="mt-16 pt-16 border-t border-outline-variant/20 space-y-10">
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
