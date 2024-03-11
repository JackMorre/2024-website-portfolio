import { FaRegShareFromSquare } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { useUi } from "../../../context/StateContext";
import { handleOpenTab } from "../../../helpers/handlers";
import { useRef } from "react";
import { motion } from "framer-motion";

export default function WorkListItem({ data }) {
  const ref = useRef(null);
  const { updateWork, updateLink } = useUi();
  const navigate = useNavigate();

  const handleSeeMore = () => {
    updateLink("work");
    updateWork(data);
    navigate(data.extensionURL);
  };
  return (
    <motion.li
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      ref={ref}
      className="px-4 py-4 flex flex-col items-center gap-4 md:flex-row"
    >
      <div className="w-full h-52 xl:h-80 overflow-hidden mx-4 bg-[#fafafa]">
        <img
          className="w-full h-auto"
          src={data.desktopImage}
          alt={`${data.name} webiste`}
        />
      </div>
      <div className="w-full mx-4">
        <h3 className="text-color text-5xl font-oswald font-semibold mb-4 md:text-4xl xl:text-7xl">
          {data.name}
        </h3>
        <p className="font-merriweather text-xl mb-8 md:text-lg xl:text-3xl">
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
          {data.websiteURL ? (
            <button
              onClick={(e) => handleOpenTab(e, data.websiteURL)}
              className="text-color bg-light hover:text-light hover:bg-color w-8 h-8 rounded-full flex items-center justify-center"
            >
              <FaRegShareFromSquare style={{ color: "inherit" }} />
            </button>
          ) : null}
        </div>
      </div>
    </motion.li>
  );
}
