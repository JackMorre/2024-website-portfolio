import { useState } from "react";
import ReactSwitch from "react-switch";
import { FaMobileAlt } from "react-icons/fa";
import { FaGithub, FaRegShareFromSquare } from "react-icons/fa6";
import { handleOpenTab } from "../../../helpers/handlers";
import bodega from "../../../images/the-bodega-norwich.netlify.app_.webp";

const skillsUsed = ["HTML", "CSS", "Javascript", "Figma", "Responsive Design"];

export default function TheBodega() {
  const [isMobile, setIsMobile] = useState(false);
  const handleChange = () => {
    setIsMobile(!isMobile);
  };
  return (
    <div className=" py-16  bg-light px-4 flex flex-col gap-4">
      <div className="flex flex-col gap-8">
        <div className="flex items-center justify-center gap-4 flex-col">
          <h1 className="text-7xl font-oswald font-semibold text-color">
            The Bodega
          </h1>
          <div className="flex gap-2 flex-row-reverse">
            <FaMobileAlt
              style={{
                height: "30px",
                width: "30px",
                color: isMobile ? "#8A74E3" : "#334155",
              }}
            />
            <ReactSwitch
              checked={isMobile}
              onChange={handleChange}
              onColor="#8A74E3"
              onHandleColor="#8A74E3"
              handleDiameter={30}
              uncheckedIcon={false}
              checkedIcon={false}
              boxShadow="0px 1px 4px rgba(0, 0, 0, 0.6)"
              activeBoxShadow="0px 0px 1px 4px rgba(0, 0, 0, 0.2)"
              height={20}
              width={48}
              className="react-switch"
              id="material-switch"
            />
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <div className="w-full h-80 bg-black border-color border-4 overflow-y-scroll">
              <img src={bodega} alt="the bodega" />
            </div>
            <div className="w-full h-24 bg-black overflow-x-scroll overflow-hidden flex items-start gap-4">
              <img className="w-[40%]" src={bodega} alt="" />
              <img className="w-[40%]" src={bodega} alt="" />
              <img className="w-[40%]" src={bodega} alt="" />
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <ul className="flex flex-wrap gap-2 items-center justify-center">
              {skillsUsed.map((item) => {
                return (
                  <li>
                    <p className="py-1 px-4 bg-color text-light">{item}</p>
                  </li>
                );
              })}
            </ul>
            <div className="text-center flex flex-col gap-2">
              <p>
                I was enjoying a day out in my home town and decided to get a
                delicious sandwich from the market. I was so captivated by The
                Spamwich(Yes, that it it’s real name). I decided to up The
                Bodega and saw that they didn’t have a website. This got my mind
                running about what there website could look like and low and
                behold, I came up with this.
              </p>
              <p>
                Using mainly HTML, CSS and a little Javascript, I was able to
                create a great website that is on brand for The Bodega and the
                first official website built from scratch.{" "}
              </p>
            </div>
            <div className="flex justify-end gap-4 mr-8">
              <button
                className="text-dark hover:text-color "
                onClick={() => handleOpenTab("https://github.com/JackMorre")}
              >
                <FaGithub
                  style={{ height: "30px", width: "30px", color: "inherit" }}
                />
              </button>
              <button
                onClick={(e) =>
                  handleOpenTab(e, "https://the-bodega-norwich.netlify.app/")
                }
                className="text-color bg-light hover:text-light hover:bg-color w-8 h-8 rounded-full flex items-center justify-center"
              >
                <FaRegShareFromSquare style={{ color: "inherit" }} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
