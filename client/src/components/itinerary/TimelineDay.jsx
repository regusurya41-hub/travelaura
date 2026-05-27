import { Clock } from "lucide-react";

export function TimelineDay({ day }) {
  return (
    <div className="grid gap-4 border-l-2 border-[var(--aura-primary)] pl-5">
      <div>
        <p className="text-sm font-bold text-[var(--aura-primary)]">Day {day.day}</p>
        <h3 className="text-xl font-black text-slate-950">{day.title}</h3>
      </div>
      <div className="grid gap-3">
        {day.activities.map((activity) => (
          <div key={activity.time} className="rounded-lg bg-white/75 p-4">
            <p className="mb-1 flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-slate-500">
              <Clock size={14} /> {activity.time}
            </p>
            <p className="font-semibold text-slate-900">{activity.label}</p>
            <p className="mt-1 text-sm leading-6 text-slate-600">{activity.note}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
