import type { NextPage } from "next";
import AboutMe from "../components/aboutme";
import Hero from "../components/hero";
import NavBar from "../components/navbar";

const Home: NextPage = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <AboutMe />
    </>
  );
};

export default Home;
