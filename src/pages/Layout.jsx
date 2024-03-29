import { useEffect } from "react";
import { useUi } from "../context/StateContext";
import { useWindowSize } from "../pages/hooks/useWindowSize";
import Header from "./componants/header/Header";
import { Outlet } from "react-router-dom";

export default function Layout() {
  const { onDesktop, offDesktop, updateMainWidth, menuOpen, desktopMode } =
    useUi();
  const [width] = useWindowSize();
  useEffect(
    function () {
      if (width >= 640) {
        onDesktop();
      } else {
        offDesktop();
      }
      const newWidth = width - 50;

      updateMainWidth(newWidth);
    },
    [width, onDesktop, offDesktop, updateMainWidth]
  );

  useEffect(() => {
    const body = document.querySelector("body");
    body.style.overflow = desktopMode ? "scroll" : menuOpen ? "hidden" : "auto";
  }, [menuOpen, desktopMode]);

  useEffect(function () {}, []);
  return (
    <main
      className={` h-screen bg-light ${
        desktopMode
          ? `w-[calc(100vw-50px)] xl:w-[calc(100vw-70px)] ml-auto `
          : "w-full"
      }`}
    >
      <Header />
      <Outlet />
    </main>
  );
}
