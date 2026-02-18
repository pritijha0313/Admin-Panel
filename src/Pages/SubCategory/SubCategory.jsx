import Button from "../../Components/Common/Button";

const SubCategoryHeader = ({ onAdd }) => {
  return (
    <div className="flex justify-between items-center bg-white p-5 rounded-xl shadow-sm border border-gray-200 mb-6">

      {/* Left Section */}
      <div>
        <h1 className="text-2xl font-bold text-[#202224]">Subcategories</h1>
        <p className="text-[#4D4E50] text-sm mt-1">
          Manage subdivided categories and assign them under main categories.
        </p>
      </div>

      {/* Add Button */}
      <Button
        onClick={onAdd}
        className="bg-purple-600 hover:bg-purple-700 text-white px-5 py-2.5 rounded-lg shadow-sm transition flex items-center gap-2"
        label={
          <>
            <span className="text-lg font-bold">+</span>
            Add Subcategory
          </>
        }
      />
    </div>
  );
};

export default SubCategoryHeader;
