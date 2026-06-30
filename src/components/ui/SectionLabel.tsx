export function SectionLabel({
  index,
  label,
}: {
  index: string;
  label: string;
}) {
  return (
    <div className="flex items-center gap-3 text-sm font-medium tracking-wide text-muted">
      <span className="font-mono text-accent-soft">{index}</span>
      <span className="h-px w-8 bg-line-strong" />
      <span className="uppercase">{label}</span>
    </div>
  );
}
