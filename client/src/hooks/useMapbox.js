export function useMapbox() {
  return {
    token: import.meta.env.VITE_MAPBOX_TOKEN || "",
    enabled: Boolean(import.meta.env.VITE_MAPBOX_TOKEN)
  };
}
