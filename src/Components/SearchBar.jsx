import React, { useState } from "react";
import "./SearchBar.css";

const SearchBar = ({ setResults }) => {
  const [input, setInput] = useState("");
  const fetchData = (value) => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        const results = data.filter((user) => {
          return user && user.name && user.name.toLowerCase().startsWith(value);
        });
        setResults(results);
      });
  };

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };

  return (
    <div className="input-wrapper">
      <i className="bx bx-search"></i>
      <input
        type="text"
        placeholder="Type to search..."
        value={input}
        onChange={(event) => handleChange(event.target.value)}
      />
    </div>
  );
};

export default SearchBar;
