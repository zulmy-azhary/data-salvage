import Head from 'next/head'
import Login from '../components/Login'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../firebase'
import { ImSpinner9 } from "react-icons/im";
import Dashboard from './dashboard';

export default function Home() {
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return (
      <div className="absolute flex justify-center items-center bg-gray-200 opacity-50 w-screen h-screen z-[9999]">
        <ImSpinner9 className="animate-spin" />
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>Salvage App | {user ? "Dashboard" : "Login"}</title>
        <meta name="description" content="Salvage App Login Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {user ? <Dashboard /> : <Login />}
    </>
  )
}
