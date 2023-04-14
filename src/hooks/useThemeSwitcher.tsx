'use client';

import { useEffect, useState } from 'react';

function useThemeSwitcher() {
  const prefereDarkQuery = '(prefers-color-scheme: dark)';
  const [theme, setTheme] = useState<'dark' | 'light'>('light');

  useEffect(() => {
    const preferredDarkQuery = '(prefers-color-scheme: dark)';
    const isDarkMode = window.matchMedia(preferredDarkQuery).matches;
    setTheme(isDarkMode ? 'dark' : 'light');
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia(prefereDarkQuery);
    const handleChange = () => setTheme(mediaQuery.matches ? 'dark' : 'light');
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    const root = window.document.documentElement;
    const isDark = theme === 'dark';
    root.classList.remove(isDark ? 'light' : 'dark');
    root.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  return { theme, setTheme };
}

export default useThemeSwitcher;
