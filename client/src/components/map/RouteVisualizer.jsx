export function RouteVisualizer({ stops = [] }) {
  return (
    <div className="glass rounded-lg p-5">
      <h3 className="mb-4 text-lg font-black">Route rhythm</h3>
      <div className="flex flex-wrap items-center gap-3">
        {stops.map((stop, index) => (
          <div key={stop} className="flex items-center gap-3">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-[var(--aura-primary)] text-sm font-bold text-white">{index + 1}</span>
            <span className="font-semibold text-slate-700">{stop}</span>
            {index < stops.length - 1 && <span className="h-px w-8 bg-slate-300" />}
          </div>
        ))}
      </div>
    </div>
  );
}
