import { useEffect } from "react";
import { useThemeStore } from "../../store/themeStore";

const themes = {
  sunny: {
    "--aura-bg": "#f8faf9",
    "--aura-primary": "#047857",
    "--aura-secondary": "#d97706",
    "--aura-ring": "rgba(4, 120, 87, 0.22)"
  },
  rainy: {
    "--aura-bg": "#eef6f7",
    "--aura-primary": "#0e7490",
    "--aura-secondary": "#475569",
    "--aura-ring": "rgba(14, 116, 144, 0.22)"
  },
  crisp: {
    "--aura-bg": "#f7fbff",
    "--aura-primary": "#1d4ed8",
    "--aura-secondary": "#0f766e",
    "--aura-ring": "rgba(29, 78, 216, 0.2)"
  },
  warm: {
    "--aura-bg": "#fff9f1",
    "--aura-primary": "#b45309",
    "--aura-secondary": "#be123c",
    "--aura-ring": "rgba(180, 83, 9, 0.2)"
  },
  mild: {
    "--aura-bg": "#faf9f6",
    "--aura-primary": "#4f46e5",
    "--aura-secondary": "#047857",
    "--aura-ring": "rgba(79, 70, 229, 0.2)"
  }
};

export function ThemeProvider({ children }) {
  const condition = useThemeStore((state) => state.condition);

  useEffect(() => {
    const theme = themes[condition] || themes.sunny;
    Object.entries(theme).forEach(([key, value]) => {
      document.body.style.setProperty(key, value);
    });
  }, [condition]);

  return children;
}
