import React from "react";
import "./styles/LinkRef.css";

function LinkRef({Icon, href, bannerName}) {
  return (
    <a href={href} target="_blank" rel="linkWeb">
      <li className="icon" id={bannerName}>
        <span>{Icon}</span>
      </li>
      <span className="comunityName">{bannerName}</span>
    </a>
  );
}

export default LinkRef;
