import React from "react";

const Table = ({ columns, data }) => {
  return (
    <table className="min-w-full border border-gray-300">
      <thead className="bg-gray-200">
        <tr>
          {columns.map((col) => (
            <th key={col.key} className="p-2 border">
              {col.label}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.length > 0 ? (
          data.map((row, idx) => (
            <tr key={idx} className="hover:bg-gray-100">
              {columns.map((col) => (
                <td key={col.key} className="p-2 border">
                  {row[col.key]}
                </td>
              ))}
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={columns.length} className="p-2 text-center">
              No data found
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default Table;
