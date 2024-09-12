import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(null); // Initialize as null
  const [user, setUser] = useState(null);

  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const response = await axios.get('https://identity.domaindumper.com/api/v1/user/', {
          withCredentials: true, // Important for session-based authentication
        });

        if (response.code === 200 && response.status === 'success') {
          setIsLoggedIn(true);
          setUser(response.data);
        } else {
          setIsLoggedIn(false);
        }
      } catch (error) {
        // Handle errors appropriately
        console.error('Error checking login status:', error);
      }
    };

    checkLoginStatus();
  }, []);

  return (
    <AuthContext.Provider value={{ isLoggedIn, user }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;