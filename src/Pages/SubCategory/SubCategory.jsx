import Button from "../../Components/Common/Button";

const SubCategoryHeader = ({ onAdd }) => {
  return (
    <div className="flex justify-between items-center my-4">
      <div>
        <h1 className="text-xl font-semibold">Subcategories</h1>
        <p className="text-gray-500">
          Manage all subdivided categories and assign them under main categories.
        </p>
      </div>

      <Button
        onClick={onAdd}
        className="bg-purple-700 text-white px-4 py-2 rounded-lg"
        label={
          <div className="flex items-center gap-2">
            <span className="text-lg">+</span> Add Subcategory
          </div>
        }
      />
    </div>
  );
};

export default SubCategoryHeader;
