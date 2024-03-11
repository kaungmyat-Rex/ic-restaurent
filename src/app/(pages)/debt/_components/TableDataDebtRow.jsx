import React from "react";

const TableDataDebtRow = ({ item, index, setPopup, setItemInfo }) => {
  return (
    <tr
      className="border-b border-[1px] border-[#2a253c]"
      onClick={() => {
        const id = item.id;
        const name = item.Creditor;
        setPopup(true);
        setItemInfo({
          id,
          name,
        });
      }}
    >
      <td className="text-left text-white w-[10%] py-3 pl-3">{index + 1}</td>
      <td className="text-left text-white w-[60%] py-3 pl-3">
        {item.Creditor}
      </td>

      <td className="text-left text-white w-[15%] py-3 pl-3 pr-3">
        {item.debtAmount} Ks
      </td>
    </tr>
  );
};

export default TableDataDebtRow;
