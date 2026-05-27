export function MarkerCluster({ count }) {
  return (
    <span className="grid h-11 w-11 place-items-center rounded-full bg-[var(--aura-secondary)] text-sm font-black text-white shadow-aura">
      {count}
    </span>
  );
}
