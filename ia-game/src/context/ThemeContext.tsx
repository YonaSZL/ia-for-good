import React, { createContext, useContext, useState, useEffect } from 'react';
import { ThemeMode } from '../types';

interface ThemeContextProps {
  themeMode: ThemeMode;
  setThemeMode: (mode: ThemeMode) => void;
}

const ThemeContext = createContext<ThemeContextProps>({
  themeMode: 'neutral',
  setThemeMode: () => {},
});

export const useThemeContext = () => useContext(ThemeContext);

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [themeMode, setThemeMode] = useState<ThemeMode>('neutral');

  useEffect(() => {
    document.body.classList.remove('theme-dystopia', 'theme-neutral', 'theme-utopia');
    document.body.classList.add(`theme-${themeMode}`);
    
    const title = document.querySelector('title');
    if (title) {
      switch (themeMode) {
        case 'utopia':
          title.textContent = 'Éco-Réflexion : Chemin vers le Solarpunk';
          break;
        case 'dystopia':
          title.textContent = 'Éco-Réflexion : Ère du Déclin';
          break;
        default:
          title.textContent = 'Éco-Réflexion : Le Choix du Leader';
      }
    }
  }, [themeMode]);

  return (
    <ThemeContext.Provider value={{ themeMode, setThemeMode }}>
      {children}
    </ThemeContext.Provider>
  );
};