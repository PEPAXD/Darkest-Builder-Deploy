import React, { useState } from "react";
import "./styles/HomeSection.css";

//Import DataFile
import heroes from "../../data/heroesData.js";

//Import Components
import ProfileFrame from "../../components/framehero.jsx";

function HomeSection({ url_Bg }) {
  // ImgCurrentProfile
  const [currentHeroIndex, setCurrentHeroIndex] = useState(0);
  const imgClick = () => {
    setCurrentHeroIndex((prevIndex) => {
      return prevIndex + 1 === heroes.length ? 0 : prevIndex + 1;
    });
  };

  // ProfileFrame UserName
  const [currentHeroName, setCurrentHeroName] = useState("Darkest Adventur");
  const textClick = () => {
    let userInput = prompt("New Adventure Name:");
    while (
      userInput !== null &&
      (userInput.trim() === "" || userInput.length > 12)
    ) {
      alert(
        "Invalid input. Please enter a non-empty name that is less than 12 characters long. Try Again!"
      );
      userInput = prompt("New Adventure Name:");
    }
    if (userInput !== null) {
      setCurrentHeroName(userInput);
    }
  };

  return (
    <div className="Home">
      <div
        className="background"
        style={{ background: `url(${url_Bg}) no-repeat center top/cover` }}
      >
        <div className="homeContain">
          <img src="darkestBuilder_full.png" alt="" />
          <h1>Hero Builder</h1>
        </div>

        <div className="profileUser">
          <ProfileFrame
            img={`public/HeroProfile/${heroes[currentHeroIndex]}.png`}
            nexImg={imgClick}
            heroName={currentHeroName}
            changeText={textClick}
          />
        </div>
      </div>
    </div>
  );
}

export default HomeSection;
