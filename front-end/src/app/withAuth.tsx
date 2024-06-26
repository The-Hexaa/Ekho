import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { isAuthenticated } from '../utils/auth';

const withAuth = (WrappedComponent: React.ComponentType) => {
  return (props: any) => {
    const router = useRouter();

    useEffect(() => {
      if (!isAuthenticated()) {
        router.push('/login');
      }
    }, []);

    return <WrappedComponent {...props} />;
  };
};

export default withAuth;
