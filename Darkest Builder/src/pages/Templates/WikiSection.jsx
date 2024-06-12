import React from "react";
import "./styles/WikiSection.css";

//import React-Icons
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

//import Components
import MainHeader from "../../components/MainHeader.jsx";

//import npmPackages
import { ReactSearchAutocomplete } from "react-search-autocomplete";

const linksSections = [
  { href: "#", text: "ClassHero" },
  { href: "#", text: "Play-Style" },
  { href: "#", text: "Skills/Paths" },
  { href: "#", text: "Trinkets" },
  { href: "#", text: "teamMates" },
  { href: "#", text: "Game-Builds" },
];

function WikiSection({ url_Bg }) {
  return (
    <div className="wiki">
      <MainHeader links={linksSections} goHome={true} />

      <div
        className="background"
        style={{ background: `url(${url_Bg}) no-repeat center top/cover` }}
      >
        <div className="wikiContainer">
          <div className="heroWikiContain">

            <div className="searchBar">
              <button>
                <IoIosArrowBack />
              </button>

              <ReactSearchAutocomplete
                autoFocus
                className="heroSearchBar"
                placeholder="Highwayman"
                styling={{
                  backgroundColor: "rgba(0, 0, 0, 0.8)",
                  color: "white",
                  border: "1px solid white",
                  borderRadius: "0px",
                  hoverBackgroundColor: "#981a0c",
                  iconColor: "white",
                }}
              />

              <button>
                <IoIosArrowForward />
              </button>
            </div>

            <div className="infoHeroContent">
              <h1>HERO CONTAIN</h1>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi
                voluptatum eius consectetur beatae quas ullam, deserunt
                dignissimos suscipit ea laborum, officia velit ab, reiciendis
                nisi cumque doloribus incidunt. Minus, sed.
              </p>
            </div>


          </div>
          <div className="wikiContain">
            <h1>Wiki-Contain</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias
              provident neque ipsa vel vero voluptas libero eaque repellat
              corrupti ut incidunt laborum sequi non molestiae minus, officia
              reprehenderit sapiente ullam!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WikiSection;
