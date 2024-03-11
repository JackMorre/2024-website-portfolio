import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { useUi } from "../../../context/StateContext";
import { handleOpenTab } from "../../../helpers/handlers";

export default function Socials({ isRow }) {
  const { desktopMode } = useUi();
  return (
    <ul
      className={`flex gap-2  ${
        desktopMode
          ? `flex-col items-center ${isRow ? "sm:flex-row" : "mb-6"}`
          : "flex-row mx-auto p-4 justify-center"
      }`}
    >
      <li className="text-dark hover:text-color">
        <button
          onClick={(e) => handleOpenTab(e, "https://github.com/JackMorre")}
        >
          <FaGithub
            style={{ height: "30px", width: "30px", color: "inherit" }}
          />
        </button>
      </li>
      <li className="text-dark hover:text-color">
        <button
          onClick={(e) => handleOpenTab(e, "https://twitter.com/Jack_Morre")}
        >
          <FaTwitter
            style={{ height: "30px", width: "30px", color: "inherit" }}
          />
        </button>
      </li>
      <li className="text-dark hover:text-color">
        <button
          onClick={(e) =>
            handleOpenTab(
              e,
              "https://www.linkedin.com/in/jack-morrell-bb7a7b124/"
            )
          }
        >
          <FaLinkedin
            style={{ height: "30px", width: "30px", color: "inherit" }}
          />
        </button>
      </li>
    </ul>
  );
}
