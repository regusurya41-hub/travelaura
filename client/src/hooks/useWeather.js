import { useQuery } from "@tanstack/react-query";
import { api } from "../services/api";

export function useWeather(destination = "Kyoto") {
  return useQuery({
    queryKey: ["weather", destination],
    queryFn: async () => {
      const { data } = await api.get("/weather", { params: { destination } });
      return data.weather;
    },
    retry: 1
  });
}
