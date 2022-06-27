import { signOut } from 'firebase/auth';
import Link from 'next/link';
import { auth } from '../../firebase';
import { useRouter } from 'next/router';
import { useContext } from 'react';
import { ToggleContext } from '../../context/ToggleContext';

const Sidebar = () => {
  const router = useRouter();
  const { isOpen } = useContext(ToggleContext);
  const signOutHandler = () => {
    signOut(auth).then(() => {
      router.push('/');
    }).catch(err => {
      console.log(err);
    })
  }

  return (
    <aside className={`w-[272px] sidebar duration-500 h-full overflow-hidden fixed z-10 shadow-[4px_0_6px_rgba(0,0,0,0.25)] bg-primary ${isOpen ? "left-0" : "-left-[272px]"}`}>
      <div className="sidebar-menu flex flex-col justify-between items-center h-full pt-32 pb-10">
        <ul className="w-full">
          <li className={router.pathname === '/' || router.pathname === '/dashboard' ? "active" : ""}><Link href="/">Dashboard</Link></li>
          <li className={router.pathname === '/create-data' ? "active" : ""}><Link href="/create-data">Create Data</Link></li>
          <li className={router.pathname === '/data-salvage' ? "active" : ""}><Link href="/data-salvage">Data Salvage</Link></li>
        </ul>
        <button type="button" className="cursor-pointer" onClick={signOutHandler}>Logout</button>
      </div>
    </aside>
  );
};

export default Sidebar;