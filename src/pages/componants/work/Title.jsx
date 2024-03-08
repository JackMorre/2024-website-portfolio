import React from "react";
import { useUi } from "../../../context/StateContext";

export default function Title() {
  const { clickedWork } = useUi();
  return (
    <div className="flex items-center justify-center gap-4 flex-col">
      <h1 className="text-5xl font-oswald font-semibold text-color sm:text-7xl text-center">
        {clickedWork.name}
      </h1>
    </div>
  );
}
