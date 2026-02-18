import SubCategoryTableRow from "./SubCategoryTableRow";

const SubCategoryTable = ({ data }) => {
  return (
    <div className="overflow-x-auto mt-5 bg-white rounded-xl shadow-sm border border-gray-200">
      <table className="w-full text-left">
        
        <thead className="bg-gray-50 border-b">
          <tr>
            <th className="p-4 text-gray-600 font-semibold text-sm">Sr No</th>
            <th className="p-4 text-gray-600 font-semibold text-sm">Parent Category</th>
            <th className="p-4 text-gray-600 font-semibold text-sm">Subcategory</th>
            <th className="p-4 text-gray-600 font-semibold text-sm">Description</th>
            <th className="p-4 text-gray-600 font-semibold text-sm">Created At</th>
            <th className="p-4 text-gray-600 font-semibold text-sm">Actions</th>
          </tr>
        </thead>

        <tbody>
          {data.map((item, i) => (
            <SubCategoryTableRow key={item.id} item={item} index={i} />
          ))}
        </tbody>

      </table>
    </div>
  );
};

export default SubCategoryTable;
