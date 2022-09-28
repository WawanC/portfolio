import type { NextPage } from "next";
import AboutMe from "../components/aboutme";
import ContactMe from "../components/contactme";
import Hero from "../components/hero";
import NavBar from "../components/navbar";
import Projects from "../components/projects";
import Techs from "../components/techs";

const Home: NextPage = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <AboutMe />
      <Techs />
      <Projects />
      <ContactMe />
    </>
  );
};

export default Home;
