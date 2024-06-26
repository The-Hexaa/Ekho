// src/hoc/withAuth.tsx
"use client"; // Ensure this directive is at the top

import { useRouter } from 'next/navigation'; // Updated import
import { useEffect } from 'react';
import { isAuthenticated } from '../utils/auth';

const withAuth = (WrappedComponent: React.ComponentType) => {
  return (props: any) => {
    const router = useRouter();

    useEffect(() => {
      if (!isAuthenticated()) {
        router.push('/login');
      }
    }, [router]);

    return <WrappedComponent {...props} />;
  };
};

export default withAuth;
