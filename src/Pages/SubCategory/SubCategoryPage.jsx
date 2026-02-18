// import React, { useState } from "react";
// import { subCategories } from "../../data/SubCategoryData";
// import SubCategoryHeader from "./SubCategory";
// import SubCategoryTable from "./SubCategoryTable";

// const SubCategoryPage = () => {
//   const [data, setData] = useState(subCategories);

//   return (
//     <div>
//       <SubCategoryHeader onAdd={() => alert("Add Subcategory Clicked")} />
//       <SubCategoryTable data={data} />
//     </div>
//   );
// };

// export default SubCategoryPage;


import React, { useState } from "react";
import TableWrapper from "../../Components/Common/Listing/TableWrapper";
import { subCategories } from "../../data/SubCategoryData";

const SubCategoryPage = () => {
  const [data, setData] = useState(subCategories);

  const columns = [
    { key: "id", label: "ID" },
    { key: "category", label: "Category" },
    { key: "name", label: "name" },
    { key: "description", label: "description" },
    { key: "date", label: "date" },
  ];

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">SubCategory List</h1>

      <TableWrapper
        columns={columns}
        data={data}
        itemsPerPage={3}
        searchPlaceholder="Search SubCategory..."
      />
    </div>
  );
};

export default SubCategoryPage;


// import React from "react";
// import TableWrapper from "../components/Common/TableWrapper";

// const SubCategoryPage = () => {
//   const columns = [
//     { key: "id", label: "ID" },
//     { key: "name", label: "SubCategory Name" },
//     { key: "category", label: "Parent Category" },
//   ];

//   const data = [
//     { id: 1, name: "Mobile Phones", category: "Electronics" },
//     { id: 2, name: "Laptops", category: "Electronics" },
//     { id: 3, name: "Shirts", category: "Clothing" },
//     { id: 4, name: "Pants", category: "Clothing" },
//   ];

//   return (
//     <div className="p-4">
//       <h1 className="text-xl font-bold mb-4">SubCategory List</h1>
//       <TableWrapper
//         columns={columns}
//         data={data}
//         itemsPerPage={2}
//         searchPlaceholder="Search SubCategory..."
//       />
//     </div>
//   );
// };

// export default SubCategoryPage;

