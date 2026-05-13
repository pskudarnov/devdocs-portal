import type { DocItem } from "@/data/docs";
import { slugifyHeading } from "@/lib/format";
import { List } from "lucide-react";

export function OnThisPage({ doc }: { doc: DocItem }) {
  return (
    <div className="flex flex-col gap-6">
      <h2 className="flex items-center gap-2 px-2 text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">
        <List className="h-3 w-3" />
        On this page
      </h2>
      <nav className="ml-2 flex flex-col gap-1 border-l border-outline-variant/15 pl-4">
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
    </div>
  );
}
