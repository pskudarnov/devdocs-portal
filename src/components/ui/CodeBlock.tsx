export function CodeBlock({ language, code }: { language: string; code: string }) {
  return (
    <div className="rounded-xl border border-slate-300 bg-slate-950 p-4 text-sm text-slate-100">
      <p className="mb-2 text-xs uppercase text-slate-400">{language}</p>
      <pre className="overflow-x-auto">
        <code>{code}</code>
      </pre>
    </div>
  );
}
