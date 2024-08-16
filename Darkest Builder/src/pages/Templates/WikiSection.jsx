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
    setSelectedSkill(0);
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

              {heroesData[heroArray].heroTrinkeds[3] && heroesData[heroArray].heroTrinkeds[3].stats && (
                <div className="signatureItem">
                  <h3>Signature Inn Item</h3>
              
                  <div className="signatureBox">
                    <TrinketsHero
                      heroIndex={heroArray}
                      heroTrinket={3}
                      itemDescription={heroesData[heroArray].heroTrinkeds[3].stats}
                      signatureCite={heroesData[heroArray].heroTrinkeds[3].cite}
                    />
                  </div>
                </div>
              )}
  
            </section>

            <section id="teamMates">
              <br />
              <br />
              <br />
              <h2>Heroes Teammates</h2>
              <hr />

              <p>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi aliquid possimus accusamus earum corrupti? Voluptatum reiciendis necessitatibus dignissimos laboriosam obcaecati deserunt delectus, tempora illo maxime corporis aut, ullam saepe at ab ad praesentium tenetur quos magnam quisquam. Omnis sint illum delectus doloribus magnam! Earum, architecto assumenda doloremque nihil omnis perspiciatis tenetur temporibus quaerat dolore eos incidunt facere dicta molestias dolor. Vero quisquam libero, expedita minus sunt maiores beatae tenetur incidunt omnis voluptate praesentium debitis, corporis cum? Ducimus hic consequatur maiores aliquid at, laudantium asperiores possimus fugiat qui. Quibusdam architecto suscipit tenetur aperiam nesciunt dolore corporis delectus repudiandae culpa ipsum, magni tempore labore, officia eum, maiores reprehenderit ab vel veritatis. Nobis, ea ipsam perspiciatis ducimus dignissimos unde minus quidem amet architecto officiis aliquam hic? Doloribus sit cupiditate tenetur, odio quis expedita esse animi eveniet cumque nisi repellat quo mollitia voluptate asperiores libero at nobis velit! Nisi beatae nesciunt eaque adipisci facere autem et soluta! Maxime cumque, at blanditiis recusandae animi excepturi accusantium. Architecto odio culpa voluptates. Reprehenderit doloremque fugiat modi perferendis blanditiis officiis molestias. Veniam, aut, doloribus sed rerum blanditiis quas assumenda nihil quis fugiat recusandae laudantium nostrum doloremque nemo non sequi? Earum veritatis dignissimos explicabo fugit a magni sed, odio accusamus perspiciatis alias ad cum optio, nemo illum commodi praesentium ratione neque? Blanditiis ullam fugiat quidem suscipit itaque commodi, eligendi quo dignissimos deleniti sint porro modi id, non quaerat magni consectetur atque numquam inventore pariatur. Dolores modi eligendi hic, sit ipsa omnis optio mollitia saepe iusto nostrum dolor maxime, magnam necessitatibus, minima et unde nihil earum laboriosam magni reiciendis ratione? Perferendis, unde ex ullam blanditiis suscipit illo debitis rerum nemo, alias tempore praesentium nulla et iure natus, architecto ipsa asperiores ad! Ipsum, modi aperiam unde repellat non maiores adipisci ex a consequuntur dolore error quia minima illum labore animi voluptatibus vitae beatae quod iste dolores quos velit ab earum fugiat. Sapiente, incidunt libero! Quia magnam et, eos iusto ullam corporis ducimus! Quidem officiis aliquid eligendi fugit in quia quis quos praesentium adipisci, incidunt ipsum cupiditate sequi eos magni voluptatem voluptatum aspernatur dolore quod et sed ipsam inventore itaque! Illo accusantium enim quidem quasi quia. Beatae vero consequatur, nobis unde est corporis amet quidem accusantium ipsa exercitationem itaque quaerat distinctio provident aspernatur atque perspiciatis recusandae? Possimus aliquam est perferendis earum doloribus beatae fuga quaerat. Consequuntur voluptatum atque quibusdam voluptatem. Similique, fuga. Fugit obcaecati aspernatur ducimus praesentium laboriosam similique molestias neque veniam minus, ea tenetur provident aliquam culpa. Asperiores laborum facere aliquid voluptate at. Nostrum incidunt sunt architecto repudiandae provident ipsa vel sit ullam nemo accusamus exercitationem itaque tenetur omnis, nisi odit dolores. Labore unde porro aut molestias odit excepturi sit, quasi incidunt minima ipsa laudantium maxime itaque harum fuga perferendis minus vero quam consequatur corporis veritatis facilis dolor? Facere, et. Laudantium atque, est modi eligendi earum autem repellat sunt quia soluta illo tenetur iure itaque numquam eveniet reprehenderit qui asperiores illum dolore natus? Dolores autem neque ratione unde nisi aliquam necessitatibus eligendi fuga magnam dolore error, expedita corporis, perferendis culpa alias aperiam beatae praesentium facilis repudiandae quod. Nemo nulla quia est totam quaerat libero explicabo asperiores et. Voluptas tempore, aliquid iusto amet sequi autem natus earum, voluptatum voluptates ullam rerum aperiam hic ipsa enim quod debitis, quasi ipsum sunt quae. Sint tempore facilis itaque deleniti atque esse dolorum magnam totam similique, repellat nobis eos suscipit a inventore quibusdam, perspiciatis ducimus consequatur nisi perferendis assumenda dolore, minus nesciunt. Nesciunt exercitationem ipsum necessitatibus? Veritatis molestias, suscipit non rem pariatur debitis vero, dolores sapiente architecto, repellat animi minus in accusamus voluptas deleniti hic quisquam quas dolor veniam ullam iure numquam facere labore! Cum omnis doloremque ad quidem, ullam assumenda eum magnam neque perferendis temporibus atque! Soluta labore autem sapiente placeat earum dicta asperiores neque voluptates est esse amet pariatur, nam blanditiis tempore ad nisi iste, totam laborum accusantium excepturi molestiae aliquam? Aliquid consequuntur placeat eius ratione exercitationem accusamus repellat fugit aperiam, harum alias inventore recusandae vel fugiat enim ipsa ea eum quaerat minus! Adipisci, minima. Dolorem, natus amet voluptatum facere sed corrupti laudantium veritatis culpa voluptates consequatur officia iure, harum quasi repellendus vel aliquam? Iure deserunt at voluptas, autem est quo dignissimos sed ea nisi tenetur adipisci repudiandae nihil veniam tempore distinctio, quibusdam vero eius esse quos, veritatis atque. Laboriosam eius consectetur deserunt! Eius dolor adipisci libero reiciendis maiores ducimus illum esse ex! Ut ad nemo a culpa eos sint aut voluptatem placeat, temporibus provident velit non officiis repellendus, accusamus in et! Asperiores modi laudantium natus! Quidem alias maiores minus iure cumque velit, labore sint? Modi enim voluptas omnis soluta facilis corporis obcaecati accusamus? Obcaecati, fugit quibusdam! Voluptatum hic mollitia perferendis soluta perspiciatis atque nobis tenetur nulla voluptatem impedit, adipisci et, sapiente praesentium eveniet excepturi enim a nemo, dolorum eius tempora ex inventore. Error hic, et eaque officiis veritatis beatae labore, sequi ex sed, aspernatur ullam nam reprehenderit cumque nulla minus molestiae cum deserunt odio non nostrum voluptates adipisci id perferendis. Unde esse, modi porro sit consequuntur nihil sequi, aliquid vero nulla omnis illum similique quam inventore praesentium voluptas nisi atque optio aut est tempore tenetur mollitia? Voluptatibus repellendus quia quae fugit in! Dolorum ipsa praesentium quasi ipsum, ducimus iure, fugit error consequatur, blanditiis corrupti neque temporibus? Veritatis vel, ratione nemo aspernatur quo illum itaque doloremque culpa obcaecati sequi aperiam quae cumque suscipit doloribus dolor quia quibusdam. Temporibus rerum alias delectus impedit perferendis voluptatem omnis in reprehenderit totam vero aliquid magni, error tempora optio nemo est beatae amet eaque fugit corporis dolores tempore possimus. Illum esse quos impedit praesentium dolorem dicta ratione quaerat quibusdam. Nihil fugit facere eveniet distinctio architecto necessitatibus, officiis veritatis pariatur. Ipsum expedita cumque officia magni nostrum cupiditate sit dolorem eos est aut, modi enim inventore quisquam reprehenderit excepturi. Expedita quis aspernatur voluptatibus mollitia quasi accusamus numquam ab rerum illo voluptate nobis dolorum quae sit eligendi repellendus blanditiis tenetur, fugiat reprehenderit. Accusantium, saepe natus! Excepturi temporibus reiciendis repellat sit id totam debitis commodi, fuga alias ipsa architecto possimus ab reprehenderit sapiente consectetur quae perferendis incidunt? Mollitia obcaecati eligendi velit quis ad.
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
