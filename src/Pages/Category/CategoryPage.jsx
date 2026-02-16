import React, { useState } from "react";
import { categories as initialData } from "../../data/CategoryData";
import CategoryHeader from "./CategoryHeader";
import CategorySearch from "./CategorySearch";
import CategoryTable from "./CategoryTable";
import RichTextEditor from "../../Components/Common/RichTextEditor";

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

      {/* <CategoryTable data={filterData} /> */}

      <RichTextEditor label={"Enter Your Email Template"} required={true} height="500px"/>
      <RichTextEditor label={"Enter Your Email Template"}  required={true} height="200px"/>
     
    </div>
  );
};

export default CategoryPage;
