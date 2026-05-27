import { moods } from "../../constants/moods";
import { MoodBadge } from "./MoodBadge";

export function MoodPicker({ value, onChange }) {
  return (
    <div className="flex flex-wrap gap-3">
      {moods.map((mood) => {
        const Icon = mood.icon;
        return (
          <MoodBadge key={mood.id} mood={mood.id} active={value === mood.id} onClick={() => onChange(mood.id)}>
            <Icon size={17} />
            {mood.label}
          </MoodBadge>
        );
      })}
    </div>
  );
}
