import { Helmet } from "react-helmet";
import AboutMe from "./componants/about-me/AboutMe";
import Connect from "./componants/connect/Connect";
import Footer from "./componants/footer/Footer";
import Hero from "./componants/hero/Hero";
import Skills from "./componants/skills/Skills";
import WorkList from "./componants/work/WorkList";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { useUi } from "../context/StateContext";
import { useEffect, useState } from "react";

export default function Home() {
  const { updateLink } = useUi();
  const { scrollY } = useScroll();
  const [yValue, setYValue] = useState(scrollY.current);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setYValue(latest);
  });

  useEffect(
    function () {
      if (yValue < 400) {
        updateLink("home");
      } else if (yValue < 1200) {
        updateLink("about-me");
      } else if (yValue < 1950) {
        updateLink("work");
      } else if (yValue > 1950) {
        updateLink("connect");
      }
    },
    [updateLink, yValue]
  );

  return (
    <main>
      <Helmet>
        <title>Home - Jack Morrell Portfolio</title>
        <meta charset="UTF-8" />
        <link rel="icon" type="image/svg+xml" href="/Logo-coloured.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&family=Oswald:wght@200..700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <Hero />
      <AboutMe />
      <Skills />
      <WorkList />
      <Connect />
    </main>
  );
}
