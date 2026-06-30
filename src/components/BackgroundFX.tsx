export function BackgroundFX() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-ink" />
      <div className="grid-bg absolute inset-x-0 top-0 h-[800px]" />
      <div className="absolute left-1/2 top-[-10%] h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-accent/20 blur-[140px]" />
      <div className="absolute right-[-10%] top-[30%] h-[500px] w-[500px] rounded-full bg-accent-cyan/10 blur-[160px]" />
      <div className="absolute bottom-[-15%] left-[-10%] h-[500px] w-[500px] rounded-full bg-accent/10 blur-[160px]" />
      <div className="noise-overlay absolute inset-0" />
    </div>
  );
}
