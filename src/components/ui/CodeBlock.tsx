import { CopyButton } from "@/components/ui/CopyButton";

export function CodeBlock({
  language,
  code,
  filename,
}: {
  language: string;
  code: string;
  filename?: string;
}) {
  return (
    <div className="overflow-hidden rounded-lg border border-outline-variant/30 bg-black shadow-xl">
      <div className="flex items-center justify-between border-b border-outline-variant/20 bg-surface-container-lowest px-4 py-2">
        <div className="flex items-center gap-4">
          <div className="flex gap-1.5">
            <div className="h-3 w-3 rounded-full border border-red-500/50 bg-red-500/20" />
            <div className="h-3 w-3 rounded-full border border-yellow-500/50 bg-yellow-500/20" />
            <div className="h-3 w-3 rounded-full border border-green-500/50 bg-green-500/20" />
          </div>
          <span className="text-[10px] font-mono text-on-surface-variant uppercase tracking-widest">
            {filename || language}
          </span>
        </div>
        <CopyButton value={code} />
      </div>
      <div className="overflow-x-auto p-4 md:p-6">
        <pre className="whitespace-pre font-mono text-sm leading-relaxed text-on-surface-variant">
          <code>{code}</code>
        </pre>
      </div>
    </div>
  );
}
