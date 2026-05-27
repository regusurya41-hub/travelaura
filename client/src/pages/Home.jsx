import { CinematicHero } from "../components/destination/CinematicHero";
import { DestinationCard } from "../components/destination/DestinationCard";
import { MoodPicker } from "../components/mood/MoodPicker";
import { WeatherBanner } from "../components/weather/WeatherBanner";
import { destinations } from "../constants/destinations";
import { useMoodQuery } from "../hooks/useMoodQuery";
import { useThemeStore } from "../store/themeStore";

export function Home() {
  const { mood, setMood, results } = useMoodQuery("adventurous");
  const setCondition = useThemeStore((state) => state.setCondition);

  function handleMoodChange(nextMood) {
    setMood(nextMood);
    const firstMatch = destinations.find((destination) => destination.mood === nextMood);
    if (firstMatch) setCondition(firstMatch.weatherMood);
  }

  return (
    <>
      <CinematicHero />
      <main className="mx-auto max-w-7xl space-y-10 px-4 py-10 sm:px-6 lg:px-8">
        <WeatherBanner weather={{ destination: "Dynamic aura", summary: "Choose a mood and the interface shifts to match the trip climate." }} />
        <section className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-wide text-[var(--aura-primary)]">Start with a feeling</p>
            <h2 className="mt-2 text-3xl font-black text-slate-950">Pick the energy of the trip.</h2>
            <div className="mt-5">
              <MoodPicker value={mood} onChange={handleMoodChange} />
            </div>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {results.slice(0, 2).map((destination) => (
              <DestinationCard key={destination.id} destination={destination} />
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
