import { CloudSun } from "lucide-react";
import { useThemeStore } from "../../store/themeStore";
import { Badge } from "../ui/Badge";

export function WeatherBanner({ weather }) {
  const condition = useThemeStore((state) => state.condition);

  return (
    <div className="glass flex flex-wrap items-center justify-between gap-3 rounded-lg p-4">
      <div className="flex items-center gap-3">
        <span className="grid h-11 w-11 place-items-center rounded-md bg-white text-[var(--aura-primary)]">
          <CloudSun size={22} />
        </span>
        <div>
          <p className="text-sm font-bold text-slate-900">{weather?.destination || "Live weather mood"}</p>
          <p className="text-sm text-slate-600">{weather?.summary || "Theme is tuned to current travel conditions."}</p>
        </div>
      </div>
      <Badge>{weather?.temperature ? `${weather.temperature}C` : condition}</Badge>
    </div>
  );
}
