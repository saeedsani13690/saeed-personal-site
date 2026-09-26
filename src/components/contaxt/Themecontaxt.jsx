// ThemeContext.js
import { createContext, useState, useContext,useEffect } from "react";

// 1. ساخت context در خارج از کامپوننت
const ThemeContext = createContext();

// 2. ساخت provider
export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => setDarkMode(prev => !prev);

 useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);





  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      <div className={darkMode ? "dark bg-gray-900 text-white" : "bg-white text-black"}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

// 3. هوک سفارشی برای استفاده راحت‌تر
export const useTheme = () => useContext(ThemeContext);