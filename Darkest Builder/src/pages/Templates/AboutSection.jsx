import React, { useState } from "react";
import "./styles/AboutSection.css";

//import data
import aboutData from "../../data/aboutData.js";

//Import IconsReact
import { FaAnglesDown } from "react-icons/fa6";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";

//Import Components
import RadioButtons from "../../components/radioButtons.jsx";
import LinksButtons from "../../components/LinksButtons.jsx";

//import IconsRadioButtons
import aboutGame from "../../assets/img/icons/aboutGame.jpg";
import welcomeDD from "../../assets/img/icons/darkestDungeon.jpg";
import enemiesGame from "../../assets/img/icons/enemiesGame.jpg";
import heroesGame from "../../assets/img/icons/heroesGame.jpg";
import mapGame from "../../assets/img/icons/mapGame.jpg";
import noteDev from "../../assets/img/icons/noteDev.jpg";
import darkestArt from "../../assets/img/darkestDungeon.jpg";

//import LocationsImg
import Foetor from "../../assets/img/locations/Foetor.jpg";
import Shroud from "../../assets/img/locations/Shroud.jpg";
import Sluice from "../../assets/img/locations/Sluice.jpg";
import Sprawl from "../../assets/img/locations/Sprawl.jpg";
import Tangle from "../../assets/img/locations/Tangle.jpg";

//import enemiesimg
import battalion from "../../assets/img/Enemies/battalion.jpg";
import brigands from "../../assets/img/Enemies/brigands.jpg";
import creature from "../../assets/img/Enemies/creature.jpg";
import cultist from "../../assets/img/Enemies/cultist.jpg";
import fanatic from "../../assets/img/Enemies/fanatic.jpg";
import fisherfolk from "../../assets/img/Enemies/fisherfolk.jpg";
import ghouls from "../../assets/img/Enemies/ghouls.jpg";
import plague from "../../assets/img/Enemies/plague.jpg";
import swine from "../../assets/img/Enemies/swine.jpg";

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

const heroes = [
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
  BountyHunter,
  Crusader,
  Duelist,
  Flagellant,
];

const enemies = [
  battalion,
  brigands,
  creature,
  cultist,
  fanatic,
  fisherfolk,
  ghouls,
  plague,
  swine,
];

const locations = [Foetor, Shroud, Sluice, Sprawl, Tangle];

const radioButtons_About = [
  aboutGame,
  welcomeDD,
  mapGame,
  enemiesGame,
  heroesGame,
  noteDev,
];

function AboutSection({ url_Bg }) {
  const [selectedRadio, setSelectedRadio] = useState(0);
  const handleRadioChange = (index) => {
    setSelectedRadio(index);
  };

  return (
    <div className="About">
      <div
        className="background"
        style={{ background: `url(${url_Bg}) no-repeat center top/cover` }}
      >
        <div className="AboutContainer">
          <article className="aboutContain">
            <h2>{aboutData[selectedRadio].title}</h2>
            <hr />

            {aboutData[selectedRadio].description.map((description, index) => (
              <p key={index}>{description}</p>
            ))}

            {selectedRadio === 1 && <img src={darkestArt} alt="" />}

            {selectedRadio === 2 && (
              <div className="locationsContain">
                {locations.map((location, index) => (
                  <LinksButtons
                    key={index}
                    img={location}
                    name={aboutData[2].links[index].name}
                    link={aboutData[2].links[index].link}
                  />
                ))}
              </div>
            )}

            {selectedRadio === 3 && (
              <div className="enemiesContain">
                {enemies.map((enemis, index) => (
                  <LinksButtons
                    key={index}
                    img={enemis}
                    name={aboutData[3].links[index].name}
                    link={aboutData[3].links[index].link}
                  />
                ))}
              </div>
            )}

            {selectedRadio === 4 && (
              <div className="enemiesContain">
                {heroes.map((hero, index) => (
                  <LinksButtons
                    key={index}
                    img={hero}
                    name={aboutData[4].links[index].name}
                    link={aboutData[4].links[index].link}
                  />
                ))}
              </div>
            )}

            <cite>{aboutData[selectedRadio].cite}</cite>

            {selectedRadio === 5 && (
              <div className="socialNetworks">
                <ul>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/mauro-pepa-dev"
                      target="_blank"
                    >
                      <FaLinkedin />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/mauropepa97/"
                      target="_blank"
                    >
                      <FaInstagram />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/PEPAXD?tab=stars"
                      target="_blank"
                    >
                      <FaGithub />
                    </a>
                  </li>
                </ul>
              </div>
            )}

<button
              className="Read_moreAbout"
              onClick={() => setSelectedRadio(selectedRadio === 5 ? 0 : selectedRadio + 1)}
            >
              Read more!
            </button>
          </article>

          <div className="PointSections">
            <div className="about-icon">
              <span>
                Tell Me <br /> More
              </span>
              <FaAnglesDown />
            </div>

            {radioButtons_About.map((radioButton, index) => (
              <RadioButtons
                key={index}
                val={index}
                img={radioButton}
                check={selectedRadio === index}
                changeCheck={() => handleRadioChange(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
