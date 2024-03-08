import React from "react";
import { useUi } from "../../../context/StateContext";

export default function MainImage() {
  const { clickedWork } = useUi();
  return (
    <div className="w-full h-56 sm:h-[300px] sm:w-[600px] bg-light  overflow-hidden flex flex-col items-center">
      <img
        src={clickedWork.desktopImage}
        className="scale-1 object-cover"
        alt="the bodega"
      />
    </div>
  );
}
