import React from "react";
import TableDataRow from "./TableDataRow";

const TableData = () => {
  return (
    <div className="flex flex-col p-3">
      <h4 className="text-[#26a0d9] text-lg font-bold mb-2">Today Pickup</h4>
      <table className="w-full shadow-sm bg-[#231f32] rounded-xl">
        <thead className="rounded-xl w-full bg-[#2a253c]">
          <tr className="">
            <td className="text-left text-[#26a0d9] w-[10%] py-3 pl-3">No</td>
            <td className="text-left text-[#26a0d9] w-[70%] py-3 pl-3">Name</td>
            <td className="text-left text-[#26a0d9] w-[20%] py-3 pl-3">
              Count
            </td>
          </tr>
        </thead>
        <tbody className="text-left text-white">
          <TableDataRow />
          <TableDataRow />
          <TableDataRow />
        </tbody>
      </table>
    </div>
  );
};

export default TableData;
