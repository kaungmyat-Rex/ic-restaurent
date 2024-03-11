"use client";
import React, { useState } from "react";
import NumberModal from "./NumberModal";

const PickupModal = ({ popup, setPopup, DescStoreData }) => {
  const [numberpopup, setNumberpopup] = useState(false);
  const [itemname, setItemname] = useState("");
  const [itemcount, setItemcount] = useState(0);
  const [itemprice, setItemprice] = useState(0);
  const [itemId, setItemId] = useState("");
  const modelClass = `modal-pickup ${
    popup ? "open-modal-pickup" : ""
  } fixed w-full h-full left-0 top-0 z-20 flex justify-center items-center`;
  const modelOverlay = `modal-overlay-pickup absolute w-full h-full left-0 top-0`;
  const modelMain = `modal-main-pickup ${
    popup ? "open-modal-main-pickup" : ""
  } absolute max-w-[1000px] h-[600px] bg-[#2d2f36] left-2 right-2 rounded-3xl shadow-md overflow-y-scroll`;
  return (
    <>
      <div className={modelClass}>
        <div className={modelOverlay} onClick={() => setPopup(false)} />
        <div className={modelMain}>
          <table className="w-full shadow-sm rounded-xl pb-10">
            <thead className="rounded-xl w-full sticky top-0 left-0 bg-[#1b1828] ">
              <tr className="">
                <td className="text-left text-[#26a0d9] w-[10%] py-4 pl-3">
                  No
                </td>
                <td className="text-left text-[#26a0d9] w-[70%] py-4 pl-3">
                  Item
                </td>
                <td className="text-left text-[#26a0d9] w-[20%] py-4 pl-3 pr-3">
                  Count
                </td>
              </tr>
            </thead>
            <tbody className="text-left text-white">
              {DescStoreData?.map((item, index) => {
                return (
                  <tr
                    key={item.id}
                    className="border-b-[1px] border-[#2a253c]"
                    onClick={() => {
                      setNumberpopup(true);
                      setItemId(item.id);
                      setItemname(item.item);
                      setItemcount(item.count);
                      setItemprice(item.price);
                    }}
                  >
                    <td className="text-left text-white w-[10%] py-4 pl-3">
                      {index + 1}
                    </td>
                    <td className="text-left text-white w-[70%] py-4 pl-3">
                      {item.item}
                    </td>

                    <td className="text-left text-white w-[20%] py-4 pl-3 pr-3">
                      {item.count}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      <NumberModal
        numberpopup={numberpopup}
        setNumberpopup={setNumberpopup}
        itemname={itemname}
        itemcount={itemcount}
        itemId={itemId}
        itemprice={itemprice}
        setItemId={setItemId}
        setItemname={setItemname}
        setItemcount={setItemcount}
        setItemprice={setItemprice}
        setPopup={setPopup}
      />
    </>
  );
};

export default PickupModal;
