import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home | WorkNow</title>
      </Head>
      <div className="bg-red-400">Hello World</div>
    </>
  );
};

export default Home;
