import {useEffect, useState} from "react";

import localStorage from "../../helpers/localStorage";

export default function useDarkMode() {
  const [theme, setTheme] = useState(
    // eslint-disable-next-line no-negated-condition
    typeof window !== "undefined" ? localStorage.getModeTheme() : "dark",
  );
  const colorTheme = theme === "dark" ? "light" : "dark";
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(colorTheme);
    root.classList.add(theme);
    //Save theme to Local Storage
    localStorage.setModeTheme(theme);
  }, [theme, colorTheme]);

  return [colorTheme, setTheme];
}
