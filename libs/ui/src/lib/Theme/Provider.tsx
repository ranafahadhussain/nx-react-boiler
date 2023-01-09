import { useEffect, useState } from "react";
import { darkTheme } from "@tote/ui";

export function ThemeToggle() {
  const [theme, setTheme] = useState("light-theme");

  useEffect(() => {
    document.body.classList.remove("light-theme", darkTheme);
    document.body.classList.add(theme);
  }, [theme]);

  return (
    <button
      style={{ position: "fixed", zIndex: 999, right: 15, top: 15 }}
      onClick={() =>
        setTheme(theme === "light-theme" ? darkTheme : "light-theme")
      }
    >
      Toggle theme
    </button>
  );
}
