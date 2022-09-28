import type { NextPage } from "next";
import AboutMe from "../components/aboutme";
import Hero from "../components/hero";
import NavBar from "../components/navbar";
import Techs from "../components/techs";

const Home: NextPage = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <AboutMe />
      <Techs />
    </>
  );
};

export default Home;
