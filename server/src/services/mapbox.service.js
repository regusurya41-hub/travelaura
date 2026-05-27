import { env } from "../config/env.js";

export function getMapboxConfig() {
  return {
    token: env.MAPBOX_TOKEN || "",
    enabled: Boolean(env.MAPBOX_TOKEN)
  };
}
