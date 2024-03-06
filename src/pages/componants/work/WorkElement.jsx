import { checkData } from "../../../helpers/workData";
import { FaGithub } from "react-icons/fa6";
import { handleOpenTab } from "../../../helpers/handlers";
import ScrollToTop from "../ScrollToTop";
import { useParams } from "react-router-dom";
import { useUi } from "../../../context/StateContext";
import { useEffect } from "react";
import Error from "../error/Error";
import { Helmet } from "react-helmet";

export default function WorkElement() {
  const { clickedWork, updateWork } = useUi();

  const { work } = useParams();

  useEffect(
    function () {
      updateWork(checkData(work));
    },
    [updateWork, work]
  );

  return (
    <>
      <ScrollToTop />
      {clickedWork.name === undefined ? (
        <Error />
      ) : (
        <>
          <Helmet>
            <title>{clickedWork.name} - Jack Morrell Portfolio</title>
            <meta charset="UTF-8" />
            <link rel="icon" type="image/svg+xml" href="/Logo-coloured.png" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1.0"
            />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link
              rel="preconnect"
              href="https://fonts.gstatic.com"
              crossorigin
            />
            <link
              href="https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&family=Oswald:wght@200..700&display=swap"
              rel="stylesheet"
            />
          </Helmet>
          <div className=" py-16  bg-light px-4 flex flex-col gap-4 ">
            <div className="flex flex-col gap-8">
              <div className="flex items-center justify-center gap-4 flex-col">
                <h1 className="text-7xl font-oswald font-semibold text-color">
                  {clickedWork.name}
                </h1>
              </div>
              <div className="flex flex-col justify-center items-center gap-6">
                <div className="w-full h-72 sm:h-[300px] sm:w-[600px] bg-light border-color border-4 overflow-hidden">
                  <img
                    src={clickedWork.desktopImage}
                    className="scale-1 object-cover"
                    alt="the bodega"
                  />
                </div>

                <div className="flex flex-col gap-8 sm:w-3/4  justify-center items-center">
                  <ul className="flex flex-wrap gap-2 items-center justify-center ">
                    {clickedWork?.skillsUsed.map((item) => {
                      return (
                        <li key={item}>
                          <p className=" font-oswald px-2 bg-color text-light text-2xl">
                            {item}
                          </p>
                        </li>
                      );
                    })}
                  </ul>
                  <div className="text-center flex flex-col gap-2 text-sm sm:text-left md:text-lg font-merriweather">
                    <ul className="flex flex-col gap-4">
                      {clickedWork?.longText.map((text, i) => {
                        return (
                          <li key={i}>
                            <p className="text-center">{text}</p>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                  <div className="flex justify-center gap-4 sm:just">
                    <button
                      className="text-dark hover:text-color "
                      onClick={() => handleOpenTab(clickedWork.githubURL)}
                    >
                      <FaGithub
                        style={{
                          height: "30px",
                          width: "30px",
                          color: "inherit",
                        }}
                      />
                    </button>
                    <button
                      onClick={(e) => handleOpenTab(e, clickedWork.websiteURL)}
                      className="text-light bg-color hover:text-light hover:bg-color rounded-full flex items-center justify-center px-2 font-oswald"
                    >
                      Open Website
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
