import React from "react";
import "./SearchBox.css";

function SearchBox({ handleChange }) {
  return (
    <input
      className="search"
      type="search"
      placeholder="search"
      onChange={handleChange}
    />
  );
}

export default SearchBox;
