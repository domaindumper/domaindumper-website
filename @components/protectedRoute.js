// components/protectedRoute.js
import { useAuth } from '@lib/Auth/auth';
import { useRouter } from 'next/router';

const ProtectedRoute = ({ children }) => {
    const { isLoggedIn, isLoading } = useAuth();
    const router = useRouter();

    console.log(isLoggedIn);
  
    if (isLoading) {
      return <div>Loading...</div>; // Show a loading indicator
    }
  
    if (!isLoggedIn) {
      router.push('/auth/login/');
      return null;
    }
  
    return <>{children}</>;
  };
  
  export default ProtectedRoute;