import ToggleSwitch from "../../components/ToggleSwitch";
import { useTheme } from "../../context/ThemeContext";

export default function LightDark() {
  const [theme, setTheme] = useTheme();
  function handleToggleTheme() {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  }
  return (
    <div className="container mx-auto  flex flex-col gap-8 py-8 px-4">
      <h1 className="text-primary-text dark:text-primary-dark-text text-center font-bold text-3xl">
        {theme[0].toUpperCase() + theme.slice(1)} Mode
      </h1>
      <div className="self-center">
        <ToggleSwitch
          leftText="Light"
          rightText="Dark"
          value={theme === "dark"}
          onClick={handleToggleTheme}
        />
      </div>
    </div>
  );
}
