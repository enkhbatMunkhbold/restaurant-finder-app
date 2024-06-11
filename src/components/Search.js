import React from "react";
import "../style/search.css"

const Search = () => {
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Restaurant</label>
      <input type="text" id="search" placeholder="Type restaurant name..." />
    </div>
  )
}

export default Search