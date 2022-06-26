import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Footer from './Footer';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase';
import Home from '../../pages';
import { ToggleContext } from '../../context/ToggleContext';
import { useContext } from 'react';

const Layout = ({ children }) => {
  const [user] = useAuthState(auth);
  const { isOpen } = useContext(ToggleContext)

  if (!user) {
    return <Home />;
  }

  return (
    <>
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