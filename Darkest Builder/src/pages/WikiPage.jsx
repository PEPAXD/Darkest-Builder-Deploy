import React from "react";

//templates Sections
import WikiSection from "./Templates/WikiSection.jsx";

//import Background
import shadowBG from "../../public/shadow.jpg";

function WikiPage() {
  return (
    <>
      <article id="wikiHeroes">
        <WikiSection url_Bg={shadowBG}/>
      </article>
    </>
  );
}

export default WikiPage;
