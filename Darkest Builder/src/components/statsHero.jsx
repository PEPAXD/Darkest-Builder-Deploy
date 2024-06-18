import React from "react";
import "./styles/statsHero.css";

function statsHero({ tittle, stats }) {
  return (
    <>
      <i>{tittle}</i>
      <ul>
        {stats.length === 1 ? (
          <p key={0}>{stats[0]}</p>
        ) : (
          stats.map((stat, index) => <li key={index}>{stat}</li>)
        )}
      </ul>
    </>
  );
}

export default statsHero;
