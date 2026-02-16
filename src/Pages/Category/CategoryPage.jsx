import React, { useState } from "react";
import { categories as initialData } from "../../data/CategoryData";
import CategoryHeader from "./CategoryHeader";
import CategorySearch from "./CategorySearch";
import CategoryTable from "./CategoryTable";

const CategoryPage = () => {
  const [search, setSearch] = useState("");
  const [categoryList, setCategoryList] = useState(initialData);

 
  const handleAddCategory = () => {
    const newName = prompt("Enter New Category Name:");

    if (!newName) return;

    const newCategory = {
      id: categoryList.length + 1,
      name: newName,
      date: new Date().toLocaleString(),
    };

    setCategoryList([...categoryList, newCategory]);
  };

  const filterData = categoryList.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <CategoryHeader onAddCategory={handleAddCategory} />

      <CategorySearch search={search} setSearch={setSearch} />

      <CategoryTable data={filterData} />
    </div>
  );
};

export default CategoryPage;
