import { checkData } from "../../../helpers/workData";

import ScrollToTop from "../ScrollToTop";
import { useParams } from "react-router-dom";
import { useUi } from "../../../context/StateContext";
import { useEffect } from "react";
import Error from "../error/Error";

import Title from "./Title";
import MainHelmet from "./MainHelmet";
import MainImage from "./MainImage";
import SkillsUsed from "./SkillsUsed";
import LongText from "./LongText";
import DirectLinks from "./DirectLinks";

export default function WorkElement({ name }) {
  const { clickedWork, updateWork } = useUi();

  const { work } = useParams();

  useEffect(
    function () {
      updateWork(checkData(name));
    },
    [updateWork, name]
  );

  return (
    <>
      <ScrollToTop />
      {clickedWork.name === undefined ? (
        <Error />
      ) : (
        <>
          <MainHelmet />
          {clickedWork.apps === undefined ? (
            <div className=" py-16  bg-light px-4 flex flex-col gap-4 ">
              <div className="flex flex-col justify-center items-center gap-8 pt-10">
                <Title />
                <MainImage />
                <SkillsUsed />
                <LongText />
                <DirectLinks
                  github={clickedWork.githubURL}
                  website={clickedWork.websiteURL}
                />
              </div>
            </div>
          ) : (
            <div className="pt-20 bg-light flex flex-col gap-8">
              <Title />
              <ul className="p-4 flex flex-col gap-12 items-center">
                {clickedWork.apps.map((app) => {
                  return (
                    <li
                      className="flex flex-col gap-2 sm:flex-row max-w-4xl"
                      key={app.name}
                    >
                      <div className="w-full sm:w-1/2">
                        <img src={app.image} alt="" />
                      </div>
                      <div className="w-full sm:w-1/2 flex flex-col items-center justify-center gap-4">
                        <h2 className="text-2xl md:text-4xl font-oswald font-semibold text-color text-center">
                          {app.name}
                        </h2>
                        <p className="font-merriweather text-lg sm:text-sm text-center mb-4 lg:text-lg">
                          {app.smallText}
                        </p>
                        <DirectLinks
                          github={app.githubURL}
                          website={app.websiteURL}
                        />
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
        </>
      )}
    </>
  );
}
