import { useContext } from 'react';
import { AuthContext } from 'lib/Auth/AuthContext';

const useIsLoggedIn = () => {
  const { isLoggedIn, userData } = useContext(AuthContext);
  return { isLoggedIn, userData };
};

export default useIsLoggedIn;