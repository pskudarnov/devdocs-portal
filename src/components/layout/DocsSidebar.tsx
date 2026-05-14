"use client";

import Link from "next/link";
import { docCategories, docs, type DocCategory } from "@/data/docs";
import { clsx } from "clsx";
import { usePathname } from "next/navigation";
import { Book, ChevronRight, Zap, Code, Rocket, Layers } from "lucide-react";

const categoryIcons = {
  "Getting Started": Zap,
  API: Code,
  Components: Layers,
  Guides: Book,
  Deployment: Rocket,
} satisfies Record<DocCategory, typeof Book>;

export function DocsSidebar() {
  const pathname = usePathname();
  const categories = docCategories.map((category) => ({
    label: category,
    icon: categoryIcons[category],
    count: docs.filter((doc) => doc.category === category).length,
  }));
  const popular = [...docs].sort((a, b) => b.popularity - a.popularity).slice(0, 6);

  return (
    <aside
      className="hidden w-72 shrink-0 border-r border-outline-variant/15 pr-6 lg:block"
      aria-label="Docs sidebar"
    >
      <div className="sticky top-24 space-y-6">
        <div className="rounded-lg border border-outline-variant/20 bg-surface-container p-4">
          <h2 className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">
            Categories
          </h2>
          <nav className="mt-3 space-y-1.5">
            {categories.map((category) => (
              <Link
                key={category.label}
                href="/docs"
                className="flex items-center justify-between rounded-md px-2 py-1.5 text-sm text-on-surface-variant transition-colors hover:bg-surface-variant/50 hover:text-on-surface"
              >
                <span className="inline-flex items-center gap-2">
                  <category.icon className="h-3.5 w-3.5" />
                  {category.label}
                </span>
                <span>{category.count}</span>
              </Link>
            ))}
          </nav>
        </div>

        <div className="rounded-lg border border-outline-variant/20 bg-surface-container p-4">
          <h2 className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">
            Popular articles
          </h2>
          <nav className="mt-3 flex flex-col gap-1">
            {popular.map((doc) => {
              const isActive = pathname === `/docs/${doc.slug}`;
              return (
                <Link
                  key={doc.id}
                  href={`/docs/${doc.slug}`}
                  className={clsx(
                    "group flex items-center justify-between rounded-md px-2 py-1.5 text-sm",
                    isActive
                      ? "bg-primary/10 text-primary"
                      : "text-on-surface-variant hover:bg-surface-variant/50 hover:text-on-surface",
                  )}
                >
                  <span className="truncate">{doc.title}</span>
                  <ChevronRight className="h-3.5 w-3.5 opacity-40" />
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="rounded-lg border border-outline-variant/20 bg-surface-container p-4 text-sm text-on-surface-variant">
          <h2 className="text-[10px] font-bold uppercase tracking-widest">Deployment checklist</h2>
          <ul className="mt-3 space-y-1.5">
            <li>
              <Link href="/docs/production-build" className="hover:text-primary">
                Production build
              </Link>
            </li>
            <li>
              <Link href="/docs/pm2-deployment" className="hover:text-primary">
                PM2 deployment
              </Link>
            </li>
            <li>
              <Link href="/docs/smoke-testing" className="hover:text-primary">
                Smoke testing
              </Link>
            </li>
            <li>
              <Link href="/docs/rollback-strategy" className="hover:text-primary">
                Rollback strategy
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </aside>
  );
}
