import {useEffect, useState} from "react";

export default function useDarkMode() {
  const [theme, setTheme] = useState(
    // eslint-disable-next-line no-negated-condition
    typeof window !== "undefined" ? localStorage.theme : "dark",
  );
  const colorTheme = theme === "dark" ? "light" : "dark";
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(colorTheme);
    root.classList.add(theme);
    //Save theme to Local Storage
    localStorage.setItem("theme", theme);
  }, [theme, colorTheme]);

  return [colorTheme, setTheme];
}
