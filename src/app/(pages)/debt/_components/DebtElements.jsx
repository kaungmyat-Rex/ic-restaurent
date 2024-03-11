"use client";
import React, { useState } from "react";
import DebtHeader from "./DebtHeader";
import TableDataDebt from "./TableDataDebt";
import DebtModal from "./DebtModal";

const DebtElements = ({ DebtData }) => {
  const [popup, setPopup] = useState(false);
  const [itemInfo, setItemInfo] = useState({
    id: "",
    name: "",
  });
  return (
    <>
      <DebtHeader />
      <TableDataDebt
        DebtData={DebtData}
        setPopup={setPopup}
        setItemInfo={setItemInfo}
      />
      <DebtModal popup={popup} setPopup={setPopup} itemInfo={itemInfo} />
    </>
  );
};

export default DebtElements;
