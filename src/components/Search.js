import React from "react";

const Search = ({ onSearch }) => {

  function handleChange(e) {
    onSearch(e.target.value)
  }

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Restaurant</label>
      <input type="text" id="search" placeholder="Type restaurant name..." onChange={handleChange}/>
    </div>
  )
}

export default Search