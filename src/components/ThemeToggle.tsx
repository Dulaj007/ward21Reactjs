import { useState, useEffect } from 'react';
import DarkThemeIcon from '../assets/icons/DarkMode/white-mode.svg';
import  WhiteThemeIcon from '../assets/icons/WhiteMode/dark-mode1.svg';

const ThemeToggle = () => {
  // Initialize theme state based on user's preference or default to light
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme === 'dark';
    } else {
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
  });

  // Update the HTML class and localStorage whenever the theme changes
  useEffect(() => {
    const htmlElement = document.documentElement;
    if (isDarkMode) {
      htmlElement.classList.add('dark');
      htmlElement.classList.remove('light');
      localStorage.setItem('theme', 'dark');
    } else {
      htmlElement.classList.add('light');
      htmlElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  // Toggle theme handler
  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <button onClick={toggleTheme} aria-label="Toggle Theme" 
    className='Button-icon'>
      <img
        className=''
        src={isDarkMode ? DarkThemeIcon : WhiteThemeIcon}
        alt={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
        width={35}
        height={35}
      />
    </button>
  );
};

export default ThemeToggle;
