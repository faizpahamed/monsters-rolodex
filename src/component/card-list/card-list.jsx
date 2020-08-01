import React from "react";
import "./card-list.css";
import { Card } from "../card/card";
export const CardList = (props) => {
  return (
    <div className="card-list">
      {props.info.map((monster) => {
        return <Card key={monster.id} monster={monster}></Card>;
      })}
    </div>
  );
};
