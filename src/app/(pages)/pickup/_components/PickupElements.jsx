"use client";
import React, { useState } from "react";
import PickupTable from "./PickupTable";
import { MdDeleteForever } from "react-icons/md";
import DeleteAllModal from "./DeleteAllModal";
const PickupElements = ({ pickupData }) => {
  const [popup, setpopup] = useState(false);
  return (
    <>
      <div className="pb-20 w-full">
        <div className="flex justify-between items-center w-full px-3 py-3">
          <h4 className="text-[#26a0d9] text-lg font-bold mb-2">
            Pickup <span className="text-white">History</span>
          </h4>
          <MdDeleteForever
            className="text-red-500"
            size={30}
            onClick={() => {
              setpopup(true);
            }}
          />
        </div>

        <PickupTable pickupData={pickupData} />
      </div>
      <DeleteAllModal popup={popup} setPopup={setpopup} />
    </>
  );
};

export default PickupElements;
