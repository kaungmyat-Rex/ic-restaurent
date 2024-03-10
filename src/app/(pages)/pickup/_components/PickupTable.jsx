import formatDate from "@/app/hook/useFormatDate";
import React from "react";

const PickupTable = ({ pickupData }) => {
  const groupedData = pickupData?.reduce((acc, item) => {
    const dateKey = new Date(item.date.seconds * 1000).toLocaleDateString();
    acc[dateKey] = [...(acc[dateKey] || []), item];
    return acc;
  }, {});

  return (
    <div className="w-full px-3">
      <div className="flex flex-col gap-y-5 mt-5 pb-10">
        {Object.keys(groupedData)?.map((date) => (
          <div
            key={date}
            className="w-full flex-[1] bg-[#231f32] p-3 rounded-lg"
          >
            <div className="flex items-center justify-end text-[#26a0d9] font-bold">
              {formatDate(date)}
            </div>
            <div className="flex flex-row flex-[1] text-white font-semibold border-b-[1px] border-[#1b1828] py-3">
              <p className="w-[10%]">No</p>
              <p className="w-[70%]">Item</p>
              <p className="w-[30%]">Count</p>
            </div>
            {groupedData[date].map((item, index) => (
              <div
                key={item.id}
                className="flex flex-row flex-[1] text-gray-300 py-3 border-b-[1px] border-[#1b1828]"
              >
                <p className="w-[10%]">{index + 1}</p>
                <p className="w-[70%]">{item.name}</p>
                <p className="w-[30%]">{item.count}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PickupTable;
