"use client";
import React, { useState } from "react";
import StoreHeader from "./StoreHeader";
import TableDataStore from "@/app/_reuse-components/TableDataStore";
import ModalPopup from "@/app/_reuse-components/ModalPopup";
import Search from "./Search";

const StoreElements = ({ storeData }) => {
  const [popup, setPopup] = useState(false);
  const [itemInfo, setItemInfo] = useState({
    id: "",
    name: "",
  });

  const [searchStoreData, setSearchStoreData] = useState(storeData);
  const [loading, setLoading] = useState(false);
  return (
    <div className="pb-20">
      <StoreHeader />
      <Search
        data={storeData}
        setSearchStoreData={setSearchStoreData}
        loading={loading}
        setLoading={setLoading}
      />
      <TableDataStore
        storeData={searchStoreData}
        setPopup={setPopup}
        setItemInfo={setItemInfo}
      />
      <ModalPopup popup={popup} setPopup={setPopup} itemInfo={itemInfo} />
    </div>
  );
};

export default StoreElements;
