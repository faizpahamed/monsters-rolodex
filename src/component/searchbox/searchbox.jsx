import React from "react";
import "./searchbox.css";

export const SearchBox = (props) => {
  const { handleInput, placeholder } = props;

  return (
    <React.Fragment>
      <input
        className="searchBox"
        type="search"
        placeholder={placeholder}
        onChange={handleInput}
      ></input>
    </React.Fragment>
  );
};
