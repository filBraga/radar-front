import React from "react";
import { useState, useEffect, useRef } from "react";

const SearchBar = (props) => {
  const [search, setSearch] = useState("");

  const handleChange = (event) => {
    props.searchStringState[1](event.target.value);
  };

  return (
    <div className="header">
      <input
        onChange={handleChange}
        className="search-button"
        placeholder="Buscar por um Produto"
      />
    </div>
  );
};

export default SearchBar;
