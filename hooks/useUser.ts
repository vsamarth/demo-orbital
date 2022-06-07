import { User } from '@supabase/supabase-js';
import { useEffect, useState } from 'react';
import { supabase } from '../helpers/supabase';

export default function () {
  const [user, setUser] = useState<User | null>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setUser(supabase.auth.user());
    setIsLoading(false);
  }, []);

  return { user, isLoading };
}
