import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { MapPin } from "lucide-react";
import { Badge } from "../components/ui/Badge";
import { Button } from "../components/ui/Button";
import { PageWrapper } from "../components/layout/PageWrapper";
import { MapEmbed } from "../components/map/MapEmbed";
import { RouteVisualizer } from "../components/map/RouteVisualizer";
import { VirtualTour as VirtualTourBlock } from "../components/destination/VirtualTour";
import { fetchDestination } from "../services/destinationService";
import { useThemeStore } from "../store/themeStore";

export function DestinationDetail() {
  const { id } = useParams();
  const setCondition = useThemeStore((state) => state.setCondition);
  const { data: destination } = useQuery({
    queryKey: ["destination", id],
    queryFn: () => fetchDestination(id)
  });

  useEffect(() => {
    if (destination) setCondition(destination.weatherMood);
  }, [destination, setCondition]);

  if (!destination) return null;

  return (
    <PageWrapper className="space-y-8">
      <section className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="overflow-hidden rounded-lg shadow-aura">
          <img src={destination.image} alt={destination.name} className="h-full min-h-[420px] w-full object-cover" />
        </div>
        <div className="flex flex-col justify-center">
          <Badge>{destination.mood}</Badge>
          <h1 className="mt-4 text-5xl font-black text-slate-950">{destination.name}</h1>
          <p className="mt-3 flex items-center gap-2 text-slate-600">
            <MapPin size={18} /> {destination.country}
          </p>
          <p className="mt-6 text-lg leading-8 text-slate-700">{destination.summary}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {destination.highlights.map((highlight) => (
              <Badge key={highlight}>{highlight}</Badge>
            ))}
          </div>
          <Button className="mt-8 w-fit">Build itinerary</Button>
        </div>
      </section>
      <RouteVisualizer stops={destination.highlights} />
      <MapEmbed destination={destination} />
      <VirtualTourBlock destination={destination} />
    </PageWrapper>
  );
}
