import { PageWrapper } from "../components/layout/PageWrapper";
import { MoodPicker } from "../components/mood/MoodPicker";
import { MoodResults } from "../components/mood/MoodResults";
import { useMoodQuery } from "../hooks/useMoodQuery";

export function MoodExplorer() {
  const { mood, setMood, results } = useMoodQuery("serene");

  return (
    <PageWrapper>
      <div className="mb-7 max-w-2xl">
        <p className="text-sm font-bold uppercase tracking-wide text-[var(--aura-primary)]">Mood explorer</p>
        <h1 className="mt-2 text-4xl font-black text-slate-950">Let the emotional texture of the trip narrow the map.</h1>
      </div>
      <div className="mb-8">
        <MoodPicker value={mood} onChange={setMood} />
      </div>
      <MoodResults destinations={results} />
    </PageWrapper>
  );
}
