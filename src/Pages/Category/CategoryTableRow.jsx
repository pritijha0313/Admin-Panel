import Button from "../../Components/Common/Button";

const CategoryTableRow = ({ item, index }) => {
  return (
    <tr className="border-b hover:bg-gray-50 transition">
      <td className="py-3 px-3">{index + 1}</td>
      <td className="py-3 px-3">{item.name}</td>
      <td className="py-3 px-3">{item.date}</td>
      <td className="py-3 px-3 text-right">
       <Button>:</Button>
      </td>
    </tr>
  );
};

export default CategoryTableRow;
