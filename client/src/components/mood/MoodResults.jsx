import { motion } from "framer-motion";
import { staggerChildren } from "../../animations/variants";
import { DestinationCard } from "../destination/DestinationCard";

export function MoodResults({ destinations }) {
  return (
    <motion.div variants={staggerChildren} initial="hidden" animate="visible" className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {destinations.map((destination) => (
        <DestinationCard key={destination.id} destination={destination} />
      ))}
    </motion.div>
  );
}
