import { createContext, useContext, useEffect } from "react";
import useLocalStorage from "./useLocalStorage";

const ThemeContext = createContext();
export const useTheme = () => useContext(ThemeContext);

export default function ThemeContextProvider({ children }) {
  const [theme, setTheme] = useLocalStorage("theme", "light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
