/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react";
import { ThemeContextType, ThemeType } from "../types";

export const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  setTheme: () => {},
  isOpen: false,
  setIsOpen: () => {},
  showSideBar: false,
  setShowSideBar: () => {},
});

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [theme, setTheme] = useState<ThemeType>(
    () => (localStorage.getItem("theme") as ThemeType) || "light"
  );
  const [isOpen, setIsOpen] = useState(false); // Social media icons
  const [showSideBar, setShowSideBar] = useState(false);

  const contextValue: ThemeContextType = {
    theme,
    setTheme,
    isOpen,
    setIsOpen,
    showSideBar,
    setShowSideBar,
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => {
  return useContext(ThemeContext);
};
