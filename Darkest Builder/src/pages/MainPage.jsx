import React, { useState, useEffect } from "react";

//Import Components
import MainHeader from "../components/MainHeader.jsx";

//Templates Sections
import HomeSection from "./Templates/HomeSection.jsx";
import AboutSection from "./Templates/AboutSection.jsx";
import HeroSection from "./Templates/HeroSection.jsx";
import WipSection from "./Templates/WipSection.jsx";

const linksSections = [
  { href: "Home", text: "Home" },
  { href: "About", text: "About" },
  { href: "Heroes", text: "Heroes" },
  { href: "WIP", text: "WIP" },
];

function MainPage() {
  const [activeSection, setActiveSection] = useState("Home");

  useEffect(() => {
    const handleScroll = () => {
      let closestSection = "";
      let minDiff = Number.MAX_VALUE;
      linksSections.forEach((section) => {
        const element = document.getElementById(section.href);
        const rect = element.getBoundingClientRect();
        const topDiff = Math.abs(rect.top);
        if (topDiff < minDiff) {
          minDiff = topDiff;
          closestSection = section.href;
        }
      });
      setActiveSection(closestSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <>
      <MainHeader links={linksSections} goHome={false} activeSection={activeSection} />

      <section id="Home">
        <HomeSection url_Bg="home.png" />
      </section>

      <section id="About">
        <AboutSection url_Bg="about.jpg" />
      </section>

      <section id="Heroes">
        <HeroSection url_Bg="hero.jpg" />
      </section>

      <section id="WIP">
        <WipSection url_Bg="wip.jpg" />
      </section>
    </>
  );
}

export default MainPage;
