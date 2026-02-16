import SubCategoryTableRow from "./SubCategoryTableRow";

const SubCategoryTable = ({ data }) => {
  return (
    <table className="w-full border text-left mt-4">
      <thead className="bg-gray-100">
        <tr>
          <th className="p-2">Sr No</th>
          <th className="p-2">Parent Category</th>
          <th className="p-2">Subcategory</th>
          <th className="p-2">Description</th>
          <th className="p-2">Created At</th>
          <th className="p-2">Actions</th>
        </tr>
      </thead>

      <tbody>
        {data.map((item, i) => (
          <SubCategoryTableRow key={item.id} item={item} index={i} />
        ))}
      </tbody>
    </table>
  );
};

export default SubCategoryTable;
