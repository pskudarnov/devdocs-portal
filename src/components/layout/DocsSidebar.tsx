import Link from "next/link";
import { docs } from "@/data/docs";
import { clsx } from "clsx";
import { usePathname } from "next/navigation";
import { Book, ChevronRight, Zap, Code, Shield, Globe } from "lucide-react";

export function DocsSidebar() {
  const pathname = usePathname();

  // Group docs by category (simulated for now)
  const categories = [
    { label: "Getting Started", icon: Zap, items: docs.slice(0, 3) },
    { label: "Core Concepts", icon: Book, items: docs.slice(3, 6) },
    { label: "Advanced API", icon: Code, items: docs.slice(6, 9) },
  ];

  return (
    <aside className="hidden w-72 shrink-0 lg:block border-r border-outline-variant/10 pr-6" aria-label="Docs sidebar">
      <div className="sticky top-28 flex flex-col gap-8 animate-fade-in-up opacity-0">
        {categories.map((cat) => (
          <div key={cat.label} className="flex flex-col gap-2">
            <h4 className="flex items-center gap-2 px-2 text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-2">
              <cat.icon className="h-3 w-3" />
              {cat.label}
            </h4>
            <nav className="flex flex-col gap-0.5">
              {cat.items.map((doc) => {
                const isActive = pathname === `/docs/${doc.slug}`;
                return (
                  <Link
                    key={doc.id}
                    href={`/docs/${doc.slug}`}
                    className={clsx(
                      "group flex items-center justify-between rounded-lg px-3 py-2 text-sm font-medium transition-all",
                      isActive 
                        ? "bg-primary/10 text-primary border-l-2 border-primary" 
                        : "text-on-surface-variant hover:bg-surface-variant/50 hover:text-on-surface"
                    )}
                  >
                    <span className="truncate">{doc.title}</span>
                    <ChevronRight className={clsx(
                      "h-3.5 w-3.5 transition-transform",
                      isActive ? "opacity-100" : "opacity-0 group-hover:opacity-40 group-hover:translate-x-0.5"
                    )} />
                  </Link>
                );
              })}
            </nav>
          </div>
        ))}
        
        {/* Additional sections */}
        <div className="mt-4 pt-8 border-t border-outline-variant/10">
           <Link href="#" className="flex items-center gap-3 px-3 py-2 text-sm text-on-surface-variant hover:text-primary transition-colors">
              <Shield className="h-4 w-4" />
              Security Policy
           </Link>
           <Link href="#" className="flex items-center gap-3 px-3 py-2 text-sm text-on-surface-variant hover:text-primary transition-colors">
              <Globe className="h-4 w-4" />
              Release Notes
           </Link>
        </div>
      </div>
    </aside>
  );
}
