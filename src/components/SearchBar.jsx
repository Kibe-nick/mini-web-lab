import React from "react";

function SearchBar({ className, searchQuery, onSearch }) {
  const handleChange = (e) => {
    onSearch(e.target.value);
  };

  return (
    <input
      type="text"
      value={searchQuery}
      onChange={handleChange}
      className={search-bar} 
      placeholder="Search transactions..."
    />
  );
}

export default SearchBar;
