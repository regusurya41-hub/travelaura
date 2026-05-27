import { Link, NavLink } from "react-router-dom";
import { Compass, Menu } from "lucide-react";
import { Button } from "../ui/Button";

const links = [
  ["Destinations", "/destinations"],
  ["Mood", "/mood"],
  ["Itinerary", "/itinerary"],
  ["Saved", "/saved"],
  ["Tours", "/virtual-tour"]
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/50 bg-white/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2 text-lg font-black">
          <span className="grid h-9 w-9 place-items-center rounded-md bg-[var(--aura-primary)] text-white">
            <Compass size={19} />
          </span>
          TravelAura
        </Link>
        <nav className="hidden items-center gap-1 md:flex">
          {links.map(([label, href]) => (
            <NavLink
              key={href}
              to={href}
              className={({ isActive }) =>
                `rounded-md px-3 py-2 text-sm font-semibold transition ${isActive ? "bg-slate-900 text-white" : "text-slate-600 hover:bg-white/80"}`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>
        <Button variant="secondary" className="hidden md:inline-flex">
          Plan a trip
        </Button>
        <Button variant="ghost" className="h-10 w-10 p-0 md:hidden" aria-label="Open navigation">
          <Menu size={20} />
        </Button>
      </div>
    </header>
  );
}
