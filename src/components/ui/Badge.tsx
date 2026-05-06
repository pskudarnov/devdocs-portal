export function Badge({ label }: { label: string }) {
  return (
    <span className="rounded-full bg-blue-100 px-2.5 py-1 text-xs font-medium text-blue-900">
      {label}
    </span>
  );
}
