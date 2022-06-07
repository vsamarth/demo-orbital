import { User } from '@supabase/supabase-js';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Input from '../components/Input';
import { supabase } from '../helpers/supabase';
import useUser from '../hooks/useUser';

const Home: NextPage = () => {
  const { user, isLoading } = useUser();
  
  if(isLoading){

    return <div>Loaded!</div>
  }

  return (
    <>
      <Head>
        <title>Home | WorkNow</title>
      </Head>
      <div>
        <form action="">
          <Input label="123" />
          {user?.email}
        </form>
      </div>
    </>
  );
};

export default Home;
