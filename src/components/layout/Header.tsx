"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="text-lg font-semibold text-slate-900">
          DevDocs
        </Link>
        <nav className="hidden items-center gap-6 text-sm md:flex" aria-label="Main navigation">
          <Link href="/">Home</Link>
          <Link href="/docs">Docs</Link>
          <Link href="/changelog">Changelog</Link>
          <a href="https://github.com/pskudarnov/devdocs-portal" target="_blank" rel="noreferrer">
            GitHub
          </a>
        </nav>
        <button
          type="button"
          aria-label="Toggle menu"
          className="rounded-lg p-2 hover:bg-slate-100 md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open ? (
        <nav className="border-t border-slate-200 p-4 md:hidden" aria-label="Mobile navigation">
          <div className="flex flex-col gap-3 text-sm">
            <Link href="/" onClick={() => setOpen(false)}>
              Home
            </Link>
            <Link href="/docs" onClick={() => setOpen(false)}>
              Docs
            </Link>
            <Link href="/changelog" onClick={() => setOpen(false)}>
              Changelog
            </Link>
            <a href="https://github.com/pskudarnov/devdocs-portal" target="_blank" rel="noreferrer">
              GitHub
            </a>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
