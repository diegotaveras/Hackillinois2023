import React, { useEffect, useState } from "react";
import axios from "axios";
import "./searchbar.css"

function SearchBar() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [data, setData] = useState([]);
 
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/`)
      .then(response => response.json())
      .then(data => setResults(data));
  }, []);
  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };
  
  
  const handleSearch = async () => {
    const response = await axios.get(
      `https://fakestoreapi.com/products/`
      
    );
    
    const dictionary = response.data.reduce((acc, item) => {
      acc[item.title] = item.id;
        return acc;
      }, {})
    

    try {
      
        
        
        const response = await axios.get(
          `https://fakestoreapi.com/products/${query === "" ? "" : dictionary[query]}`
        );
        
        
      setResults(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    
    <div>
    <div className="searchbar-container">
      <input type="text" value={query} onChange={handleInputChange} />
      <button onClick={handleSearch}>Search</button>
    </div>
    <div className="results-container">
      <ul style={{ listStyleType: "none", padding: 0 }}>
      {
        
     
          Array.isArray(results) ? (
            results.map((result) => (
          
              <li key={result.id}> {result.title}  
              <div className="image">
                <img src = {result.image}/>
              </div>
              </li>
            ))
          ): 
          (
            <li key={results.title}> {results.title}  
              <div className="image">
                <img src = {results.image}/>
              </div>
              </li>
          )
        
        }
      
      </ul>
    </div>
    </div>
  );
}

export default SearchBar;