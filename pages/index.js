import Login from '../components/Login'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../firebase'
import Dashboard from './dashboard';


export default function Home() {
  const [user] = useAuthState(auth);

  return (
    <>
      {user ? <Dashboard /> : <Login />}
    </>
  )
}
