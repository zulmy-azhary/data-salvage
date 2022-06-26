import Link from 'next/link';

const Custom404 = () => {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <h1 className="mb-5">Maaf, halaman yang anda cari tidak ditemukan!! 🙁</h1>
      <Link href="/">Kembali</Link>
    </div>
  )
};

export default Custom404;