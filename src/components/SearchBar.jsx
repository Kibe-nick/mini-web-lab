import React from "react";

function SearchBar({ searchQuery, onSearch }) {
  return (
    <div className="search-bar">
    <input
      type="text"
      value={searchQuery}
      onChange={(e) => onSearch(e.target.value)}
      placeholder="Search transactions"
    />
    </div>
  );
};

export default SearchBar;
