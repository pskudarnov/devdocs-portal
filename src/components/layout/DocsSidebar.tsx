"use client";

import Link from "next/link";
import { docCategories, docs, type DocCategory } from "@/data/docs";
import { clsx } from "clsx";
import { usePathname } from "next/navigation";
import { Book, ChevronRight, Zap, Code, Rocket, Layers, Shield } from "lucide-react";

const categoryIcons = {
  "Getting Started": Zap,
  API: Code,
  Components: Layers,
  Guides: Book,
  Deployment: Rocket,
} satisfies Record<DocCategory, typeof Book>;

export function DocsSidebar() {
  const pathname = usePathname();
  const categories = docCategories
    .map((category) => ({
      label: category,
      icon: categoryIcons[category],
      items: docs.filter((doc) => doc.category === category),
    }))
    .filter((category) => category.items.length > 0);

  return (
    <aside
      className="hidden w-72 shrink-0 border-r border-outline-variant/15 pr-6 lg:block"
      aria-label="Docs sidebar"
    >
      <div className="sticky top-24 flex flex-col gap-7">
        {categories.map((category) => (
          <div key={category.label} className="flex flex-col gap-2">
            <h2 className="mb-1 flex items-center gap-2 px-2 text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">
              <category.icon className="h-3 w-3" />
              {category.label}
            </h2>
            <nav className="flex flex-col gap-0.5">
              {category.items.map((doc) => {
                const isActive = pathname === `/docs/${doc.slug}`;
                return (
                  <Link
                    key={doc.id}
                    href={`/docs/${doc.slug}`}
                    aria-current={isActive ? "page" : undefined}
                    className={clsx(
                      "group flex items-center justify-between rounded-lg border-l-2 px-3 py-2 text-sm font-medium transition-colors",
                      isActive
                        ? "border-primary bg-primary/10 text-primary"
                        : "border-transparent text-on-surface-variant hover:bg-surface-variant/50 hover:text-on-surface",
                    )}
                  >
                    <span className="truncate">{doc.title}</span>
                    <ChevronRight
                      className={clsx(
                        "h-3.5 w-3.5 transition-transform",
                        isActive
                          ? "opacity-100"
                          : "opacity-0 group-hover:translate-x-0.5 group-hover:opacity-40",
                      )}
                    />
                  </Link>
                );
              })}
            </nav>
          </div>
        ))}

        <div className="mt-2 border-t border-outline-variant/15 pt-5">
          <Link
            href="/docs/accessibility-checklist"
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-on-surface-variant transition-colors hover:bg-surface-variant/50 hover:text-primary"
          >
            <Shield className="h-4 w-4" />
            Accessibility checklist
          </Link>
          <Link
            href="/changelog"
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-on-surface-variant transition-colors hover:bg-surface-variant/50 hover:text-primary"
          >
            <Rocket className="h-4 w-4" />
            Release notes
          </Link>
        </div>
      </div>
    </aside>
  );
}
