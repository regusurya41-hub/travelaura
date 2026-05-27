import { Map } from "lucide-react";

export function MapEmbed({ destination }) {
  const [lng, lat] = destination.coordinates || [0, 0];
  const src = `https://www.openstreetmap.org/export/embed.html?bbox=${lng - 0.12}%2C${lat - 0.08}%2C${lng + 0.12}%2C${lat + 0.08}&layer=mapnik&marker=${lat}%2C${lng}`;

  return (
    <section className="overflow-hidden rounded-lg bg-white shadow-aura">
      <div className="flex items-center gap-2 border-b border-slate-100 p-4 font-bold">
        <Map size={18} /> {destination.name} map
      </div>
      <iframe title={`${destination.name} map`} src={src} className="h-80 w-full border-0" loading="lazy" />
    </section>
  );
}
