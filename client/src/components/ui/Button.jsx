import { cn } from "../../utils/cn";

export function Button({ children, className, variant = "primary", ...props }) {
  const variants = {
    primary: "bg-[var(--aura-primary)] text-white hover:brightness-95",
    secondary: "bg-white/70 text-slate-900 hover:bg-white",
    ghost: "bg-transparent text-slate-700 hover:bg-white/50"
  };

  return (
    <button
      className={cn(
        "inline-flex min-h-11 items-center justify-center gap-2 rounded-md px-4 py-2 text-sm font-semibold transition focus:outline-none focus:ring-4 focus:ring-[var(--aura-ring)] disabled:cursor-not-allowed disabled:opacity-60",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
