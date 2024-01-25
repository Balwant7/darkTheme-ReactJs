import { createContext, useContext, useEffect, useState } from "react";

export const Themecontext = createContext();

// export const useTheme = () => {
//   return useContext(Themecontext);
// };

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prevtheme) => !prevtheme);
  };

  const theme = isDarkMode ? "light" : "dark";

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [isDarkMode]);

  return (
    <Themecontext.Provider value={{ toggleTheme, theme }}>
      {children}
    </Themecontext.Provider>
  );
};
