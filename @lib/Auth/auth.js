import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

export const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(null); // Initially null for loading state
  const router = useRouter();

  useEffect(() => {
    const checkAuthentication = () => {
      try {
        // Check if the user is logged in
        const loggedIn = localStorage.getItem('isLoggedIn');

        if (loggedIn === 'true') { 
          setIsLoggedIn(true);
        } else {
          router.push('/auth/login/');
        }
      } catch (error) {
        console.error('Authentication check failed:', error);
        router.push('/auth/login/');
      }
    };

    checkAuthentication();
  }, [router]);

  return { isLoggedIn, isLoading: isLoggedIn === null }; // Return loading state
};