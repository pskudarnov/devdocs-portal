import Link from "next/link";
import { Code2, Mail } from "lucide-react";
import { siteConfig } from "@/config/site";

const links = [
  { href: "/docs", label: "Docs" },
  { href: "/changelog", label: "Changelog" },
  { href: "/architecture", label: "Architecture" },
  { href: "/resources", label: "Resources" },
  { href: "/status", label: "Status" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-outline-variant/20 bg-surface-container-low py-16">
      <div className="mx-auto max-w-container-max px-gutter">
        <div className="mb-10 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="text-xl font-bold tracking-tight text-on-surface">
              DevDocs<span className="text-primary">.</span>
            </Link>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-on-surface-variant">
              Production-style documentation portal demo focused on real frontend delivery
              workflows, quality gates, and release confidence.
            </p>
          </div>
          <div>
            <h2 className="mb-4 text-xs font-bold uppercase tracking-widest text-on-surface">
              Links
            </h2>
            <ul className="space-y-2 text-sm text-on-surface-variant">
              {links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-primary">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="mb-4 text-xs font-bold uppercase tracking-widest text-on-surface">
              Project stack
            </h2>
            <ul className="space-y-2 text-sm text-on-surface-variant">
              <li>Next.js</li>
              <li>TypeScript</li>
              <li>Tailwind</li>
              <li>PM2</li>
            </ul>
          </div>
          <div>
            <h2 className="mb-4 text-xs font-bold uppercase tracking-widest text-on-surface">
              Quality
            </h2>
            <ul className="space-y-2 text-sm text-on-surface-variant">
              <li>SEO-ready</li>
              <li>Accessible navigation</li>
              <li>Theme persistence</li>
              <li>Copy-ready examples</li>
            </ul>
            <div className="mt-4 flex gap-3">
              <a
                href={siteConfig.repositoryUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-lg bg-surface-bright p-2 text-on-surface-variant hover:text-primary"
                aria-label="Open GitHub repository"
              >
                <Code2 className="h-5 w-5" />
              </a>
              <a
                href={siteConfig.email}
                className="rounded-lg bg-surface-bright p-2 text-on-surface-variant hover:text-primary"
                aria-label="Email DevDocs"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-outline-variant/10 pt-6 text-xs text-on-surface-variant">
          © {currentYear} DevDocs Premium. Built as a portfolio-grade documentation product.
        </div>
      </div>
    </footer>
  );
}
