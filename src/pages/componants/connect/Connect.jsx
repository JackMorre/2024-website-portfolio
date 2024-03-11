import { FaLinkedinIn } from "react-icons/fa6";
import { handleOpenTab } from "../../../helpers/handlers";

export default function Connect() {
  return (
    <div
      id="connect"
      className="bg-dark flex justify-between sm:justify-start items-center gap-2 h-32 p-8"
    >
      <h4 className="text-light text-2xl font-merriweather">Let's connect!</h4>
      <button
        onClick={(e) =>
          handleOpenTab(
            e,
            "https://www.linkedin.com/in/jack-morrell-bb7a7b124/"
          )
        }
        className="text-light bg-color h-12 w-12 rounded-full flex justify-center items-center hover:bg-light hover:text-color"
      >
        <FaLinkedinIn style={{ color: "inherit" }} />
      </button>
    </div>
  );
}
