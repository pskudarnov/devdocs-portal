import type { DocItem } from "@/data/docs";
import { Badge } from "@/components/ui/Badge";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { formatDate } from "@/lib/format";

export function DocArticle({ doc }: { doc: DocItem }) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex flex-wrap items-center gap-2">
        <Badge label={doc.category} />
        <span className="text-xs text-slate-500">
          {doc.difficulty} · {doc.readTime} · Updated {formatDate(doc.updatedAt)}
        </span>
      </div>
      <h1 className="mt-4 text-3xl font-semibold text-slate-900">{doc.title}</h1>
      <p className="mt-3 text-slate-600">{doc.description}</p>
      <div className="mt-8 space-y-6">
        {doc.sections.map((section) => (
          <section key={section.heading} id={section.heading.toLowerCase().replaceAll(" ", "-")}>
            <h2 className="text-xl font-semibold text-slate-900">{section.heading}</h2>
            <p className="mt-2 text-slate-700">{section.body}</p>
          </section>
        ))}
      </div>
      <div className="mt-8 space-y-4">
        {doc.codeExamples.map((example) => (
          <div key={example.title}>
            <h3 className="mb-2 text-sm font-semibold text-slate-800">{example.title}</h3>
            <CodeBlock language={example.language} code={example.code} />
          </div>
        ))}
      </div>
    </article>
  );
}
