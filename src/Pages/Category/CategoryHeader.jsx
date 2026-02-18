import React from "react";
import Button from "../../Components/Common/Button";

const CategoryHeader = ({ search, setSearch, onAddCategory }) => {
  return (
    <div className="flex items-center justify-between bg-white p-5 rounded-xl shadow-sm mb-6">

      <div>
        <h1 className="text-2xl font-bold text-[#202224]">Categories</h1>
        <p className="text-[#4D4E50] text-sm">Manage your categories here</p>
      </div>

      
      <div className="flex items-center gap-3">

        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search category..."
          className="border border-gray-300 px-3 py-2 rounded-lg w-60 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />

      
        <Button
          label={
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold">+</span>
              <span>Add Category</span>
            </div>
          }
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          onClick={onAddCategory}
        />
      </div>
    </div>
  );
};

export default CategoryHeader;
