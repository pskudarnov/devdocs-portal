import Link from "next/link";
import { Code2, X, Mail } from "lucide-react";
import { siteConfig } from "@/config/site";

const platformLinks = [
  { href: "/docs", label: "Documentation" },
  { href: "/changelog", label: "Changelog" },
  { href: "/docs/api-client-setup", label: "API Reference" },
  { href: "/docs/ui-components", label: "Components" },
] as const;

const resourceLinks = [
  { href: "/docs/quick-start", label: "Quick Start" },
  { href: "/docs/routing-basics", label: "Guides" },
  { href: "/docs/accessibility-checklist", label: "Accessibility" },
  { href: "/docs/deployment-checklist", label: "Deployment" },
] as const;

const legalLinks = [
  { href: "/docs/accessibility-checklist", label: "Accessibility" },
  { href: "/docs/deployment-checklist", label: "Release checklist" },
] as const;

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-outline-variant/20 bg-surface-container-low py-16">
      <div className="mx-auto max-w-container-max px-gutter">
        <div className="mb-12 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-4">
            <Link href="/" className="text-xl font-bold tracking-tight text-on-surface">
              DevDocs<span className="text-primary">.</span>
            </Link>
            <p className="text-sm text-on-surface-variant leading-relaxed max-w-xs">
              The precision-engineered documentation portal for high-performance development teams.
            </p>
          </div>

          <div>
            <h2 className="mb-6 text-xs font-bold uppercase tracking-widest text-on-surface">
              Platform
            </h2>
            <ul className="flex flex-col gap-3 text-sm text-on-surface-variant">
              {platformLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="rounded-md transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="mb-6 text-xs font-bold uppercase tracking-widest text-on-surface">
              Resources
            </h2>
            <ul className="flex flex-col gap-3 text-sm text-on-surface-variant">
              {resourceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="rounded-md transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="mb-6 text-xs font-bold uppercase tracking-widest text-on-surface">
              Connect
            </h2>
            <div className="flex gap-4">
              <a
                href={siteConfig.repositoryUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="Open GitHub repository"
                className="rounded-lg bg-surface-bright p-2 text-on-surface-variant transition-colors hover:text-primary"
              >
                <Code2 className="h-5 w-5" />
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Open X"
                className="rounded-lg bg-surface-bright p-2 text-on-surface-variant transition-colors hover:text-primary"
              >
                <X className="h-5 w-5" />
              </a>
              <a
                href={siteConfig.email}
                aria-label="Email DevDocs"
                className="rounded-lg bg-surface-bright p-2 text-on-surface-variant transition-colors hover:text-primary"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-outline-variant/10 pt-8 text-xs text-on-surface-variant md:flex-row">
          <p>© {currentYear} DevDocs Premium. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-6">
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-md transition-colors hover:text-on-surface"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
