import Link from "next/link";
import type { DocItem } from "@/data/docs";
import { docs } from "@/data/docs";
import { Badge } from "@/components/ui/Badge";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { formatDate, slugifyHeading } from "@/lib/format";
import { Clock, BarChart, GitBranch } from "lucide-react";
import { siteConfig } from "@/config/site";

export function DocArticle({ doc }: { doc: DocItem }) {
  const related = (doc.relatedSlugs ?? [])
    .map((slug) => docs.find((item) => item.slug === slug))
    .filter(Boolean) as DocItem[];

  return (
    <article className="max-w-[800px]">
      <header className="mb-10 border-b border-outline-variant/20 pb-10 md:mb-12 md:pb-12">
        <div className="mb-4 flex flex-wrap items-center gap-4">
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
            <span>Updated {formatDate(doc.updatedAt)}</span>
          </div>
        </div>
        <h1 className="mb-4 text-4xl font-bold tracking-tight text-on-surface md:text-5xl">
          {doc.title}
        </h1>
        <p className="text-lg leading-relaxed text-on-surface-variant md:text-xl">
          {doc.description}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {doc.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-outline-variant/25 px-2.5 py-0.5 text-xs text-on-surface-variant"
            >
              {tag}
            </span>
          ))}
        </div>
      </header>

      <div className="mb-10 grid gap-4 md:grid-cols-2">
        <section className="rounded-lg border border-outline-variant/20 bg-surface-container p-5">
          <h2 className="text-sm font-bold uppercase tracking-widest text-on-surface-variant">
            Prerequisites
          </h2>
          <ul className="mt-3 space-y-2 text-sm text-on-surface-variant">
            {(doc.prerequisites ?? []).map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </section>
        <section className="rounded-lg border border-outline-variant/20 bg-surface-container p-5">
          <h2 className="text-sm font-bold uppercase tracking-widest text-on-surface-variant">
            Outcomes
          </h2>
          <ul className="mt-3 space-y-2 text-sm text-on-surface-variant">
            {(doc.outcomes ?? []).map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </section>
      </div>

      {(doc.callouts ?? []).length > 0 ? (
        <div className="mb-10 space-y-3">
          {doc.callouts?.map((callout) => (
            <section
              key={callout.title}
              className="rounded-lg border border-outline-variant/20 bg-surface-container p-5"
            >
              <h3 className="text-sm font-bold uppercase tracking-widest text-primary">
                {callout.type}: {callout.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-on-surface-variant">{callout.body}</p>
            </section>
          ))}
        </div>
      ) : null}

      <div className="space-y-12">
        {doc.sections.map((section) => (
          <section
            key={section.heading}
            id={slugifyHeading(section.heading)}
            className="scroll-mt-32"
          >
            <h2 className="mb-4 flex items-center gap-3 text-2xl font-bold text-on-surface">
              <span className="h-6 w-1 rounded-full bg-primary" />
              {section.heading}
            </h2>
            <p className="leading-relaxed text-on-surface-variant">{section.body}</p>
          </section>
        ))}
      </div>

      <div className="mt-16 space-y-8 border-t border-outline-variant/20 pt-12 md:pt-16">
        <h2 className="text-2xl font-bold text-on-surface">Code examples</h2>
        {doc.codeExamples.map((example) => (
          <div key={example.title} className="space-y-3">
            <h3 className="text-sm font-bold uppercase tracking-widest text-on-surface-variant">
              {example.title}
            </h3>
            <CodeBlock language={example.language} code={example.code} />
          </div>
        ))}
      </div>

      <section className="mt-12 rounded-lg border border-outline-variant/20 bg-surface-container p-5">
        <h2 className="text-sm font-bold uppercase tracking-widest text-on-surface-variant">
          Related articles
        </h2>
        <div className="mt-3 grid gap-2 sm:grid-cols-2">
          {related.map((item) => (
            <Link
              key={item.slug}
              href={`/docs/${item.slug}`}
              className="rounded-md border border-outline-variant/25 px-3 py-2 text-sm text-on-surface-variant transition-[border-color,color,background-color,transform] duration-200 ease-out hover:border-primary/40 hover:text-primary active:scale-[0.98] motion-reduce:transition-none motion-reduce:active:scale-100"
            >
              {item.title}
            </Link>
          ))}
        </div>
      </section>

      <div className="mt-8 flex items-center gap-2 text-sm text-on-surface-variant">
        <GitBranch className="h-4 w-4" />
        <a
          href={`${siteConfig.repositoryUrl}/tree/main/src/data/docs.ts`}
          target="_blank"
          rel="noreferrer"
          className="transition-colors duration-200 ease-out hover:text-primary"
        >
          Edit on GitHub
        </a>
      </div>
    </article>
  );
}
