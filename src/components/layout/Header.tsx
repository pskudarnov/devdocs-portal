"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Code2 } from "lucide-react";
import { useEffect, useState } from "react";
import { clsx } from "clsx";
import { navigationLinks, siteConfig } from "@/config/site";
import { ThemeToggle } from "@/components/layout/ThemeToggle";

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (!open) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      setOpen(false);
    });

    return () => window.cancelAnimationFrame(frame);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-outline-variant/25 bg-surface/90 backdrop-blur-xl">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-bold focus:text-on-primary"
      >
        Skip to content
      </a>

      <div className="mx-auto flex max-w-[1080px] items-center justify-between px-gutter py-3.5">
        <Link href="/" className="flex items-center gap-2 rounded-lg">
          <span className="text-xl font-bold tracking-tight text-on-surface">
            DevDocs<span className="text-primary">.</span>
          </span>
        </Link>

        <nav
          className="hidden items-center gap-8 text-sm font-medium md:flex"
          aria-label="Main navigation"
        >
          {navigationLinks.map((link) => {
            const isActive = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className={clsx(
                  "rounded-md px-1.5 py-1 transition-[color,background-color,transform] duration-200 ease-out hover:text-primary active:scale-[0.98] motion-reduce:transition-none motion-reduce:active:scale-100",
                  isActive ? "text-primary" : "text-on-surface-variant",
                )}
              >
                {link.label}
              </Link>
            );
          })}

          <a
            href={siteConfig.repositoryUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 rounded-md px-1.5 py-1 text-on-surface-variant transition-[color,background-color,transform] duration-200 ease-out hover:text-primary active:scale-[0.98] motion-reduce:transition-none motion-reduce:active:scale-100"
          >
            <Code2 className="h-4 w-4" />
            GitHub
          </a>
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />

          <Link
            href="/docs"
            className="hidden items-center justify-center rounded-lg border border-outline-variant/40 bg-surface-container-highest px-4 py-2 text-sm font-semibold text-on-surface transition-[border-color,background-color,transform] duration-200 ease-out hover:border-primary/50 hover:bg-surface-variant active:scale-[0.98] motion-reduce:transition-none motion-reduce:active:scale-100 md:inline-flex"
          >
            Get Started
          </Link>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            className="rounded-lg p-2 text-on-surface-variant transition-[background-color,color,transform] duration-200 ease-out hover:bg-surface-variant/50 active:scale-[0.96] motion-reduce:transition-none motion-reduce:active:scale-100 md:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open ? (
        <nav
          id="mobile-navigation"
          className="absolute inset-x-0 top-full border-b border-outline-variant/20 bg-surface p-4 shadow-2xl md:hidden"
          aria-label="Mobile navigation"
        >
          <div className="flex flex-col gap-4 text-base font-medium">
            {navigationLinks.map((link) => {
              const isActive =
                link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={isActive ? "page" : undefined}
                  className={clsx(
                    "rounded-lg px-3 py-2 transition-[background-color,color,transform] duration-200 ease-out hover:bg-surface-variant/50 hover:text-primary active:scale-[0.98] motion-reduce:transition-none motion-reduce:active:scale-100",
                    isActive ? "bg-primary/10 text-primary" : "text-on-surface-variant",
                  )}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              );
            })}

            <a
              href={siteConfig.repositoryUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 border-t border-outline-variant/20 px-3 pt-4 text-on-surface-variant transition-[color,transform] duration-200 ease-out hover:text-primary active:scale-[0.98] motion-reduce:transition-none motion-reduce:active:scale-100"
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
