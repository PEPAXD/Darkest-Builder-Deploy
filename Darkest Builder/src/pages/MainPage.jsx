import React from "react";

//Templates Sections
import HomeSection from "./Templates/HomeSection.jsx";

function MainPage() {
  return (
    <>
      <section id="home">
        <HomeSection url_Bg="home.png"/>
      </section>

      <section id="home">
        <HomeSection url_Bg="home.png"/>
      </section>

      <section id="home">
        <HomeSection url_Bg="home.png"/>
      </section>

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
