import React from "react";

const Search = ({ searchTerm, setSearchTerm, placeholder }) => {
  return (
    <input
      type="text"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      placeholder={placeholder || "Search..."}
      className="border p-2 rounded w-full mb-4"
    />
  );
};

export default Search;
