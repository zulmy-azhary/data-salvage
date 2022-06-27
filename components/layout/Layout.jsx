import { Navbar, Sidebar, Footer } from './';
import { ToggleContext } from '../../context/ToggleContext';
import { useContext } from 'react';
import Head from 'next/head';

const Layout = ({ children, title = "Memuat..." }) => {
  const { isOpen } = useContext(ToggleContext);

  return (
    <>
      <Head>
        <title>Salvage App | { title }</title>
      </Head>
      <Navbar />
      <Sidebar />
      <main id="homepage" className={`app__content-wrapper w-full pt-20 pb-[42px] min-h-screen duration-500 ${isOpen && "lg:pl-[272px]"}`}>
        <section className="app__content-container px-5 md:px-12 lg:px-16 my-12">
          {children}
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Layout;