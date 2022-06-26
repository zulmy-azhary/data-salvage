import Button from "../Button";
import { BiMenu } from "react-icons/bi";
import { auth } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { ToggleContext } from "../../context/ToggleContext";
import { useContext } from "react";

const Navbar = () => {
  const [user] = useAuthState(auth);
  const { isOpen, setOpen } = useContext(ToggleContext);
  return (
    <nav className="navbar w-full h-20 fixed z-20 bg-primary shadow-[0_4px_6px_rgba(0,0,0,0.25)] flex justify-between">
			<div className={`hidden md:flex justify-center items-center duration-500 ${isOpen ? "md:w-[272px]" : "w-0"}`}>
				<img className="px-12" src="/assets/brand.svg" alt="Kalla Group" />
			</div>
			<div className="flex grow justify-between items-center mx-5">
				<Button onClick={() => setOpen(!isOpen)}>
					<BiMenu className="text-[2rem]" />
				</Button>
      <div className="account_information">
          <h1>{user?.displayName}</h1>
      </div>
      </div>
		</nav>
  );
};

export default Navbar;