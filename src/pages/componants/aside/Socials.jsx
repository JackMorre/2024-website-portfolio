import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { useUi } from "../../../context/StateContext";

export default function Socials({ isRow }) {
  const { desktopMode } = useUi();
  return (
    <ul
      className={`flex gap-4  ${
        desktopMode
          ? `flex-col items-center ${isRow ? "sm:flex-row" : "mb-6"}`
          : "flex-row mx-auto p-4 justify-center"
      }`}
    >
      <li className="text-dark hover:text-color">
        <FaGithub style={{ height: "30px", width: "30px", color: "inherit" }} />
      </li>
      <li className="text-dark hover:text-color">
        <FaTwitter
          style={{ height: "30px", width: "30px", color: "inherit" }}
        />
      </li>
      <li className="text-dark hover:text-color">
        <FaLinkedin
          style={{ height: "30px", width: "30px", color: "inherit" }}
        />
      </li>
    </ul>
  );
}
