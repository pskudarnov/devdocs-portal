import type { DocItem } from "@/data/docs";
import { List } from "lucide-react";

export function OnThisPage({ doc }: { doc: DocItem }) {
  return (
    <div className="flex flex-col gap-6">
      <h4 className="flex items-center gap-2 px-2 text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">
        <List className="h-3 w-3" />
        On this page
      </h4>
      <nav className="flex flex-col gap-1 border-l border-outline-variant/10 ml-2 pl-4">
        {doc.sections.map((section) => {
          const id = section.heading.toLowerCase().replaceAll(" ", "-");
          return (
            <a 
              key={id} 
              href={`#${id}`} 
              className="block py-1.5 text-sm text-on-surface-variant hover:text-primary transition-colors"
            >
              {section.heading}
            </a>
          );
        })}
      </nav>
    </div>
  );
}
