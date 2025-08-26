'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import './globals.css';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const loggedIn = sessionStorage.getItem('isLoggedIn');
    if (loggedIn) {
      router.replace('/dashboard');
    } else {
      router.replace('/auth/login');
    }
  }, [router]);

  return <div className="flex items-center justify-center min-h-screen">Loading...</div>;
}
