import { cn } from "../../utils/cn";

export function Badge({ children, className }) {
  return (
    <span className={cn("inline-flex items-center rounded-full bg-white/70 px-3 py-1 text-xs font-semibold text-slate-700 ring-1 ring-slate-200", className)}>
      {children}
    </span>
  );
}
