import "./styles.css";
import React from "react";
import useLocalStorage from "./useLocalStorage";

export default function LightDark() {
  const [theme, setTheme] = useLocalStorage("theme", "light");
  function handleToggleTheme() {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  }
  return (
    <div data-theme={theme} className="theme-container">
      <h1>{theme[0].toUpperCase() + theme.slice(1)} Mode</h1>
      <button onClick={handleToggleTheme} className="theme-button">
        Change Theme
      </button>
    </div>
  );
}
