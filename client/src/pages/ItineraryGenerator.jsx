import { useState } from "react";
import { Save } from "lucide-react";
import { Button } from "../components/ui/Button";
import { Spinner } from "../components/ui/Spinner";
import { PageWrapper } from "../components/layout/PageWrapper";
import { MoodPicker } from "../components/mood/MoodPicker";
import { ItineraryCard } from "../components/itinerary/ItineraryCard";
import { ShareButton } from "../components/itinerary/ShareButton";
import { useItinerary } from "../hooks/useItinerary";
import { useTripStore } from "../store/tripStore";
import { destinations } from "../constants/destinations";

export function ItineraryGenerator() {
  const [form, setForm] = useState({ destination: "Kyoto", days: 3, mood: "cultural", budget: "balanced" });
  const itinerary = useItinerary();
  const saveTrip = useTripStore((state) => state.saveTrip);

  function updateField(field, value) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    itinerary.mutate(form);
  }

  return (
    <PageWrapper className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
      <section className="glass h-fit rounded-lg p-5 shadow-aura">
        <p className="text-sm font-bold uppercase tracking-wide text-[var(--aura-primary)]">AI itinerary</p>
        <h1 className="mt-2 text-4xl font-black text-slate-950">Generate a day-by-day trip plan.</h1>
        <form onSubmit={handleSubmit} className="mt-6 grid gap-5">
          <label className="grid gap-2 text-sm font-bold text-slate-700">
            Destination
            <select className="rounded-md border border-slate-200 bg-white px-3 py-3" value={form.destination} onChange={(event) => updateField("destination", event.target.value)}>
              {destinations.map((destination) => (
                <option key={destination.id} value={destination.name}>{destination.name}</option>
              ))}
            </select>
          </label>
          <label className="grid gap-2 text-sm font-bold text-slate-700">
            Days
            <input className="rounded-md border border-slate-200 bg-white px-3 py-3" type="number" min="1" max="10" value={form.days} onChange={(event) => updateField("days", Number(event.target.value))} />
          </label>
          <label className="grid gap-2 text-sm font-bold text-slate-700">
            Budget style
            <select className="rounded-md border border-slate-200 bg-white px-3 py-3" value={form.budget} onChange={(event) => updateField("budget", event.target.value)}>
              <option value="essential">Essential</option>
              <option value="balanced">Balanced</option>
              <option value="elevated">Elevated</option>
            </select>
          </label>
          <div className="grid gap-2">
            <span className="text-sm font-bold text-slate-700">Mood</span>
            <MoodPicker value={form.mood} onChange={(mood) => updateField("mood", mood)} />
          </div>
          <Button type="submit" disabled={itinerary.isPending}>
            {itinerary.isPending && <Spinner />} Generate itinerary
          </Button>
        </form>
      </section>
      <section className="space-y-4">
        <div className="flex justify-end gap-3">
          <Button variant="secondary" disabled={!itinerary.data} onClick={() => itinerary.data && saveTrip(itinerary.data)}>
            <Save size={17} /> Save
          </Button>
          <ShareButton itinerary={itinerary.data} />
        </div>
        <ItineraryCard itinerary={itinerary.data} />
      </section>
    </PageWrapper>
  );
}
