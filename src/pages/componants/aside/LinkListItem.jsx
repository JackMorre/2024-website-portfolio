import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import { useUi } from "../../../context/StateContext";
import { HashLink } from "react-router-hash-link";

export default function LinkListItem({ name, customWidth, url }) {
  const { desktopMode, toggleMenu } = useUi();

  const handleClick = () => {
    toggleMenu();
  };

  return (
    <li className={`${!desktopMode ? "cursor-pointer" : " inline-block"}`}>
      <HashLink
        onClick={!desktopMode ? handleClick : null}
        className="flex justify-between items-center "
        smooth
        to={`/#${url}`}
      >
        <button
          className={`font-light text-smd ${
            desktopMode ? "rotate-[-90deg] pr-4" : ""
          } ${customWidth ? "w-[94px] " : ""}`}
        >
          {name}
        </button>

        {!desktopMode && (
          <FaAngleRight
            style={{ color: "#8A74E3", width: "40px", height: "40px" }}
          />
        )}
      </HashLink>
    </li>
  );
}
