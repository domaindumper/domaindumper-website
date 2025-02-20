import React, { useEffect, useState } from 'react';

const ThemeToggler = () => {
  const [theme, setTheme] = useState('light');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const initializeTheme = () => {
      const storedTheme = localStorage.getItem('theme');
      if (storedTheme) {
        return storedTheme;
      }
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    };

    const initialTheme = initializeTheme();
    setTheme(initialTheme);
    document.documentElement.setAttribute('data-bs-theme', initialTheme);
  }, []);

  useEffect(() => {
    if (mounted) {
      document.documentElement.setAttribute('data-bs-theme', theme);
      localStorage.setItem('theme', theme);
    }
  }, [theme, mounted]);

  const handleThemeChange = (newTheme) => {
    if (newTheme === 'auto') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      setTheme(systemTheme);
    } else {
      setTheme(newTheme);
    }
  };

  if (!mounted) return null;

  return (
    <li className="nav-item dropdown theme-toggler">
      <button
        className="btn btn-link nav-link py-2 px-0 px-lg-2 dropdown-toggle d-flex align-items-center"
        id="bd-theme"
        type="button"
        aria-expanded="false"
        data-bs-toggle="dropdown"
        data-bs-display="static"
        aria-label={`Toggle theme (${theme})`}
      >
        <span className="material-symbols-rounded theme-icon-active">
          {theme === 'dark' ? 'dark_mode' : 'light_mode'}
        </span>
        <span className="d-lg-none ms-2">Toggle theme</span>
      </button>

      <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="bd-theme">
        {[
          { value: 'light', icon: 'light_mode', label: 'Light' },
          { value: 'dark', icon: 'dark_mode', label: 'Dark' },
          { value: 'auto', icon: 'brightness_auto', label: 'Auto' }
        ].map(({ value, icon, label }) => (
          <li key={value}>
            <button
              className={`dropdown-item d-flex align-items-center ${theme === value ? 'active' : ''}`}
              onClick={() => handleThemeChange(value)}
              type="button"
              aria-pressed={theme === value}
            >
              <span className="material-symbols-rounded me-2 opacity-50">
                {icon}
              </span>
              {label}
              {theme === value && (
                <span className="material-symbols-rounded ms-auto">check</span>
              )}
            </button>
          </li>
        ))}
      </ul>
    </li>
  );
};

export default ThemeToggler;
