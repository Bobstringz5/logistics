import Hero from "../components/Hero";
import Services from "../pages/Services";
import About from "../pages/About";
import Stats from "../pages/Stat";
import AOS from "aos";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <Hero />
      <Services />
      <About />
      <Stats />
    </>
  );
};

export default Home;
