import Link from "next/link";
import { Code2, X, Mail } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-outline-variant/20 bg-surface-container-low py-16">
      <div className="mx-auto max-w-container-max px-gutter">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4 mb-12">
          <div className="flex flex-col gap-4">
            <Link href="/" className="text-xl font-bold tracking-tight text-on-surface">
              DevDocs<span className="text-primary">.</span>
            </Link>
            <p className="text-sm text-on-surface-variant leading-relaxed max-w-xs">
              The precision-engineered documentation portal for high-performance development teams.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-on-surface mb-6 uppercase text-xs tracking-widest">Platform</h4>
            <ul className="flex flex-col gap-3 text-sm text-on-surface-variant">
              <li><Link href="/docs" className="hover:text-primary transition-colors">Documentation</Link></li>
              <li><Link href="/changelog" className="hover:text-primary transition-colors">Changelog</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">API Reference</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Components</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-on-surface mb-6 uppercase text-xs tracking-widest">Resources</h4>
            <ul className="flex flex-col gap-3 text-sm text-on-surface-variant">
              <li><Link href="#" className="hover:text-primary transition-colors">Community</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Showcase</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Guides</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Support</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-on-surface mb-6 uppercase text-xs tracking-widest">Connect</h4>
            <div className="flex gap-4">
              <a href="#" className="p-2 rounded-lg bg-surface-bright text-on-surface-variant hover:text-primary transition-all">
                <Code2 className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-surface-bright text-on-surface-variant hover:text-primary transition-all">
                <X className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-surface-bright text-on-surface-variant hover:text-primary transition-all">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-outline-variant/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-on-surface-variant">
          <p>© {currentYear} DevDocs Premium. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-on-surface transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-on-surface transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-on-surface transition-colors">Cookie Settings</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
