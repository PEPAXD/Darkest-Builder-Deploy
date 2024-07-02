import React from "react";

//templates Sections
import WikiSection from "./Templates/WikiSection.jsx";

//import Background
import shadowBG from "../../public/shadow.jpg";

function WikiPage() {
  document.title = "Wiki - Darkest Builder";

  return (
    <>
      <article id="wikiHeroes">
        <WikiSection url_Bg={shadowBG}/>
      </article>
    </>
  );
}

export default WikiPage;
