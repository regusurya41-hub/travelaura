import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { fadeUp, staggerChildren } from "../../animations/variants";
import { Button } from "../ui/Button";

export function CinematicHero() {
  return (
    <section className="relative min-h-[78vh] overflow-hidden rounded-b-lg">
      <img
        src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1800&q=85"
        alt="A scenic travel road at golden hour"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/78 via-slate-950/42 to-transparent" />
      <motion.div
        variants={staggerChildren}
        initial="hidden"
        animate="visible"
        className="relative z-10 mx-auto flex min-h-[78vh] max-w-7xl flex-col justify-end px-4 pb-16 pt-28 text-white sm:px-6 lg:px-8"
      >
        <motion.div variants={fadeUp} className="mb-4 inline-flex w-fit items-center gap-2 rounded-full bg-white/14 px-4 py-2 text-sm font-semibold backdrop-blur">
          <Sparkles size={16} /> Mood-led travel intelligence
        </motion.div>
        <motion.h1 variants={fadeUp} className="max-w-3xl text-5xl font-black leading-[1.02] sm:text-6xl lg:text-7xl">
          TravelAura
        </motion.h1>
        <motion.p variants={fadeUp} className="mt-5 max-w-2xl text-lg leading-8 text-white/88">
          Discover destinations by feeling, adapt plans to weather, and generate beautiful itineraries that actually match the trip in your head.
        </motion.p>
        <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-3">
          <Link to="/itinerary">
            <Button className="bg-white text-slate-950">
              Generate itinerary <ArrowRight size={18} />
            </Button>
          </Link>
          <Link to="/mood">
            <Button variant="secondary">Explore by mood</Button>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
