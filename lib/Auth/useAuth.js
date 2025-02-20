import { useContext, useEffect, useState } from 'react';
import { AuthContext } from 'lib/Auth/AuthProvider'; // Assuming AuthContext is defined in a separate file

const useAuth = () => {
    const { isLoggedIn, user } = useContext(AuthContext);
    const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {
      // const checkLoginStatus = async () => {
      //   try {
      //     const response = await axios.post('https://identity.domaindumper.com/api/v1/user/', {
      //       withCredentials: true, // Important for session-based authentication
      //     });
  
      //     if (response.code === 200 && response.status === 'success') {
      //       setIsLoggedIn(true);
      //       setUser(response.data.data);
      //     } else {
      //       setIsLoggedIn(false);
      //     }
      //   } catch (error) {
      //     // Handle errors appropriately
      //     console.error('Error checking login status:', error);
      //   } finally {
      //     setIsLoading(false);
      //   }
      // };
  
      //checkLoginStatus();
    }, []);
  
    return { isLoggedIn, user, isLoading };
  };
  
  export default useAuth;