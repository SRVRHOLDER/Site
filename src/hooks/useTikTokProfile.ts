import { useState, useEffect } from 'react';

export function useTikTokProfile(username: string) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Simulate loading to give a smooth transition
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [username]);

  return { loading, error };
}