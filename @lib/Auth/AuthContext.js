import React, { createContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Check if user is logged in on initial render
    const storedIsLoggedIn = localStorage.getItem('isLoggedIn');
    const storedUserData = localStorage.getItem('userData');

    const storedLoginTime = localStorage.getItem('loginTime');
    if (storedLoginTime) {
      const currentTime = new Date().getTime();
      const loginTime = parseInt(storedLoginTime);
      const expiryTime = loginTime + 3600000; // 1 hour in milliseconds

      if (currentTime > expiryTime) {
        // Login has expired
        localStorage.removeItem('loginTime');
        setIsLoggedIn(false);
        setUserData(null);
      }
    }

    if (storedIsLoggedIn) {
      setIsLoggedIn(true);
      setUserData(JSON.parse(storedUserData));
    }
  }, []);

  const login = (userData) => {
    setIsLoggedIn(true);
    setUserData(userData);
    localStorage.setItem('isLoggedIn', true);
    localStorage.setItem('userData', JSON.stringify(userData));
  };

  const logout = () => {
    setIsLoggedIn(false);
    setUserData(null);
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userData');
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, userData, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;