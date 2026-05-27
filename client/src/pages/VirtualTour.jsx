import { PageWrapper } from "../components/layout/PageWrapper";
import { VirtualTour as VirtualTourBlock } from "../components/destination/VirtualTour";
import { destinations } from "../constants/destinations";

export function VirtualTour() {
  return (
    <PageWrapper className="space-y-6">
      <h1 className="text-4xl font-black text-slate-950">Virtual tours</h1>
      {destinations.slice(0, 3).map((destination) => (
        <VirtualTourBlock key={destination.id} destination={destination} />
      ))}
    </PageWrapper>
  );
}
