import { cn } from "../../utils/cn";

export function Card({ children, className }) {
  return <article className={cn("glass rounded-lg shadow-aura", className)}>{children}</article>;
}
