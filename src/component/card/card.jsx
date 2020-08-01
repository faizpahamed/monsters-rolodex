import React from "react";
import "./card.css";

export const Card = (props) => {
  const { monster } = props;
  return (
    <div className="card-container" style={{ width: "230px" }}>
      <img
        src={`https://robohash.org/${monster.id}?set=set2&size=180x180`}
      ></img>
      <h2> {monster.name}</h2>
      <h3>{monster.email}</h3>
    </div>
  );
};
