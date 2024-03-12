import React from "react";
import TableDataRowStore from "./TableDataRowStore";

const TableDataStore = ({ storeData, setPopup, setItemInfo }) => {
  return (
    <div className="flex flex-col p-3">
      <h4 className="text-[#26a0d9] text-lg font-bold mb-2">Store</h4>
      <table className="w-full shadow-sm bg-[#231f32] rounded-xl">
        <thead className="rounded-xl w-full bg-[#2a253c]">
          <tr className="">
            <td className="text-left text-[#26a0d9] w-[10%] py-3 pl-3">No</td>
            <td className="text-left text-[#26a0d9] w-[45%] py-3 pl-3">Item</td>
            <td className="text-left text-[#26a0d9] w-[15%] py-3 pl-3">
              Price
            </td>
            <td className="text-left text-[#26a0d9] w-[15%] py-3 pl-3">
             Total Price
            </td>
            <td className="text-left text-[#26a0d9] w-[15%] py-3 pl-3 pr-3">
              Count
            </td>
          </tr>
        </thead>
        <tbody className="text-left text-white">
          {storeData?.map((item, index) => (
            <TableDataRowStore
              item={item}
              index={index}
              setPopup={setPopup}
              setItemInfo={setItemInfo}
              key={item.id}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableDataStore;
