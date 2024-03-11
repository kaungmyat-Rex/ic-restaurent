import React from "react";

const HomeStoreTableRow = ({ item, index }) => {
  return (
    <tr className="border-b-[1px] border-b-[#2a253c] sm:border-none">
      <td className="text-left text-white w-[10%] py-3 pl-3">{index + 1}</td>
      <td className="text-left text-white w-[60%] py-3 pl-3">{item.item}</td>
      <td className="text-left text-white w-[15%] py-3 pl-3">{item.price}</td>
      <td className="text-left text-white w-[15%] py-3 pl-3 pr-3">
        {item.count}
      </td>
    </tr>
  );
};

export default HomeStoreTableRow;
