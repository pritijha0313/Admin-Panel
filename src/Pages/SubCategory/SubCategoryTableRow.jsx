import Button from "../../Components/Common/Button";

const SubCategoryTableRow = ({ item, index }) => {
  return (
    <tr className="border-b hover:bg-gray-50 transition">
      <td className="p-2">{index + 1}</td>
      <td className="p-2">{item.category}</td>
      <td className="p-2 font-medium">{item.name}</td>
      <td className="p-2 text-gray-600">{item.description}</td>
      <td className="p-2">{item.date}</td>
      <td className="p-2 text-right">
        <Button label=":" className="px-2 py-1 border rounded" />
      </td>
    </tr>
  );
};

export default SubCategoryTableRow;
