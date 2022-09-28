import type { NextPage } from "next";
import { useRef } from "react";
import AboutMe from "../components/aboutme";
import ContactMe from "../components/contactme";
import Footer from "../components/footer";
import Hero from "../components/hero";
import NavBar from "../components/navbar";
import Projects from "../components/projects";
import Techs from "../components/techs";

const Home: NextPage = () => {
  const sectionsRef = {
    aboutMeRef: useRef<HTMLElement>(null),
    techsRef: useRef<HTMLElement>(null),
    projectsRef: useRef<HTMLElement>(null),
    contactMeRef: useRef<HTMLElement>(null),
  };

  return (
    <>
      <NavBar sectionsRef={sectionsRef} />
      <Hero />
      <AboutMe ref={sectionsRef.aboutMeRef} />
      <Techs ref={sectionsRef.techsRef} />
      <Projects ref={sectionsRef.projectsRef} />
      <ContactMe ref={sectionsRef.contactMeRef} />
      <Footer />
    </>
  );
};

export default Home;
