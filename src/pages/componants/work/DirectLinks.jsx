import React from "react";
import { FaGithub } from "react-icons/fa6";
import { handleOpenTab } from "../../../helpers/handlers";

export default function DirectLinks({ github, website }) {
  return (
    <div className="flex justify-center gap-4 sm:just">
      {github === undefined ? null : (
        <button
          className="text-dark hover:text-color "
          onClick={(e) => handleOpenTab(e, github)}
        >
          <FaGithub
            style={{
              height: "30px",
              width: "30px",
              color: "inherit",
            }}
          />
        </button>
      )}

      <button
        onClick={(e) => handleOpenTab(e, website)}
        className="text-light bg-color hover:text-light hover:bg-color rounded-full flex items-center justify-center px-2 font-oswald"
      >
        Open Website
      </button>
    </div>
  );
}
