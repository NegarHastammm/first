
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import api from '@/lib/apiClient';

export function useAuth(protectedRoute = false) {
  const [loading, setLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);
  const router = useRouter();

  useEffect(() => {
    async function checkAuth() {
      try {
        await api.get('/auth/check'); // server will check access token
        setAuthenticated(true);
      } catch {
        setAuthenticated(false);
        if (protectedRoute) router.replace('/auth/login');
      } finally {
        setLoading(false);
      }
    }
    checkAuth();
  }, [router, protectedRoute]);

  return { authenticated, loading };
}
