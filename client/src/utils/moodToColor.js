export function moodToColor(mood) {
  const colors = {
    serene: "#047857",
    adventurous: "#c2410c",
    romantic: "#be123c",
    cultural: "#6d28d9",
    restorative: "#0e7490"
  };

  return colors[mood] || "#047857";
}
