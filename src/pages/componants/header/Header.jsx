import Hamburger from "hamburger-react";
import { useUi } from "../../../context/StateContext";
import Aside from "../aside/Aside";
import logo from "../../../images/logo.png";

export default function Header() {
  const { menuOpen, toggleMenu, desktopMode } = useUi();
  return (
    <header
      className={`w-full sm:w-[calc(100vw-50px)] fixed top-0 right-0 flex z-10 items-center justify-center bg-light h-[50px]`}
    >
      <img className="w-8" src={logo} alt="jack morrell logo" />
      {!desktopMode && (
        <button className="absolute top-1/6 right-0 z-50 ">
          <Hamburger
            direction="left"
            toggle={toggleMenu}
            toggled={menuOpen}
            size={26}
          />
        </button>
      )}
      <Aside />
    </header>
  );
}
