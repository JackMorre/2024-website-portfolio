import { FaRegShareFromSquare } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { useUi } from "../../../context/StateContext";
import { handleOpenTab } from "../../../helpers/handlers";

export default function WorkListItem({ data }) {
  const { updateWork } = useUi();
  const navigate = useNavigate();

  const handleSeeMore = () => {
    updateWork(data);
    navigate(data.extensionURL);
  };
  return (
    <li className="px-4 py-4 flex flex-col items-center gap-4 md:flex-row">
      <div className="w-full h-52 overflow-hidden border-color border-4 mx-4 bg-[#fafafa]">
        <img
          className="w-full h-auto"
          src={data.desktopImages[0]}
          alt={`${data.name} webiste`}
        />
      </div>
      <div className="w-full mx-4">
        <h3 className="text-color text-6xl font-oswald font-semibold mb-4 md:text-4xl">
          {data.name}
        </h3>
        <p className="font-merriweather text-2xl mb-8 md:text-lg">
          {data.smallText}
        </p>
        <div className="flex mt-auto justify-between">
          <button
            onClick={handleSeeMore}
            className="text-2xl font-merriweather font-bold flex gap-1 border-light border-b-2 items-center md:text-xl hover:border-color"
          >
            <span>See more</span>
            <FaAngleRight />
          </button>
          <button
            onClick={(e) => handleOpenTab(e, data.websiteURL)}
            className="text-color bg-light hover:text-light hover:bg-color w-8 h-8 rounded-full flex items-center justify-center"
          >
            <FaRegShareFromSquare style={{ color: "inherit" }} />
          </button>
        </div>
      </div>
    </li>
  );
}
