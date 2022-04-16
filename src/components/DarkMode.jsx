import "./DarkMode.css";
import Moon from "../svgs/Moon";
import Sun from "../svgs/Sun";
import { useState } from "react";

const DarkMode = () => {
  const storedTheme = localStorage.getItem("theme");
  const prefersDark =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;

  const defaultDark =
    storedTheme === "dark" || (storedTheme === null && prefersDark);

  const [isDark, setIsDark] = useState(defaultDark);

  const setDark = () => {
    localStorage.setItem("theme", "dark");
    document.documentElement.setAttribute("data-theme", "dark");
  };

  const setLight = () => {
    localStorage.setItem("theme", "light");
    document.documentElement.setAttribute("data-theme", "light");
  };

  if (defaultDark) {
    setDark();
  }

  const toggleTheme = (e) => {
    if (e.target.checked) {
      setDark();
      setIsDark(true);
    } else {
      setLight();
      setIsDark(false);
    }
  };

  return (
    <div className="toggle-theme-wrapper">
      <label className="toggle-theme" htmlFor="checkbox">
        {isDark ? <Sun /> : <Moon />}
        <input
          id="checkbox"
          type="checkbox"
          onChange={toggleTheme}
          defaultChecked={defaultDark}
        />
      </label>
    </div>
  );
};

export default DarkMode;
