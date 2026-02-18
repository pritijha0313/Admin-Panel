import React from "react";
import InputField from "../../Components/Common/InputField";

const CategorySearch = ({ search, setSearch }) => {
  return (
    <div className="w-full">
      <InputField
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="bg-gray-100 border border-gray-200 rounded-lg px-4 py-2 focus:bg-white"
      />
    </div>
  );
};

export default CategorySearch;
