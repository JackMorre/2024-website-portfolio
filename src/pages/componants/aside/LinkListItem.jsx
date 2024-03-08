import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import { useUi } from "../../../context/StateContext";
import { HashLink } from "react-router-hash-link";

export default function LinkListItem({ name, customWidth, url }) {
  const { desktopMode, toggleMenu, clickedLink, updateWork, clickedWork } =
    useUi();

  const handleClick = () => {
    toggleMenu();
  };

  const handleDesktopClick = () => {
    updateWork();
  };

  return (
    <li className={`${!desktopMode ? "cursor-pointer" : " inline-block"}`}>
      {clickedWork === undefined ? (
        <HashLink
          onClick={!desktopMode ? handleClick : handleDesktopClick}
          smooth
          className="flex justify-between items-center "
          to={`/#${url}`}
        >
          <button
            className={`font-light text-sm transition-all ${
              desktopMode
                ? `rotate-[-90deg] text-nowrap border-b-2 ${
                    clickedLink === url
                      ? "border-color"
                      : "border-light hover:border-color"
                  }`
                : ""
            } ${customWidth ? "" : ""}`}
          >
            {name}
          </button>

          {!desktopMode && (
            <FaAngleRight
              style={{ color: "#8A74E3", width: "40px", height: "40px" }}
            />
          )}
        </HashLink>
      ) : (
        <HashLink
          onClick={!desktopMode ? handleClick : handleDesktopClick}
          className="flex justify-between items-center "
          to={`/#${url}`}
        >
          <button
            className={`font-light text-sm transition-all ${
              desktopMode
                ? `rotate-[-90deg] text-nowrap border-b-2 ${
                    clickedLink === url
                      ? "border-color"
                      : "border-light hover:border-color"
                  }`
                : ""
            } ${customWidth ? "" : ""}`}
          >
            {name}
          </button>

          {!desktopMode && (
            <FaAngleRight
              style={{ color: "#8A74E3", width: "40px", height: "40px" }}
            />
          )}
        </HashLink>
      )}
    </li>
  );
}
