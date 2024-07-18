import React from "react";
import "./styles/advancedStats.css";

function advancedStats({ title, data }) {
  return (
    <div className="advancedStats">
      <b>{title}</b>
      <span>{data}</span>
    </div>
  );
}

export default advancedStats;
