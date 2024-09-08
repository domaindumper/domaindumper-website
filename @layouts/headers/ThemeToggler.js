import React, { useEffect, useState } from 'react';

const ThemeToggler = () => {
  
    const [theme, setTheme] = useState('light');
  
    useEffect(() => {
      const storedTheme = localStorage.getItem('theme');
      if (storedTheme) {
        setTheme(storedTheme);
      } else {
        const htmlTheme = document.documentElement.getAttribute('data-bs-theme');
        if (htmlTheme) {
          setTheme(htmlTheme);
        }
      }
    }, []);
  
    useEffect(() => {
      document.documentElement.setAttribute('data-bs-theme', theme);
      localStorage.setItem('theme', theme);
    }, [theme]);
  
    const toggleTheme = () => {
      setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
    };
  
    return (
      <li className="nav-item dropdown">
        <a href='#'
          className="btn btn-link nav-link py-2 px-0 px-lg-2 dropdown-toggle d-flex align-items-center"
          id="bd-theme"
          aria-expanded="false"
          data-bs-toggle="dropdown"
          data-bs-display="static"
          aria-label={`Toggle theme (${theme})`}
        >
          {theme === 'light' ? (
            <span className="material-symbols-outlined my-1 theme-icon-active">light_mode</span>
          ) : (
            <span className="material-symbols-outlined my-1 theme-icon-active">dark_mode</span>
          )}
          <span className="d-lg-none ms-2" id="bd-theme-text">
            Toggle theme
          </span>
        </a>
        <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="bd-theme-text">
          <li className='mb-1'>
            <button
              type="button"
              className={`dropdown-item d-flex align-items-center ${theme === 'light' ? 'active' : ''}`}
              data-bs-theme-value="light"
              aria-pressed={theme === 'light'}
              onClick={toggleTheme}
            >
              <span className="material-symbols-outlined me-2 opacity-50 align-middle fs-5 theme-icon">light_mode</span>
              Light
              <span className={`material-symbols-outlined ms-auto ${theme === 'light' ? '' : 'd-none'}`}>check</span>
            </button>
          </li>
          <li className='mb-1'>
            <button
              type="button"
              className={`dropdown-item d-flex align-items-center ${theme === 'dark' ? 'active' : ''}`}
              data-bs-theme-value="dark"
              aria-pressed={theme === 'dark'}
              onClick={toggleTheme}
            >
              <span className="material-symbols-outlined me-2 opacity-50 align-middle fs-5 theme-icon">dark_mode</span>
              Dark
              <span className={`material-symbols-outlined ms-auto ${theme === 'dark' ? '' : 'd-none'}`}>check</span>
            </button>
          </li>
          <li>
            <button
              type="button"
              className={`dropdown-item d-flex align-items-center ${theme === 'auto' ? 'active' : ''}`}
              data-bs-theme-value="auto"
              aria-pressed={theme === 'auto'}
              onClick={toggleTheme}
            >
              <span className="material-symbols-outlined me-2 opacity-50 theme-icon align-middle fs-5">brightness_auto</span>
              Auto
              <span className={`material-symbols-outlined ms-auto ${theme === 'auto' ? '' : 'd-none'}`}>check</span>
            </button>
          </li>
        </ul>
      </li>
    );
  };
  

export default ThemeToggler;
