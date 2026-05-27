import { X } from "lucide-react";
import { Button } from "./Button";

export function Modal({ open, title, children, onClose }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-slate-950/50 p-4">
      <section className="glass w-full max-w-2xl rounded-lg p-5 shadow-aura">
        <div className="mb-4 flex items-center justify-between gap-4">
          <h2 className="text-xl font-bold">{title}</h2>
          <Button variant="ghost" className="h-10 w-10 p-0" onClick={onClose} aria-label="Close modal">
            <X size={18} />
          </Button>
        </div>
        {children}
      </section>
    </div>
  );
}
