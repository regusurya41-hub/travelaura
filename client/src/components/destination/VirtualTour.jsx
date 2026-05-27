import { Play } from "lucide-react";
import { Badge } from "../ui/Badge";

export function VirtualTour({ destination }) {
  return (
    <section className="overflow-hidden rounded-lg bg-slate-950 text-white shadow-aura">
      <div className="grid md:grid-cols-[1.2fr_0.8fr]">
        <div className="relative min-h-[320px]">
          <img src={destination.image} alt={`${destination.name} tour preview`} className="absolute inset-0 h-full w-full object-cover opacity-80" />
          <div className="absolute inset-0 grid place-items-center bg-slate-950/18">
            <button className="grid h-20 w-20 place-items-center rounded-full bg-white text-slate-950 shadow-aura" aria-label="Play virtual tour">
              <Play fill="currentColor" size={28} />
            </button>
          </div>
        </div>
        <div className="space-y-5 p-6">
          <Badge className="bg-white/12 text-white ring-white/20">Virtual tour</Badge>
          <h2 className="text-3xl font-black">{destination.name}</h2>
          <p className="leading-7 text-white/72">{destination.summary}</p>
          <div className="grid grid-cols-2 gap-3 text-sm">
            {destination.highlights.slice(0, 4).map((item) => (
              <span key={item} className="rounded-md bg-white/10 p-3">{item}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
