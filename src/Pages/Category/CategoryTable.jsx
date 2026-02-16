import React from "react";
import CategoryTableRow from "./CategoryTableRow";

const CategoryTable = ({ data }) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Sr No</th>
            <th>Category Name</th>
            <th>Created At</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {data.map((item, index) => (
            <CategoryTableRow key={item.id} item={item} index={index} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CategoryTable;
