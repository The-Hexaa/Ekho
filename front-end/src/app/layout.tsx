"use client";
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { isAuthenticated } from '../utils/auth';
import Navbar from '../components/Navbar';
import '../styles/globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  useEffect(() => {
    if (router.pathname !== '/login' && router.pathname !== '/register' && !isAuthenticated()) {
      router.push('/login');
    } else if ((router.pathname === '/login' || router.pathname === '/register') && isAuthenticated()) {
      router.push('/main');
    }
  }, [router]);

  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}


