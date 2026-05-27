import { moodToColor } from "../../utils/moodToColor";

export function MoodBadge({ mood, active, onClick, children }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex min-h-12 items-center gap-2 rounded-md border px-4 py-2 text-sm font-bold transition"
      style={{
        borderColor: active ? moodToColor(mood) : "rgba(148, 163, 184, 0.35)",
        background: active ? `${moodToColor(mood)}18` : "rgba(255, 255, 255, 0.66)",
        color: active ? moodToColor(mood) : "#334155"
      }}
    >
      {children}
    </button>
  );
}
