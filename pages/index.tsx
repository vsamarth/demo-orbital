import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home | WorkNow</title>
      </Head>
      <h1 className="bg-red-300">Hello World</h1>
    </>
  );
};

export default Home;
