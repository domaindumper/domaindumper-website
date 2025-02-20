import React, { useEffect, useState } from 'react';
import { useTranslation } from 'next-i18next';
import styles from './ThemeToggler.module.scss';

const ThemeToggler = () => {
  const [theme, setTheme] = useState('light');
  const [mounted, setMounted] = useState(false);
  const { t } = useTranslation('common');

  useEffect(() => {
    setMounted(true);
    const storedTheme = localStorage.getItem('theme') || 
      (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    setTheme(storedTheme);
    document.documentElement.setAttribute('data-bs-theme', storedTheme);
  }, []);

  useEffect(() => {
    if (mounted) {
      document.documentElement.setAttribute('data-bs-theme', theme);
      localStorage.setItem('theme', theme);
    }
  }, [theme, mounted]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  if (!mounted) return null;

  return (
    <li className="nav-item">
      <button
        className={`nav-link btn btn-link p-0 ${styles.themeToggler}`}
        onClick={toggleTheme}
        aria-label={t(`theme.${theme}`)}
      >
        <div className={styles.iconWrapper}>
          {theme === 'dark' ? (
            <svg className={styles.sunIcon} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="5"/>
              <line className={styles.ray} x1="12" y1="1" x2="12" y2="3"/>
              <line className={styles.ray} x1="12" y1="21" x2="12" y2="23"/>
              <line className={styles.ray} x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
              <line className={styles.ray} x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
              <line className={styles.ray} x1="1" y1="12" x2="3" y2="12"/>
              <line className={styles.ray} x1="21" y1="12" x2="23" y2="12"/>
              <line className={styles.ray} x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
              <line className={styles.ray} x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
            </svg>
          ) : (
            <svg className={styles.moonIcon} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
            </svg>
          )}
        </div>
      </button>
    </li>
  );
};

export default ThemeToggler;
