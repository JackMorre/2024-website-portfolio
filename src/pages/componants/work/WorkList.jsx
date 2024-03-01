import bodega from "../../../images/the-bodega-norwich.netlify.app_.webp";
import { FaRegShareFromSquare } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";

const workData = [
  {
    name: "The Bodega",
    smallText:
      "A small front-end website for a sandwich shop based in the heart of Norwich, Norfolk.",
    longText: [
      "I was enjoying a day out in my home town and decided to get a delicious sandwich from the market. I was so captivated by The Spamwich(Yes, that it it’s real name). I decided to up The Bodega and saw that they didn’t have a website. This got my mind running about what there website could look like and low and behold, I came up with this.",
      "Using mainly HTML, CSS and a little Javascript, I was able to create a great website that is on brand for The Bodega and the first official website built from scratch. ",
    ],
    websiteURL: "https://the-bodega-norwich.netlify.app/",
    githubURL: "https://github.com/JackMorre/The_Bodega",
    skillsUsed: ["HTML", "CSS", "Javascript", "Figma", "Responsive Design"],
    desktopImages: [bodega],
    mobileImages: [],
  },
];

export default function WorkList() {
  return (
    <div className="bg-light">
      <ul>
        <li className="px-4 py-32 flex flex-col items-center gap-4 md:flex-row">
          <div className="w-full h-72 overflow-hidden border-color border-4 mx-4">
            <img src={bodega} alt="" />
          </div>
          <div className="w-full mx-4">
            <h3 className="text-color text-6xl font-oswald font-semibold mb-4">
              The Bodega
            </h3>
            <p className="font-merriweather text-2xl mb-8">
              A small front-end website for a sandwich shop based in the heart
              of Norwich, Norfolk.
            </p>
            <div className="flex mt-auto justify-between">
              <button className="text-2xl font-merriweather font-bold flex gap-1 items-center">
                <span>See more</span>
                <FaAngleRight />
              </button>
              <button className="text-color bg-light hover:text-light hover:bg-color w-8 h-8 rounded-full flex items-center justify-center">
                <FaRegShareFromSquare style={{ color: "inherit" }} />
              </button>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}
