export function SectionHeading({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="mb-12 animate-fade-in-up opacity-0">
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-on-surface">{title}</h2>
      {subtitle ? (
        <p className="mt-3 text-on-surface-variant max-w-2xl leading-relaxed">{subtitle}</p>
      ) : null}
    </div>
  );
}
