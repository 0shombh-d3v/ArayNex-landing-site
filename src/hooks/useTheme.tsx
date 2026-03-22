import { useState, useEffect } from 'react';

type Theme = 'light' | 'dark' | 'system';

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(
    () => (localStorage.getItem('theme') as Theme) || 'system'
  );

  useEffect(() => {
    const root = window.document.documentElement;

    const applyTheme = (currentTheme: Theme) => {
      if (currentTheme === 'system') {
        const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
          ? 'dark'
          : 'light';
        root.setAttribute('data-theme', systemTheme);
        localStorage.removeItem('theme');
      } else {
        root.setAttribute('data-theme', currentTheme);
        localStorage.setItem('theme', currentTheme);
      }
    };

    applyTheme(theme);

    // Watch for system theme changes if using system theme
    if (theme === 'system') {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      const handleChange = () => applyTheme('system');
      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    }
  }, [theme]);

  return { theme, setTheme };
}
