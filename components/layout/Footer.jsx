import { useContext } from "react";
import { ToggleContext } from "../../context/ToggleContext";

const Footer = () => {
  const { isOpen } = useContext(ToggleContext);
  return (
    <div className={`footer fixed bottom-0 z-0 w-full bg-secondary text-primary border-t-[1px] duration-500 ${isOpen && "lg:pl-[272px]"}`}>
      <div className="py-2 flex justify-between items-center mx-5">
        <p>Copyright &copy; Kalla Toyota, 2022</p>
        <p>v1.2</p>
      </div>
    </div>
  );
};

export default Footer;