import React,{Suspense, useState} from "react";

function Search() {
  const[searchPlant, setSearchPlant] = useState('')
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        value={searchPlant}
        onChange={e => setSearchPlant(e.target.value)}
      />
    </div>
  );
}

export default Search;
