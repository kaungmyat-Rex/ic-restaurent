"use client";
import React, { useState } from "react";
import TableData from "./TableData";
import { IoIosAddCircle } from "react-icons/io";
import TableDataStore from "./TableDataStore";
import HomeStoreTable from "../_home-components/HomeStoreTable";
import HomePickupTable from "../_home-components/HomePickupTable";
import PickupModal from "./PickupModal";
const HomeElements = ({ DescStoreData, pickupData }) => {
  const [popup, setPopup] = useState(false);
  return (
    <>
      <div className="pb-20">
        <HomePickupTable pickupData={pickupData} />
        <div className="flex justify-center items-center -mt-7">
          <IoIosAddCircle
            size={55}
            className="text-[#26a0d9] bg-[#1b1828] rounded-full"
            onClick={() => {
              setPopup(true);
            }}
          />
        </div>
        <div className="w-full h-[1px] bg-[#2a253c] px-3 m-5" />
        <HomeStoreTable DescStoreData={DescStoreData} />
      </div>
      <PickupModal
        popup={popup}
        setPopup={setPopup}
        DescStoreData={DescStoreData}
      />
    </>
  );
};

export default HomeElements;
