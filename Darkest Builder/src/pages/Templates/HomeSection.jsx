import React, { useState } from "react";
import "./styles/HomeSection.css";

//Import DataFile
import heroes from '../../data/heroesData.js';

//Import Components
import ProfileFrame from "../../components/framehero.jsx";

function HomeSection({ url_Bg }) {

    // ImgCurrentProfile
    const [currentHeroIndex, setCurrentHeroIndex] = useState(0);
    const handleClick = () => {
      setCurrentHeroIndex((prevIndex) => {
        return prevIndex + 1 === heroes.length ? 0 : prevIndex + 1;
      });
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
          <ProfileFrame img={`public/HeroProfile/${heroes[currentHeroIndex]}.png`} onClick={handleClick} heroName={"Darkest Adventure"} />
        </div>

      </div>
    </div>
  );
}

export default HomeSection;
