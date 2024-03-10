import React from "react";
import HomeStoreTableRow from "./HomeStoreTableRow";

const HomeStoreTable = ({ DescStoreData }) => {
  return (
    <div className="flex flex-col p-3">
      <h4 className="text-[#26a0d9] text-lg font-bold mb-2">
        Min Amount In Store
      </h4>
      <table className="w-full shadow-sm bg-[#231f32] rounded-xl">
        <thead className="rounded-xl w-full bg-[#2a253c]">
          <tr className="">
            <td className="text-left text-[#26a0d9] w-[10%] py-3 pl-3">No</td>
            <td className="text-left text-[#26a0d9] w-[60%] py-3 pl-3">Item</td>
            <td className="text-left text-[#26a0d9] w-[15%] py-3 pl-3">
              Price
            </td>
            <td className="text-left text-[#26a0d9] w-[15%] py-3 pl-3 pr-3">
              Count
            </td>
          </tr>
        </thead>
        <tbody className="text-left text-white">
          {DescStoreData?.slice(0, 5).map((item, index) => (
            <HomeStoreTableRow key={item.id} item={item} index={index} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HomeStoreTable;
