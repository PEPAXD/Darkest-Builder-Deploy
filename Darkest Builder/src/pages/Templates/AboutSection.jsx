import React, { useState } from "react";
import "./styles/AboutSection.css";

//import data
import aboutData from "../../data/aboutData.js";

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

            <cite>{aboutData[selectedRadio].cite}</cite>

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
