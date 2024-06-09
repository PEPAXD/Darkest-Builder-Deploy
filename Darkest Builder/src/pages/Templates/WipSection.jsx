import React, { useState, useEffect } from "react";
import "./styles/WipSection.css";

//import RepoGithUB ICon
import { FaGithub } from "react-icons/fa";

function WipSection({ url_Bg }) {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 480);
  const backgroundIMG = [url_Bg, "wip_responsive.jpg"];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 480);
    };

    window.addEventListener("resize", handleResize);

    // Limpiar el evento al desmontar el componente
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="Wip">
      <div
        className="background"
        style={{
          background: `url(${
            isMobile ? backgroundIMG[1] : backgroundIMG[0]
          }) no-repeat center top/cover`,
        }}
      >
        <div className="wipContainer">
          <div className="wipContain">
            <div className="tittleWip">
              <h1>Work in Progress</h1>
              <hr />
            </div>
            <div className="noteDev">
              <p>
                Due to the magnitude of the project and the limitations of time
                and resources, I have decided to conclude the project.
              </p>
              <p>
                I reached the main goal, and I am satisfied with the current
                state of the project. However, I had some interesting ideas for
                future updates focused on the different regions of the game,
                enemies, builds, tier lists... and a section dedicated to the
                fandom.
              </p>
              <p>
                If any of you are interested in collaborating and helping to
                implement these ideas or other improvements, you can do so
                through the repository.
              </p>
            </div>

            <a
              href="https://github.com/PEPAXD/Darkest-Builder-Deploy"
              target="_blank"
            >
              <div className="repodarkestBuilder">
                <FaGithub />
                <span>LinkGithub</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WipSection;
