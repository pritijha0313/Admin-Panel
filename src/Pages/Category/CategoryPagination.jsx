import Button from "../../Components/Common/Button";

const CategoryPagination = ({ total }) => {
  return (
    <div className="flex items-center justify-between pt-4 text-sm text-gray-500">
      <p>Total {total} results</p>

      <div className="flex items-center gap-4">
        <span>Rows per page</span>

        <select className="border rounded-lg px-2 py-1">
          <option>10</option>
          <option>20</option>
          <option>50</option>
        </select>

        <div className="flex items-center gap-2">
          <Button>{"<"}</Button>
          <p>1 of 1</p>
          <Button >{">"}</Button>
        </div>
      </div>
    </div>
  );
};

export default CategoryPagination;
