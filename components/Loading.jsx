import { ImSpinner9 } from 'react-icons/im';
import Head from 'next/head';

const Loading = () => {
  return (
    <>
      <Head>
        <title>Memuat...</title>
      </Head>
      <div className="absolute flex justify-center items-center bg-gray-200/50 w-screen h-screen z-[9999]">
        <ImSpinner9 className="animate-spin" />
      </div>
    </>
  );
};

export default Loading;