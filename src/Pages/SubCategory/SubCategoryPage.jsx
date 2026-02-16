import React, { useState } from "react";
import { subCategories } from "../../data/SubCategoryData";
import SubCategoryHeader from "./SubCategory";
import SubCategoryTable from "./SubCategoryTable";

const SubCategoryPage = () => {
  const [data, setData] = useState(subCategories);

  return (
    <div>
      <SubCategoryHeader onAdd={() => alert("Add Subcategory Clicked")} />
      <SubCategoryTable data={data} />
    </div>
  );
};

export default SubCategoryPage;
