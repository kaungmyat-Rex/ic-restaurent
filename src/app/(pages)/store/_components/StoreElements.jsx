"use client";
import React, { useState } from "react";
import StoreHeader from "./StoreHeader";
import TableDataStore from "@/app/_reuse-components/TableDataStore";
import ModalPopup from "@/app/_reuse-components/ModalPopup";

const StoreElements = ({ storeData }) => {
  const [popup, setPopup] = useState(false);
  const [itemInfo, setItemInfo] = useState({
    id: "",
    name: "",
  });

  return (
    <>
      <StoreHeader />
      <TableDataStore
        storeData={storeData}
        setPopup={setPopup}
        setItemInfo={setItemInfo}
      />
      <ModalPopup popup={popup} setPopup={setPopup} itemInfo={itemInfo} />
    </>
  );
};

export default StoreElements;
