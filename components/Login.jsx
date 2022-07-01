import { useState } from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { auth } from '../firebase';
import { Card } from './';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { FcGoogle } from 'react-icons/fc';

const Login = () => {
  const router = useRouter();
  const [signInWithGoogle] = useSignInWithGoogle(auth);
  const [login, setLogin] = useState({
    username: "",
    password: "",
    errormsg: []
  });

  const inputHandler = e => {
    e.persist();
    setLogin({...login, [e.target.name]: e.target.value});
  }

  const signInHandler = () => {
    signInWithGoogle("", { prompt: "select_account" });
    router.push('/')
  }
  
  return (
    <div id="guestpage">
      <Head>
        <title>Salvage App | Login</title>
        <meta name="description" content="Salvage App Login Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col justify-center items-center h-full px-8 md:px-0">
        <img src="/assets/brand.svg" alt="Kalla Toyota Urip" className="w-56 md:w-80 xl:w-[400px]" />
        <Card className="w-full md:w-[450px] lg:w-[500px] my-9">
        <div className="card-header text-lg md:text-2xl xl:text-3xl py-4 md:py-6 xl:py-8 w-full text-center bg-secondary text-primary rounded-t-md border-b-2 border-accent">
            LOGIN
        </div>
        <div className="card-body w-full mt-10 px-6 md:px-20 lg:px-16 pb-8">
          <form>
            <div>
              <label htmlFor="username">Username</label>
              <input onChange={inputHandler} value={login.username} id="username" type="text" name="username" autoComplete="off" autoFocus />
            </div>
            
            <div className="mt-5">
              <label htmlFor="password">Password</label>
              <input onChange={inputHandler} value={login.password} id="password" type="password" name="password" autoComplete="current-password" />
              {login.errormsg.password && <small>{ login.errormsg.password }</small>}
            </div>
            
            {/* <div className="mt-5 flex items-center">
              <input type="checkbox" name="remember" id="remember" />
              <label htmlFor="remember" className="font-normal text-sm pl-2">Remember me</label>
            </div> */}
            
            <div className="mt-5 mb-9">
              <div className="flex justify-center items-center">
                <button type="submit" className="text-sm button">Login</button>
              </div>
            </div>
                
            {/* <hr />
            <div className="mt-8 text-center text-sm">
              <p>
                Don't have an account?
                <Link to="/register">Sign up</Link>
              </p>
            </div> */}
          </form>
          <div className="flex flex-row justify-center items-center">
            <hr className="grow" />
            <p className="text-center mx-6">OR</p>
            <hr className="grow" />
          </div>
          <div className="mt-5 mb-9">
            <div className="flex justify-center items-center">
              <button onClick={signInHandler} className="flex justify-between items-center gap-x-2 group">
                <FcGoogle className="text-2xl grayscale group-hover:grayscale-0" />
                <p className="group-hover:text-sky-500">Sign In With Google</p>
                </button>
            </div>
          </div>
        </div>
        </Card>
        <p className="text-sm xl:text-base tracking-wider">Copyright &copy; 2022 Kalla Toyota Urip</p>
      </div>
    </div>
  );
};

export default Login;