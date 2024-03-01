import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import { useUi } from "../../../context/StateContext";

export default function LinkListItem({ name, customWidth }) {
  const { desktopMode } = useUi();
  return (
    <li
      className={`${
        !desktopMode ? "flex justify-between items-center " : " inline-block"
      }`}
    >
      <p
        className={`font-light text-smd ${
          desktopMode ? "rotate-[-90deg] pr-4" : ""
        } ${customWidth ? "w-[94px] " : ""}`}
      >
        {name}
      </p>
      {!desktopMode && (
        <FaAngleRight
          style={{ color: "#8A74E3", width: "40px", height: "40px" }}
        />
      )}
    </li>
  );
}
