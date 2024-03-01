import Hamburger from "hamburger-react";
import { useUi } from "../../../context/StateContext";
import Aside from "../aside/Aside";

export default function Header() {
  const { menuOpen, toggleMenu, desktopMode } = useUi();
  return (
    <header
      className={`w-full fixed top-0 left-0 flex z-10 items-center justify-center bg-light h-[10%]`}
    >
      <h2>JM</h2>
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
