import { Trash2 } from "lucide-react";
import { PageWrapper } from "../components/layout/PageWrapper";
import { Button } from "../components/ui/Button";
import { useTripStore } from "../store/tripStore";

export function SavedTrips() {
  const { savedTrips, removeTrip } = useTripStore();

  return (
    <PageWrapper>
      <h1 className="mb-7 text-4xl font-black text-slate-950">Saved trips</h1>
      <div className="grid gap-4">
        {savedTrips.length === 0 && <p className="rounded-lg bg-white/70 p-6 text-slate-600">Generated itineraries you save will appear here.</p>}
        {savedTrips.map((trip) => (
          <article key={trip.id} className="glass flex flex-wrap items-center justify-between gap-4 rounded-lg p-5">
            <div>
              <p className="text-sm font-bold text-[var(--aura-primary)]">{trip.destination}</p>
              <h2 className="text-xl font-black">{trip.title}</h2>
              <p className="mt-1 text-sm text-slate-600">{trip.summary}</p>
            </div>
            <Button variant="ghost" onClick={() => removeTrip(trip.id)} aria-label={`Remove ${trip.title}`}>
              <Trash2 size={18} />
            </Button>
          </article>
        ))}
      </div>
    </PageWrapper>
  );
}
