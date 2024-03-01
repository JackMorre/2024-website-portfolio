import { useEffect } from "react";
import Home from "./Home";

import { useUi } from "../context/StateContext";
import { useWindowSize } from "../pages/hooks/useWindowSize";

export default function Layout() {
  const { onDesktop, offDesktop, updateMainWidth, menuOpen } = useUi();
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
    [width, onDesktop, offDesktop]
  );

  useEffect(function () {}, []);
  return (
    <div className={`bg-light `}>
      <Home />
    </div>
  );
}
