import React, { useState, useEffect, useRef, useCallback } from "react";
import "./styles/WikiSection.css";

//import database
import heroesData from "../../data/heroesData.js";

//import React-Icons
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

//import Components
import MainHeader from "../../components/MainHeader.jsx";
import HeroBody from "../../components/herobody.jsx";
import StatsHero from "../../components/statsHero.jsx";
import BoxStats from "../../components/boxStats.jsx";
import TokenFrame from "../../components/tokensFrame.jsx";

//import npmPackages
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import { useLocation } from "react-router-dom";

const linksSections = [
  { href: "Hero", text: "Hero" },
  { href: "HowToPlay", text: "Play-Style" },
  { href: "Skills", text: "Skills/Paths" },
  { href: "#", text: "Trinkets" },
  { href: "#", text: "teamMates" },
  { href: "#", text: "Game-Builds" },
];

function WikiSection({ url_Bg }) {
  
  const wikiContainRef = useRef(null);
  const [activeSection, setActiveSection] = useState("Hero");
  const sectionElementsRef = useRef({});

  useEffect(() => {
    linksSections.forEach((section) => {
      sectionElementsRef.current[section.href] = document.getElementById(
        section.href
      );
    });
  }, []);

  const handleScroll = useCallback(() => {
    let closestSection = "";
    let minDiff = Number.MAX_VALUE;
    Object.keys(sectionElementsRef.current).forEach((href) => {
      const element = sectionElementsRef.current[href];
      if (element) {
        const rect = element.getBoundingClientRect();
        const topDiff = Math.abs(rect.top);
        if (topDiff < minDiff) {
          minDiff = topDiff;
          closestSection = href;
        }
      }
    });
    setActiveSection(closestSection);
  }, []);

  useEffect(() => {
    const wikiContain = wikiContainRef.current;
    if (wikiContain) {
      wikiContain.addEventListener("scroll", handleScroll);
      return () => wikiContain.removeEventListener("scroll", handleScroll);
    }
  }, [handleScroll]);

  //react-router-dom HeroIndex
  const location = useLocation();
  const { heroIndex } = location.state || {};

  //heroPaths
  let [heroPaths, setHeroPaths] = useState(0);

  // heroIndex
  let [heroArray, setHeroArray] = useState(heroIndex);
  const updateHeroArray = (value) => {
    setHeroArray((prevHeroArray) => {
      let newValue = prevHeroArray + value;

      if (newValue < 0) {
        return 13;
      } else if (newValue > 13) {
        return 0;
      } else {
        return newValue;
      }
    });
    setHeroPaths(0);
  };

  return (
    <div className="wiki">
      <MainHeader
        links={linksSections}
        goHome={true}
        activeSection={activeSection}
      />

      <div
        className="background"
        style={{ background: `url(${url_Bg}) no-repeat center top/cover` }}
      >
        <div className="wikiContainer">
          <div className="heroWikiContain">
            <div className="searchBar">
              <button onClick={() => updateHeroArray(-1)}>
                <IoIosArrowBack />
              </button>

              <ReactSearchAutocomplete
                autoFocus
                items={heroesData.names}
                className="heroSearchBar"
                placeholder={heroesData.names[heroArray].name}
                onSelect={(item) => {
                  setHeroArray(item.id - 1);
                  setHeroPaths(0);
                }}
                styling={{
                  color: "white",
                  iconColor: "white",
                  hoverBackgroundColor: "#981a0c",
                }}
              />

              <button onClick={() => updateHeroArray(+1)}>
                <IoIosArrowForward />
              </button>
            </div>

            <div className="imgCont">
              <HeroBody heroIndex={heroArray} />
            </div>

            <div className="heroPath">
              <cite>{heroesData[heroArray].cite[heroPaths]}</cite>

              <form>
                {heroesData[heroArray].paths.map((path, index) => (
                  <React.Fragment key={index}>
                    <input
                      type="radio"
                      name="value-radio"
                      id={`value-${index}`}
                      value={index}
                      checked={heroPaths === index}
                      onChange={(e) => setHeroPaths(index)}
                    />
                    <label htmlFor={`value-${index}`}>{path}</label>
                  </React.Fragment>
                ))}
              </form>
            </div>
          </div>

          <div className="wikiContain" ref={wikiContainRef}>
            <section id="Hero" className="ClassHero">
              <br />
              <br />
              <br />

              <h1>{heroesData[heroArray].name}</h1>
              <hr />
              <p>{heroesData[heroArray].description}</p>

              <div className="Characteristics">
                <h3>Characteristics</h3>

                <div className="listStats">
                  <StatsHero
                    tittle={'"Rol"'}
                    stats={heroesData[heroArray].characteristics.Rol}
                  />
                  <StatsHero
                    tittle={'"Strengths"'}
                    stats={heroesData[heroArray].characteristics.Strengths}
                  />
                  <StatsHero
                    tittle={'"Weaknesses"'}
                    stats={heroesData[heroArray].characteristics.Weaknesses}
                  />
                </div>

                <div className="statsContainer">
                  <BoxStats
                    dataStats={heroesData[heroArray].characteristics.stats}
                  />
                </div>
              </div>

              {heroesData[heroArray].characteristics.uniqueAttributes && (
                <div className="uniqueAttributeContain">
                  <h3>
                    {"Permanent Condition - " +
                      heroesData[heroArray].characteristics.uniqueAttributes
                        .tittle}
                  </h3>
                  <p>
                    {
                      heroesData[heroArray].characteristics.uniqueAttributes
                        .description
                    }
                  </p>
                </div>
              )}

              {heroesData[heroArray].characteristics.uniqueTokens?.map(
                (token, index) => (
                  <div key={index} className="specialTokens">
                    <TokenFrame dataToken={token} />
                  </div>
                )
              )}
            </section>

            <section id="HowToPlay">
              <br />
              <br />
              <br />
              <h2>How to Play</h2>
              <hr />
              <div className="howToPlay">
                <ul>
                  {heroesData[heroArray].howToPlay.map((item, index) => (
                    <li key={index}>
                      {item.tittle}
                      <p>{item.description}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            <section id="Skills">
              <br />
              <br />
              <br />
              <h2>Skills</h2>
              <hr />

              <p>
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatibus, at quo? Rem consequatur perferendis officia qui
                ex. In doloremque fugiat totam. Qui dolores eveniet facere nulla
                officia! Sit impedit, exercitationem quisquam mollitia pariatur
                deleniti, quaerat beatae ex consequuntur eveniet illo voluptatum
                excepturi totam? Odio et ipsa eaque voluptate. Ipsam qui labore
                dignissimos accusamus reiciendis a voluptatem quibusdam,
                quisquam blanditiis necessitatibus! Minus repellendus sed
                exercitationem cum aspernatur nihil quibusdam sit asperiores
                adipisci. Nulla, consequuntur expedita deleniti praesentium
                architecto sit vitae sunt explicabo possimus fugiat culpa
                mollitia, dolorum incidunt illum unde ex doloremque
                necessitatibus quo, delectus quas! Labore, quia ducimus!
                Voluptate, ratione.
              </p>
            </section>

            <section id="#">
              <br />
              <br />
              <br />
              <h2>Skills</h2>
              <hr />

              <p>
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatibus, at quo? Rem consequatur perferendis officia qui
                ex. In doloremque fugiat totam. Qui dolores eveniet facere nulla
                officia! Sit impedit, exercitationem quisquam mollitia pariatur
                deleniti, quaerat beatae ex consequuntur eveniet illo voluptatum
                excepturi totam? Odio et ipsa eaque voluptate. Ipsam qui labore
                dignissimos accusamus reiciendis a voluptatem quibusdam,
                quisquam blanditiis necessitatibus! Minus repellendus sed
                exercitationem cum aspernatur nihil quibusdam sit asperiores
                adipisci. Nulla, consequuntur expedita deleniti praesentium
                architecto sit vitae sunt explicabo possimus fugiat culpa
                mollitia, dolorum incidunt illum unde ex doloremque
                necessitatibus quo, delectus quas! Labore, quia ducimus!
                Voluptate, ratione.
              </p>
            </section>

            <section id="#">
              <br />
              <br />
              <br />
              <h2>Skills</h2>
              <hr />

              <p>
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatibus, at quo? Rem consequatur perferendis officia qui
                ex. In doloremque fugiat totam. Qui dolores eveniet facere nulla
                officia! Sit impedit, exercitationem quisquam mollitia pariatur
                deleniti, quaerat beatae ex consequuntur eveniet illo voluptatum
                excepturi totam? Odio et ipsa eaque voluptate. Ipsam qui labore
                dignissimos accusamus reiciendis a voluptatem quibusdam,
                quisquam blanditiis necessitatibus! Minus repellendus sed
                exercitationem cum aspernatur nihil quibusdam sit asperiores
                adipisci. Nulla, consequuntur expedita deleniti praesentium
                architecto sit vitae sunt explicabo possimus fugiat culpa
                mollitia, dolorum incidunt illum unde ex doloremque
                necessitatibus quo, delectus quas! Labore, quia ducimus!
                Voluptate, ratione.
              </p>
            </section>

            <section id="#">
              <br />
              <br />
              <br />
              <h2>Skills</h2>
              <hr />

              <p>
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatibus, at quo? Rem consequatur perferendis officia qui
                ex. In doloremque fugiat totam. Qui dolores eveniet facere nulla
                officia! Sit impedit, exercitationem quisquam mollitia pariatur
                deleniti, quaerat beatae ex consequuntur eveniet illo voluptatum
                excepturi totam? Odio et ipsa eaque voluptate. Ipsam qui labore
                dignissimos accusamus reiciendis a voluptatem quibusdam,
                quisquam blanditiis necessitatibus! Minus repellendus sed
                exercitationem cum aspernatur nihil quibusdam sit asperiores
                adipisci. Nulla, consequuntur expedita deleniti praesentium
                architecto sit vitae sunt explicabo possimus fugiat culpa
                mollitia, dolorum incidunt illum unde ex doloremque
                necessitatibus quo, delectus quas! Labore, quia ducimus!
                Voluptate, ratione.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WikiSection;
