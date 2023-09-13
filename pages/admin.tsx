import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { supabase } from '../data/supabase';

export default function Admin() {
  const router = useRouter();

  useEffect(() => {
    supabase.auth.onAuthStateChange((event, session) => {
      if (!session) {
        router.replace('/');
      }
    });
  }, []);

  return <div>Admin Page Content</div>;
}
