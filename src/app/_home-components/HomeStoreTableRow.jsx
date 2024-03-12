import React from "react";

const HomeStoreTableRow = ({ item, index }) => {
  const totalPrice = item.price * item.count;
  return (
    <tr className="border-b-[1px] border-b-[#2a253c] sm:border-none">
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

export default HomeStoreTableRow;
