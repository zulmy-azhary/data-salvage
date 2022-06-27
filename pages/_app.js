import { useAuthState } from "react-firebase-hooks/auth";
import { Loading } from "../components";
import Login from "../components/Login";
import { ToggleProvider } from "../context/ToggleContext";
import { auth } from "../firebase";
import { useRouter } from "next/router";
import "../styles/globals.css";
import 'react-toastify/dist/ReactToastify.min.css';
import { ToastContainer } from 'react-toastify';

function MyApp({ Component, pageProps }) {
	const [user, loading] = useAuthState(auth);
	const router = useRouter();

	console.log(router);

	if (loading) {
		return <Loading />;
	}

	if (!user) {
		return (
			<>
				<Login />
				<ToastContainer
					position="top-right"
					closeOnClick
					autoClose={3000}
					pauseOnFocusLoss={false}
					pauseOnHover={false}
					limit={2}
					draggable
				/>
			</>
		);
	}

	return (
		<ToggleProvider>
			<Component {...pageProps} />
      <ToastContainer
        position="top-right"
        closeOnClick
        autoClose={3000}
        pauseOnFocusLoss={false}
        pauseOnHover={false}
        limit={2}
        draggable
      />
		</ToggleProvider>
	);
}

export default MyApp;
