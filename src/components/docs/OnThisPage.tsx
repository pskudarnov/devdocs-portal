import type { DocItem } from "@/data/docs";

export function OnThisPage({ doc }: { doc: DocItem }) {
  return (
    <aside className="hidden w-64 shrink-0 xl:block" aria-label="On this page">
      <div className="sticky top-24 rounded-xl border border-slate-200 bg-white p-4">
        <p className="mb-3 text-sm font-semibold text-slate-900">On this page</p>
        <nav className="space-y-2 text-sm">
          {doc.sections.map((section) => {
            const id = section.heading.toLowerCase().replaceAll(" ", "-");
            return (
              <a key={id} href={`#${id}`} className="block rounded-md px-2 py-1 hover:bg-slate-100">
                {section.heading}
              </a>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}
