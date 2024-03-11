import React from "react";
import TableDataDebtRow from "./TableDataDebtRow";

const TableDataDebt = ({ DebtData, setPopup, setItemInfo }) => {
  return (
    <div className="flex flex-col p-3">
      <h4 className="text-[#26a0d9] text-lg font-bold mb-2">Store</h4>
      <table className="w-full shadow-sm bg-[#231f32] rounded-xl">
        <thead className="rounded-xl w-full bg-[#2a253c]">
          <tr className="">
            <td className="text-left text-[#26a0d9] w-[10%] py-3 pl-3">No</td>
            <td className="text-left text-[#26a0d9] w-[70%] py-3 pl-3">
              အကြွေးရှင်
            </td>

            <td className="text-left text-[#26a0d9] w-[20%] py-3 pl-3 pr-3">
              Amount
            </td>
          </tr>
        </thead>
        <tbody className="text-left text-white">
          {DebtData.map((item, index) => (
            <TableDataDebtRow
              item={item}
              index={index}
              key={item.id}
              setPopup={setPopup}
              setItemInfo={setItemInfo}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableDataDebt;
