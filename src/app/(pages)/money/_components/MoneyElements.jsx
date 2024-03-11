"use client";
import React, { useState } from "react";
import MoneyHeader from "./MoneyHeader";
import MoneyTable from "./MoneyTable";
import DeleteAllModal from "./DeleteAllModal";
import MoneyModal from "./MoneyModal";

const MoneyElements = ({ moneyData, totalProfit }) => {
  const [popup, setpopup] = useState(false);
  const [modalPopup, setModalPopup] = useState(false);
  const [itemInfo, setItemInfo] = useState({
    id: "",
    date: "",
  });

  return (
    <>
      <div>
        <MoneyHeader setpopup={setpopup} />
        <div className="flex w-full fixed top-14 left-0 justify-end items-center bg-[#1b1828] py-2 px-5">
          <h4 className="text-white font-medium">
            Total Profit -{" "}
            <span className="text-[#26a0d9] font-bold">{totalProfit} Ks</span>
          </h4>
        </div>
        <MoneyTable
          moneyData={moneyData}
          setItemInfo={setItemInfo}
          setModalPopup={setModalPopup}
        />
      </div>
      <DeleteAllModal popup={popup} setPopup={setpopup} />
      <MoneyModal
        modalPopup={modalPopup}
        setModalPopup={setModalPopup}
        itemInfo={itemInfo}
      />
    </>
  );
};

export default MoneyElements;
