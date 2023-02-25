import React, { useState } from "react";
import axios from "axios";
import "./searchbar.css"

function SearchBar() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `https://fakestoreapi.com/${query}`
      );
      setResults(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="searchbar">
      <input type="text" value={query} onChange={handleInputChange} />
      <button onClick={handleSearch}>Search</button>
      <ul>
        {results.map((result) => (
          <li key={result.id}>{result.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default SearchBar;