"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Code2 } from "lucide-react";
import { useState } from "react";
import { clsx } from "clsx";

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/docs", label: "Docs" },
    { href: "/changelog", label: "Changelog" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-outline-variant/20 bg-surface/80 backdrop-blur-xl transition-all">
      <div className="mx-auto flex max-w-container-max items-center justify-between px-gutter py-4">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-bold tracking-tight text-on-surface">
            DevDocs<span className="text-primary">.</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium md:flex" aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={clsx(
                "transition-colors hover:text-primary",
                pathname === link.href ? "text-primary" : "text-on-surface-variant"
              )}
            >
              {link.label}
            </Link>
          ))}

          <a
            href="https://github.com/pskudarnov/devdocs-portal"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 text-on-surface-variant transition-colors hover:text-primary"
          >
            <Code2 className="h-4 w-4" />
            GitHub
          </a>
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/docs"
            className="hidden items-center justify-center rounded-lg border border-outline-variant/30 bg-surface-container-highest px-4 py-2 text-sm font-semibold text-on-surface transition-all hover:border-primary/50 hover:bg-surface-variant md:inline-flex"
          >
            Get Started
          </Link>

          <button
            type="button"
            aria-label="Toggle menu"
            className="rounded-lg p-2 text-on-surface-variant hover:bg-surface-variant/50 md:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open ? (
        <nav className="absolute inset-x-0 top-full border-b border-outline-variant/20 bg-surface p-6 shadow-2xl md:hidden" aria-label="Mobile navigation">
          <div className="flex flex-col gap-4 text-base font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={clsx(
                  "transition-colors hover:text-primary",
                  pathname === link.href ? "text-primary" : "text-on-surface-variant"
                )}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}

            <a
              href="https://github.com/pskudarnov/devdocs-portal"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 border-t border-outline-variant/20 pt-4 text-on-surface-variant transition-colors hover:text-primary"
              onClick={() => setOpen(false)}
            >
              <Code2 className="h-5 w-5" />
              GitHub
            </a>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
