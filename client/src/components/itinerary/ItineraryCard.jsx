import { TimelineDay } from "./TimelineDay";

export function ItineraryCard({ itinerary }) {
  if (!itinerary) return null;

  return (
    <section className="glass space-y-6 rounded-lg p-5 shadow-aura">
      <div>
        <p className="text-sm font-bold text-[var(--aura-primary)]">{itinerary.destination}</p>
        <h2 className="text-3xl font-black text-slate-950">{itinerary.title}</h2>
        <p className="mt-2 leading-7 text-slate-600">{itinerary.summary}</p>
      </div>
      <div className="grid gap-7">
        {itinerary.days.map((day) => (
          <TimelineDay key={day.day} day={day} />
        ))}
      </div>
    </section>
  );
}
