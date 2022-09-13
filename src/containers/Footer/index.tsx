import useDarkMode from "@hook/useDarkMode";
import {Button} from "antd";
import {useEffect, useState} from "react";

import styles from "./Footer.module.css";
const Footer = () => {
  const [colorTheme, setTheme] = useDarkMode();
  const [textMode, setTextMode] = useState("");
  const [isDarkMode, setDarkMode] = useState(colorTheme === "light");
  useEffect(
    () => setTextMode(isDarkMode ? "Dark Mode" : "Light Mode"),
    [isDarkMode],
  );
  const toggleDarkMode = () => {
    setTheme(colorTheme);
    setDarkMode(!isDarkMode);
  };

  return (
    <footer className={styles.sticky}>
      <Button
        className="bg-red text-black dark:text-white"
        onClick={toggleDarkMode}
        type="primary"
      >
        {textMode}
      </Button>
    </footer>
  );
};

export default Footer;
