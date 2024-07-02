import React from "react";
import "./styles/statsHero.css";

//npm packages
import { Tooltip } from "react-tooltip";

function statsHero({ tittle, stats }) {
  return (
    <>
      <i>{tittle}</i>
      <ul>
        {stats.length === 1 ? (
          <p key={0}>{stats[0].title}</p>
        ) : (
          stats.map((stat, index) => (
            <li key={index}>
              <a
                data-tooltip-id="my-tooltip"
                data-tooltip-content={stat.tooltips}
              >
                {stat.title}
              </a>
            </li>
          ))
        )}
        <Tooltip id="my-tooltip" className="my-tooltip" />
      </ul>
    </>
  );
}

export default statsHero;