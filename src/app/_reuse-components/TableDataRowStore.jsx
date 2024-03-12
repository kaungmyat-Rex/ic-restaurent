"use client";
import React from "react";

const TableDataRowStore = ({ item, index, setPopup, setItemInfo }) => {
  const totalPrice = item.price * item.count;

  return (
    <tr
      key={item.id}
      className="border-b border-[1px] border-[#2a253c]"
      onClick={() => {
        const id = item.id;
        const name = item.item;
        setPopup(true);
        setItemInfo({
          id,
          name,
        });
      }}
    >
      <td className="text-left text-white w-[10%] py-3 pl-3">{index + 1}</td>
      <td className="text-left text-white w-[45%] py-3 pl-3">{item.item}</td>
      <td className="text-left text-white w-[15%] py-3 pl-3">{item.price}</td>
      <td className="text-left text-white w-[15%] py-3 pl-3">{totalPrice}</td>
      <td className="text-left text-white w-[15%] py-3 pl-3 pr-3">
        {item.count}
      </td>
    </tr>
  );
};

export default TableDataRowStore;
