import React from "react";

//Import Components
import MainHeader from "../components/MainHeader.jsx";

//Templates Sections
import HomeSection from "./Templates/HomeSection.jsx";
import AboutSection from "./Templates/AboutSection.jsx";


const linksSections = [
  { href: "#", text: "Home" },
  { href: "#", text: "About" },
  { href: "#", text: "Heroes" },
  { href: "#", text: "WIP" },
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
    
    </>
  );
}

export default MainPage;
