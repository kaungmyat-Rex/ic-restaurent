"use client";
import React, { useEffect, useState } from "react";
import {
  collection,
  addDoc,
  Timestamp,
  doc,
  updateDoc,
} from "firebase/firestore";
import { db } from "@/app/config/firebase";
import { useRouter } from "next/navigation";
const NumberModal = ({
  numberpopup,
  setNumberpopup,
  itemname,
  itemId,
  itemcount,
  itemprice,
  setItemId,
  setItemname,
  setItemcount,
  setItemprice,
  setPopup,
}) => {
  const [pickupCount, setPickupCount] = useState(0);
  const [show, setShow] = useState(false);
  const router = useRouter();

  const pickupAddCollection = collection(db, "pickup");

  useEffect(() => {
    if (pickupCount > 0) {
      setShow(true);
    } else {
      setShow(false);
    }
  }, [pickupCount]);

  const Pickuphandle = async () => {
    try {
      const itemEditCollection = doc(db, "store", itemId);
      const todayDate = Timestamp.fromDate(new Date());
      const storeUpdateCount = itemcount - pickupCount;
      await addDoc(pickupAddCollection, {
        name: itemname,
        count: Number(pickupCount),
        date: todayDate,
      });
      await updateDoc(itemEditCollection, {
        item: itemname,
        count: Number(storeUpdateCount),
        price: Number(itemprice),
      });
      setNumberpopup(false);
      setItemId("");
      setItemname("");
      setItemcount(0);
      setItemprice(0);
      setPopup(false);
      router.refresh();
    } catch (error) {
      console.log("🚀 ~ Pickuphandle ~ error:", error);
    }
  };

  const modelClass = `modal-number ${
    numberpopup ? "open-modal-number" : ""
  } fixed w-full h-full left-0 top-0 z-20 flex justify-center items-center`;
  const modelOverlay = `modal-overlay-number absolute w-full h-full left-0 top-0`;
  const modelMain = `modal-main-number ${
    numberpopup ? "open-modal-main-number" : ""
  } absolute max-w-[500px] md:max-w-[900px] bg-[#2d2f36] left-2 right-2 rounded-md shadow-md overflow-y-scroll`;
  return (
    <div className={modelClass}>
      <div className={modelOverlay} onClick={() => setNumberpopup(false)} />
      <div className={modelMain}>
        <div className="flex flex-col justify-center items-center py-4">
          <h4 className="w-[70%] text-white text-lg">
            Pickup Item --{" "}
            <span className="text-[#26a0d9] font-bold">{itemname}</span>
          </h4>
          <h4 className="w-[70%] text-white text-lg">
            Stock count --{" "}
            <span className="text-[#26a0d9] font-bold">{itemcount}</span>
          </h4>

          <div className="w-full h-auto my-3 px-3 mt-10">
            <div className="flex justify-center items-center">
              <p className="text-[#e5f2ff] text-sm font-bold mb-2">
                Enter Your Pickup Count
              </p>
            </div>
            <input
              type="number"
              value={pickupCount}
              onChange={(e) => setPickupCount(e.target.value)}
              className={`w-full h-[45px] rounded-full bg-[#28243a] text-white text-base focus:outline-none indent-5`}
            />
          </div>
          {show && (
            <button
              onClick={() => Pickuphandle()}
              className="bg-[#26a0d9] font-bold text-white rounded-md p-2 px-10 mt-3 hover:bg-[#26a0d962]"
            >
              Done
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default NumberModal;
