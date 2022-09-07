import localStorage from "@helpers/localStorage";
import {useEffect, useState} from "react";

export default function useDarkMode() {
  const [theme, setTheme] = useState(
    // eslint-disable-next-line no-negated-condition
    typeof window !== "undefined" ? localStorage.getModeTheme() : "dark",
  );
  const colorTheme = theme === "dark" ? "light" : "dark";
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(colorTheme);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    root.classList.add(theme);
    //Save theme to Local Storage
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    localStorage.setModeTheme(theme);
  }, [theme, colorTheme]);

  return [colorTheme, setTheme];
}
