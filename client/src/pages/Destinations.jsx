import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { DestinationCard } from "../components/destination/DestinationCard";
import { PageWrapper } from "../components/layout/PageWrapper";
import { staggerChildren } from "../animations/variants";
import { fetchDestinations } from "../services/destinationService";

export function Destinations() {
  const { data = [] } = useQuery({
    queryKey: ["destinations"],
    queryFn: () => fetchDestinations()
  });

  return (
    <PageWrapper>
      <div className="mb-8 max-w-2xl">
        <p className="text-sm font-bold uppercase tracking-wide text-[var(--aura-primary)]">Destination studio</p>
        <h1 className="mt-2 text-4xl font-black text-slate-950">Browse cinematic places with practical planning signals.</h1>
      </div>
      <motion.div variants={staggerChildren} initial="hidden" animate="visible" className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {data.map((destination) => (
          <DestinationCard key={destination.id} destination={destination} />
        ))}
      </motion.div>
    </PageWrapper>
  );
}
