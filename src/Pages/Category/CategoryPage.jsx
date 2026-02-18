// import React, { useState } from "react";
// import { categories as initialData } from "../../data/CategoryData";
// import CategoryHeader from "./CategoryHeader";
// import CategorySearch from "./CategorySearch";
// import CategoryTable from "./CategoryTable";
// import RichTextEditor from "../../Components/Common/RichTextEditor";

// const CategoryPage = () => {
//   const [search, setSearch] = useState("");
//   const [categoryList, setCategoryList] = useState(initialData);

 
//   const handleAddCategory = () => {
//     const newName = prompt("Enter New Category Name:");

//     if (!newName) return;

//     const newCategory = {
//       id: categoryList.length + 1,
//       name: newName,
//       date: new Date().toLocaleString(),
//     };

//     setCategoryList([...categoryList, newCategory]);
//   };

//   const filterData = categoryList.filter((item) =>
//     item.name.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <div>
//       <CategoryHeader onAddCategory={handleAddCategory} />

//       <CategorySearch search={search} setSearch={setSearch} />

//       {/* <CategoryTable data={filterData} /> */}

//       <RichTextEditor label={"Enter Your Email Template"} required={true} height="500px"/>
//       <RichTextEditor label={"Enter Your Email Template"}  required={true} height="200px"/>
     
//     </div>
//   );
// };

// export default CategoryPage;



import React from "react";
import TableWrapper from "../../Components/Common/Listing/TableWrapper";

const CategoryPage = () => {
  const columns = [
    { key: "id", label: "ID" },
    { key: "name", label: "Category Name" },
    { key: "status", label: "Status" },
  ];

  const data = [
    { id: 1, name: "Electronics", status: "Active" },
    { id: 2, name: "Clothing", status: "Active" },
    { id: 3, name: "Furniture", status: "Inactive" },
    { id: 4, name: "Books", status: "Active" },
    { id: 5, name: "Toys", status: "Inactive" },
  ];

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Category List</h1>
      <TableWrapper
        columns={columns}
        data={data}
        itemsPerPage={3}
        searchPlaceholder="Search Category..."
      />
    </div>
  );
};

export default CategoryPage;
