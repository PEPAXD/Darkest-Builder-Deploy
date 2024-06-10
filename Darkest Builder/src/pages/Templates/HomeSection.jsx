import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./styles/HomeSection.css";

//Import Components
import ProfileFrame from "../../components/framehero.jsx";
import LinkRef from "../../components/LinkRef.jsx";

//import Icons
import { SiFandom } from "react-icons/si";
import { IoLogoGameControllerB } from "react-icons/io";
import { FaBookReader } from "react-icons/fa";

//import Images
import Highwayman from "../../assets/HeroProfile/Highwayman.png";
import graveRobber from "../../assets/HeroProfile/graveRobber.png";
import Hellion from "../../assets/HeroProfile/Hellion.png";
import Jester from "../../assets/HeroProfile/Jester.png";
import Leper from "../../assets/HeroProfile/Leper.png";
import manAtArms from "../../assets/HeroProfile/manAtArms.png";
import Occultist from "../../assets/HeroProfile/Occultist.png";
import PlagueDoctor from "../../assets/HeroProfile/plagueDoctor.png";
import Vestal from "../../assets/HeroProfile/Vestal.png";
import Runaway from "../../assets/HeroProfile/Runaway.png";
import Duelist from "../../assets/HeroProfile/Duelist.png";
import Flagellant from "../../assets/HeroProfile/Flagellant.png";
import BountyHunter from "../../assets/HeroProfile/BountyHunter.png";
import Crusader from "../../assets/HeroProfile/Crusader.png";

const profileHeros = [
  Highwayman,
  graveRobber,
  Hellion,
  Jester,
  Leper,
  manAtArms,
  Occultist,
  PlagueDoctor,
  Vestal,
  Runaway,
  Duelist,
  Flagellant,
  BountyHunter,
  Crusader,
];

function HomeSection({ url_Bg }) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const logoText = ["darkestBuilder_full.png", "darkestBuilder_responsive.png"];

  const handleWindowResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  // ImgCurrentProfile
  const [currentHeroIndex, setCurrentHeroIndex] = useState(0);
  let imgClick = () => {
    setCurrentHeroIndex((prevIndex) => {
      return prevIndex + 1 === profileHeros.length ? 0 : prevIndex + 1;
    });
  };

  // ProfileFrame UserName
  const [currentHeroName, setCurrentHeroName] = useState("Darkest Adventur");
  let textClick = () => {
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
          <img
            src={windowWidth >= 480 ? logoText[0] : logoText[1]}
            alt="DarkestbuilderLogo"
          />
          <Link to="/wiki/">
            <h1>Hero Builder</h1>
          </Link>
        </div>

        <div className="profileUser">
          <ProfileFrame
            img={profileHeros[currentHeroIndex]}
            nexImg={imgClick}
            heroName={currentHeroName}
            changeText={textClick}
          />
        </div>

        <div className="referenceWebs">
          <ul>
            <LinkRef
              Icon={<SiFandom />}
              href="https://darkestdungeon.fandom.com/wiki/Darkest_Dungeon_II_Wiki"
              bannerName="WikiGame"
            />
            <LinkRef
              Icon={<FaBookReader />}
              href="https://steamcommunity.com/sharedfiles/filedetails/?id=2973257745"
              bannerName="SteamGuide"
            />
            <LinkRef
              Icon={<IoLogoGameControllerB />}
              href="https://www.darkestdungeon.com/darkest-dungeon-2/"
              bannerName="GameWeb"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default HomeSection;
