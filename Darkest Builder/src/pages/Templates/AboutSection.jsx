import React from "react";
import "./styles/AboutSection.css";

//Import Icons
import { FaAnglesDown } from "react-icons/fa6";

//Import Components
import RadioButtons from "../../components/radioButtons.jsx";

//import IconsRadioButtons
import aboutGame from "../../assets/img/icons/aboutGame.jpg";
import welcomeDD from "../../assets/img/icons/darkestDungeon.jpg";
import enemiesGame from "../../assets/img/icons/enemiesGame.jpg";
import heroesGame from "../../assets/img/icons/heroesGame.jpg";
import mapGame from "../../assets/img/icons/mapGame.jpg";
import noteDev from "../../assets/img/icons/noteDev.jpg";

const radioButtons_About = [
  aboutGame,
  welcomeDD,
  enemiesGame,
  heroesGame,
  mapGame,
  noteDev,
];

function AboutSection({ url_Bg }) {
  return (
    <div className="About">
      <div
        className="background"
        style={{ background: `url(${url_Bg}) no-repeat center top/cover` }}
      >
        <div className="AboutContainer">
          <article className="aboutContain">
            <h1>About Commit</h1>
            <h2>New Branch</h2>
          </article>

          <div className="PointSections">

            <div className="about-icon">
              <span>
                Tell Me <br /> More
              </span>
              <FaAnglesDown />
            </div>

            {radioButtons_About.map((radioButton, index) => (
              <RadioButtons key={index} img={radioButton} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
