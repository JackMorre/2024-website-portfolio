import AboutMe from "./componants/about-me/AboutMe";
import Connect from "./componants/connect/Connect";
import Footer from "./componants/footer/Footer";
import Hero from "./componants/hero/Hero";
import Skills from "./componants/skills/Skills";
import WorkList from "./componants/work/WorkList";

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutMe />
      <Skills />
      <WorkList />
      <Connect />
      <Footer />
    </main>
  );
}
