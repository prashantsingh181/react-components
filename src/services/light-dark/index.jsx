import "./styles.css";
import { useEffect } from "react";
import useLocalStorage from "./useLocalStorage";
import ToggleSwitch from "../../components/ToggleSwitch";

export default function LightDark() {
  const [theme, setTheme] = useLocalStorage("theme", "light");
  function handleToggleTheme() {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  }

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme)
  }, [theme])

  return (
    <div className="container mx-auto  flex flex-col gap-8 py-8 px-4">
      <h1 className="text-primary-text dark:text-primary-dark-text text-center font-bold text-3xl">{theme[0].toUpperCase() + theme.slice(1)} Mode</h1>
      <div className="self-center">
        <ToggleSwitch leftText="Light" rightText="Dark" value={theme === "dark"} onClick={handleToggleTheme} />
      </div>
    </div>
  );
}
