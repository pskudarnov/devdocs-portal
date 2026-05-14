import type { DocItem } from "@/data/docs";
import { slugifyHeading } from "@/lib/format";
import { List } from "lucide-react";

export function OnThisPage({ doc }: { doc: DocItem }) {
  return (
    <div className="space-y-5 rounded-lg border border-outline-variant/20 bg-surface-container p-4">
      <h2 className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">
        <List className="h-3 w-3" />
        On this page
      </h2>
      <nav className="flex flex-col gap-1 border-l border-outline-variant/15 pl-3">
        {doc.sections.map((section) => {
          const id = slugifyHeading(section.heading);
          return (
            <a
              key={id}
              href={`#${id}`}
              className="block rounded-md py-1.5 text-sm text-on-surface-variant transition-colors hover:text-primary"
            >
              {section.heading}
            </a>
          );
        })}
      </nav>
      <div className="border-t border-outline-variant/15 pt-3 text-xs text-on-surface-variant">
        <p className="font-semibold text-on-surface">Code examples</p>
        <ul className="mt-2 space-y-1">
          {doc.codeExamples.map((example) => (
            <li key={example.title}>• {example.title}</li>
          ))}
        </ul>
      </div>
      <div className="border-t border-outline-variant/15 pt-3 text-xs text-on-surface-variant">
        <p className="font-semibold text-on-surface">Related links</p>
        <ul className="mt-2 space-y-1">
          {(doc.relatedSlugs ?? []).map((slug) => (
            <li key={slug}>• /docs/{slug}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
