import React from "react";
import "./styles/LinksButtons.css";

function LinksButtons({img, name, link}) {
  return (
    <a href={link}>
      <img src={img} alt="" />
      <i>{name}</i>
    </a>
  );
}

export default LinksButtons;
