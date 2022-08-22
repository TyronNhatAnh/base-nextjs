import {Button} from "antd";
import {useEffect, useState} from "react";

import useDarkMode from "../../../hooks/useDarkMode";
import styles from "./Footer.module.css";
const Footer = () => {
  const [colorTheme, setTheme] = useDarkMode();
  const [textMode, setTextMode] = useState("");
  const [isDarkMode, setDarkMode] = useState(
    colorTheme === "light" ? true : false,
  );
  useEffect(
    () => setTextMode(isDarkMode ? "Dark Mode" : "Light Mode"),
    [isDarkMode],
  );
  const toggleDarkMode = event => {
    setTheme(colorTheme);
    setDarkMode(!isDarkMode);
  };

  return (
    <footer className={styles.sticky}>
      <Button className={styles.button} onClick={toggleDarkMode} type="primary">
        {textMode}
      </Button>
    </footer>
  );
};

export default Footer;
