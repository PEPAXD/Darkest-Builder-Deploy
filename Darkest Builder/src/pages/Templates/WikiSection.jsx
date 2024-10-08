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
import PathHero from "../../components/pathHero.jsx";
import SkillFrame from "../../components/skillFrame.jsx";
import BasicStat from "../../components/basicStat.jsx";
import TrinketsHero from "../../components/TrinketsHero.jsx";
import TeemmatesFrame from "../../components/teemmatesFrame.jsx";

//Maybe next feature NOT IMPLEMENTED
import UpgradeButton from "../../components/upgradeButton.jsx";
import AdvancedStats from "../../components/advancedStats.jsx";

//import npmPackages
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import { useLocation } from "react-router-dom";

const linksSections = [
  { href: "Hero", text: "Hero" },
  { href: "HowToPlay", text: "Play-Style" },
  { href: "Skills", text: "Skills/Paths" },
  { href: "Trinkets", text: "Trinkets" },
  { href: "teamMates", text: "teamMates" },
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
    setSelectedSkill(0);
    document.getElementById("Hero").scrollIntoView({ behavior: "smooth" });
  };

  //SelectorSkills
  const [selectedSkill, setSelectedSkill] = useState(0);

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
                  setSelectedSkill(0);

                  document
                    .getElementById("Hero")
                    .scrollIntoView({ behavior: "smooth" });

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
                {heroesData[heroArray].paths.name.map((path, index) => (
                  <React.Fragment key={index}>
                    <input
                      type="radio"
                      name="value-radio"
                      id={`value-${index}`}
                      value={index}
                      checked={heroPaths === index}
                      onChange={(e) => {
                        setHeroPaths(index);


                        document
                          .getElementById("Skills")
                          .scrollIntoView({ behavior: "smooth" });

                      }}
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

              <h2>Skills and Paths</h2>
              <hr />

              <div className="pathContainer">
                <PathHero
                  heroIndex={heroArray}
                  pathIndex={heroPaths}
                  pathData={heroesData[heroArray].paths.description[heroPaths]}
                />

                <div className="skillsDescription">
                  <h4>Skills</h4>

                  <div className="topBarSkill">
                    <h3>{heroesData[heroArray].skills[selectedSkill].name}</h3>
                    {/*
                     NextFeature
                     <UpgradeButton /> 
                     */}
                  </div>

                  <div className="dataSkill">
                    <div className="basicStats">
                      <ul>
                        {/* //SkillFrameIMG */}
                        <li>
                          <SkillFrame
                            skillData={
                              heroesData[heroArray].skills[selectedSkill]
                            }
                            arrowCheck={0}
                            heroIndex={heroArray}
                            pointer={false}
                          />
                        </li>

                        {/* //TypeStatCheck */}
                        <li>
                          <BasicStat
                            title={"Type"}
                            iconSkill={
                              heroesData[heroArray].skills[selectedSkill].Type
                            }
                          />
                        </li>

                        {/* //RankStatCheck */}
                        {heroesData[heroArray].skills[selectedSkill]
                          .skillsPaths[heroPaths].Rank && (
                          <li>
                            <BasicStat
                              title={"Rank"}
                              paintBalls={
                                heroesData[heroArray].skills[selectedSkill]
                                  .skillsPaths[heroPaths].Rank
                              }
                            />
                          </li>
                        )}

                        {/* //TargetStatCheck */}
                        {heroesData[heroArray].skills[selectedSkill]
                          .skillsPaths[heroPaths].Target && (
                          <li>
                            <BasicStat
                              title={"Target"}
                              paintBalls={
                                heroesData[heroArray].skills[selectedSkill]
                                  .skillsPaths[heroPaths].Target
                              }
                            />
                          </li>
                        )}

                        {/* //CorpseStatCheck */}
                        {heroesData[heroArray].skills[selectedSkill]
                          .skillsPaths[heroPaths].Corpse && (
                          <li>
                            <BasicStat
                              title={"Corpse"}
                              paintBalls={
                                heroesData[heroArray].skills[selectedSkill]
                                  .skillsPaths[heroPaths].Corpse
                              }
                            />
                          </li>
                        )}

                        {/* //AllyStatCheck */}
                        {heroesData[heroArray].skills[selectedSkill]
                          .skillsPaths[heroPaths].Ally && (
                          <li>
                            <BasicStat
                              title={"Ally"}
                              paintBalls={
                                heroesData[heroArray].skills[selectedSkill]
                                  .skillsPaths[heroPaths].Ally
                              }
                            />
                          </li>
                        )}

                        {/* //CooldownStatCheck */}
                        {heroesData[heroArray].skills[selectedSkill]
                          .skillsPaths[heroPaths].Cooldown && (
                          <li>
                            <BasicStat
                              title={"Cooldown"}
                              iconSkill={
                                heroesData[heroArray].skills[selectedSkill]
                                  .skillsPaths[heroPaths].Cooldown
                              }
                            />
                          </li>
                        )}

                        {/* //UsesStatCheck */}
                        {heroesData[heroArray].skills[selectedSkill]
                          .skillsPaths[heroPaths].Uses && (
                          <li>
                            <BasicStat
                              title={"Uses"}
                              iconSkill={
                                heroesData[heroArray].skills[selectedSkill]
                                  .skillsPaths[heroPaths].Uses
                              }
                            />
                          </li>
                        )}
                      </ul>
                    </div>
                  </div>

                  <p>
                    {heroesData[heroArray].skills[selectedSkill].description
                      .charAt(0)
                      .toUpperCase() +
                      heroesData[heroArray].skills[
                        selectedSkill
                      ].description.slice(1)}
                  </p>

                  <div className="statsHigh"></div>
                </div>
              </div>

              <cite>{heroesData[heroArray].paths.cites[heroPaths]}</cite>

              <div className="skillsHeroArray">
                {heroesData[heroArray].skills.map((skill, index) => (
                  <div className="skillBox" key={index}>
                    <label
                      key={index}
                      className={`label ${
                        selectedSkill === index ? "selected" : ""
                      }`}
                      style={{
                        opacity:
                          heroPaths === 0 ||
                          heroesData[heroArray].paths.skillsArray[
                            heroPaths
                          ].includes(index)
                            ? 1
                            : 0.4,
                      }}
                    >
                      <input
                        type="radio"
                        name="skill"
                        value={index}
                        checked={selectedSkill === index}
                        onChange={() => setSelectedSkill(index)}
                        style={{ display: "none" }}
                      />
                      <SkillFrame
                        skillData={skill}
                        arrowCheck={heroesData[heroArray].paths.skillsArray[
                          heroPaths
                        ].includes(index)}
                        heroIndex={heroArray}
                      />
                    </label>
                    <i
                      className={
                        selectedSkill === index ? "selectedSkillName" : ""
                      }
                      style={{
                        opacity:
                          heroPaths === 0 ||
                          heroesData[heroArray].paths.skillsArray[
                            heroPaths
                          ].includes(index)
                            ? 1
                            : 0.2,
                      }}
                    >
                      {skill.name}
                    </i>
                  </div>
                ))}
              </div>
            </section>

            <section id="Trinkets">
              <br />
              <br />
              <br />
              <h2>Unique Trinkets</h2>
              <hr />

              <div className="trinkedsContainer">
                <div className="columTitleTrinkeds">
                  <div className="angry-grid">
                    <div id="item-0">Image</div>
                    <div id="item-1">Description</div>
                    <div id="item-2">Trinket</div>
                  </div>
                </div>

                {Array.from({ length: 3 }, (_, trinketIndex) => (
                  <TrinketsHero
                    key={trinketIndex}
                    heroIndex={heroArray}
                    heroTrinket={trinketIndex}
                    itemDescription={
                      heroesData[heroArray].heroTrinkeds[trinketIndex].stats
                    }
                  />
                ))}
              </div>

              {heroesData[heroArray].heroTrinkeds[3] &&
                heroesData[heroArray].heroTrinkeds[3].stats && (
                  <div className="signatureItem">
                    <h3>Signature Inn Item</h3>

                    <div className="signatureBox">
                      <TrinketsHero
                        heroIndex={heroArray}
                        heroTrinket={3}
                        itemDescription={
                          heroesData[heroArray].heroTrinkeds[3].stats
                        }
                        signatureCite={
                          heroesData[heroArray].heroTrinkeds[3].cite
                        }
                      />
                    </div>
                  </div>
                )}
            </section>

            <section id="teamMates" className="teamCombo">
              <br />
              <br />
              <br />

              {heroesData[heroArray].teemmates.description ? (
                <h2>Comps  Teammates</h2>
              ) : (
                <h2>Why You Need BH on Your Team?</h2>
              )}

              <hr />

              {heroesData[heroArray].teemmates.description && (
                <h3>"{heroesData[heroArray].teemmates.cite}"</h3>
              )}

              <div className="teamMatesBox">
                {heroesData[heroArray].teemmates.comp.map((comp, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setHeroArray(comp.id);
                      setHeroPaths(comp.path[0]);

                      document.getElementById("Hero").scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    <TeemmatesFrame heroIndex={comp} path={comp.path} />
                  </button>
                ))}
              </div>

              {heroesData[heroArray].teemmates.description && (
                <p className="teamDescription">
                  {heroesData[heroArray].teemmates.description}
                </p>
              )}

              {heroesData[heroArray].teemmates.BG_recruit && (
                <div className="BG_listRecruit">
                  <ol>
                    {heroesData[heroArray].teemmates.BG_recruit.map((item, index) => (
                      <li key={index}>
                        {item.title}
                        <p>{item.description}</p>
                      </li>
                    ))}
                  </ol>
                </div>
              )}
            </section>

            <div className="copyRight">
              <cite>
                Developed by:{" "}
                <a
                  href="https://www.linkedin.com/in/mauro-pepa-dev/"
                  target="_blanck"
                >
                  Mauro Exequiel Pepa
                </a>
              </cite>
              <cite>
                InfoRef:
                <a
                  href="https://darkestdungeon.wiki.gg/wiki/Darkest_Dungeon_II_Wiki"
                  target="_blanck"
                >
                  WikiGG
                </a>
                <a href="https://www.youtube.com/@ShuffleFM" target="_blanck">
                  ShuffleFM
                </a>
                <a
                  href="https://steamcommunity.com/sharedfiles/filedetails/?id=2973257745"
                  target="_blanck"
                >
                  SpiderKhan
                </a>
              </cite>
            </div>

            <br />
            <br />
            <br />
          </div>
        </div>
      </div>
    </div>
  );
}

export default WikiSection;
