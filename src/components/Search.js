import React from "react";

const Search = () => {
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Restaurant</label>
      <input type="text" id="search" placeholder="Type restaurant name..." />
    </div>
  )
}

export default Search