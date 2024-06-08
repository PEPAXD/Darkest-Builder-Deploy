import React from "react";

//Import Components
import MainHeader from "../components/MainHeader.jsx";

//Templates Sections
import HomeSection from "./Templates/HomeSection.jsx";
import AboutSection from "./Templates/AboutSection.jsx";
import HeroSection from "./Templates/HeroSection.jsx";

const linksSections = [
  { href: "Home", text: "Home" },
  { href: "About", text: "About" },
  { href: "Heroes", text: "Heroes" },
  { href: "WIP", text: "WIP" },
];

function MainPage() {
  return (
    <>
      <MainHeader links={linksSections} />

      <section id="Home">
        <HomeSection url_Bg="home.png" />
      </section>

      <section id="About">
        <AboutSection url_Bg="about.jpg" />
      </section>

      <section id="Heroes">
        <HeroSection url_Bg="hero.jpg" />
      </section>
    </>
  );
}

export default MainPage;
