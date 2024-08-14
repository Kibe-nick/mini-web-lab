import React from "react";

function SearchBar({ searchQuery, onSearch, className }) {
  const handleChange = (e) => {
    onSearch(e.target.value);
  };

  return (
    <input
      type="text"
      value={searchQuery}
      onChange={handleChange}
      className={className}
      placeholder="Search transactions..."
    />
  );
}

export default SearchBar;
