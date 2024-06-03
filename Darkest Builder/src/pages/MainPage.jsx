import React from "react";

//Import Components
import MainHeader from "../components/MainHeader.jsx";

//Templates Sections
import HomeSection from "./Templates/HomeSection.jsx";

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
      
      {/* 
      <section id="About">
        <HomeSection url_Bg="about.jpg" />
      </section> */}

      {/* 
        //TODO: Add the sections below when the components are ready

      <section id="About">
        <Aboutpage url_Bg="AboutWallpaper.jpg" />
      </section>

      <section id="Heroes">
        <HeroesPage url_Bg="HeroTavern.jpg" />
      </section> */}
    </>
  );
}

export default MainPage;
