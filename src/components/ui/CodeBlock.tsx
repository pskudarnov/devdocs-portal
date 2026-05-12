import { Copy } from "lucide-react";

export function CodeBlock({ language, code, filename }: { language: string; code: string; filename?: string }) {
  return (
    <div className="rounded-xl border border-outline-variant/30 bg-[#0d1117] overflow-hidden shadow-xl">
      <div className="flex items-center justify-between px-4 py-2 bg-[#161b22] border-b border-outline-variant/20">
        <div className="flex items-center gap-4">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
            <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
          </div>
          <span className="text-[10px] font-mono text-on-surface-variant uppercase tracking-widest">
            {filename || language}
          </span>
        </div>
        <button className="p-1 rounded-md text-on-surface-variant hover:text-primary transition-colors">
          <Copy className="h-4 w-4" />
        </button>
      </div>
      <div className="p-6 overflow-x-auto">
        <pre className="font-mono text-sm leading-relaxed text-on-surface-variant whitespace-pre">
          <code>{code}</code>
        </pre>
      </div>
    </div>
  );
}
