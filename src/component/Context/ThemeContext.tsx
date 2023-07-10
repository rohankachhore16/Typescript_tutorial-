import { theme } from "./Theme";
import { ReactNode, createContext } from "react";
type ThemeContextProviderProps = {
  children: ReactNode;
};
export const ThemeContext = createContext(theme);

export const ThemeContextProvider = ({
  children,
}: ThemeContextProviderProps) => {
  return <ThemeContext.Provider value={theme}>
    {
      children
    }
  </ThemeContext.Provider>;
};
