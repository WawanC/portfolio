import type { NextPage } from "next";
import AboutMe from "../components/aboutme";
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
    </>
  );
};

export default Home;
