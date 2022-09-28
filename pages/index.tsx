import type { NextPage } from "next";
import AboutMe from "../components/aboutme";
import ContactMe from "../components/contactme";
import Footer from "../components/footer";
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
      <Footer />
    </>
  );
};

export default Home;
