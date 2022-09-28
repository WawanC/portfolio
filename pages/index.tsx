import type { NextPage } from "next";
import Hero from "../components/hero";
import NavBar from "../components/navbar";

const Home: NextPage = () => {
  return (
    <>
      <NavBar />
      <Hero />
    </>
  );
};

export default Home;
