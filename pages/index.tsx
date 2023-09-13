import { useEffect } from 'react';
import router from 'next/router';
import { supabase } from '../data/supabase';
import { Auth } from '@supabase/ui';

export default function Home() {
  useEffect(() => {
    // Add these lines to debug
    console.log('Supabase client:', supabase);
    console.log('Supabase client auth:', supabase.auth);

    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        if (event === 'SIGNED_IN') {
          router.replace('/admin');
        }
      }
    );

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Auth.UserContextProvider supabaseClient={supabase}>
        <Auth supabaseClient={supabase} providers={['github']} />
      </Auth.UserContextProvider>
    </div>
  );
}
