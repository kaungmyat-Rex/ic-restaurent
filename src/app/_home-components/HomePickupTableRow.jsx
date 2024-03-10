import React from "react";

const HomePickupTableRow = ({ item, index }) => {
  return (
    <tr className="border-b border-[1px] border-[#2a253c]">
      <td className="text-left text-white w-[10%] py-3 pl-3">{index + 1}</td>
      <td className="text-left text-white w-[70%] py-3 pl-3">{item.name}</td>
      <td className="text-left text-white w-[20%] py-3 pl-3">{item.count}</td>
    </tr>
  );
};

export default HomePickupTableRow;
