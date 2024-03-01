import { useEffect } from "react";
import { useUi } from "../context/StateContext";
import AboutMe from "./componants/about-me/AboutMe";
import Connect from "./componants/connect/Connect";
import Footer from "./componants/footer/Footer";
import Header from "./componants/header/Header";
import Hero from "./componants/hero/Hero";
import Skills from "./componants/skills/Skills";
import WorkList from "./componants/work/WorkList";

export default function Home() {
  const { desktopMode, menuOpen } = useUi();

  useEffect(() => {
    const body = document.querySelector("body");
    body.style.overflow = desktopMode ? "auto" : menuOpen ? "hidden" : "auto";
  }, [menuOpen, desktopMode]);

  return (
    <main
      className={` h-screen ${
        desktopMode ? `w-[calc(100vw-50px)] ml-auto` : "w-full"
      }`}
    >
      <Header />
      <Hero />
      <AboutMe />
      <Skills />
      <WorkList />
      <Connect />
      <Footer />
    </main>
  );
}
