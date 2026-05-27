import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { fadeUp } from "../../animations/variants";
import { Badge } from "../ui/Badge";

export function DestinationCard({ destination }) {
  return (
    <motion.article variants={fadeUp} className="group overflow-hidden rounded-lg bg-white shadow-aura">
      <Link to={`/destinations/${destination.id}`} className="block">
        <div className="aspect-[4/3] overflow-hidden">
          <img
            src={destination.image}
            alt={`${destination.name}, ${destination.country}`}
            className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
          />
        </div>
        <div className="space-y-4 p-5">
          <div className="flex items-start justify-between gap-3">
            <div>
              <h3 className="text-xl font-black text-slate-950">{destination.name}</h3>
              <p className="mt-1 flex items-center gap-1 text-sm text-slate-600">
                <MapPin size={15} /> {destination.country}
              </p>
            </div>
            <Badge>{destination.mood}</Badge>
          </div>
          <p className="text-sm leading-6 text-slate-600">{destination.summary}</p>
        </div>
      </Link>
    </motion.article>
  );
}
