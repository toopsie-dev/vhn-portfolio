/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react";

interface ThemeContextType {
  theme: string;
  setTheme: (theme: string) => void;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  setTheme: () => {}, // Placeholder function
  isOpen: false,
  setIsOpen: () => {},
});

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [theme, setTheme] = useState("light");
  const [isOpen, setIsOpen] = useState(false); // Social media icons

  const contextValue: ThemeContextType = {
    theme,
    setTheme,
    isOpen,
    setIsOpen,
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
