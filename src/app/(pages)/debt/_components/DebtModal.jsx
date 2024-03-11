"use client";
import React from "react";
import { deleteDoc, doc } from "firebase/firestore";
import Link from "next/link";
import { MdModeEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { db } from "@/app/config/firebase";
import { useRouter } from "next/navigation";
const DebtModal = ({ popup, setPopup, itemInfo }) => {
  const itemsId = itemInfo?.id;

  const router = useRouter();
  const deleteDebtItem = async () => {
    const userCollection = doc(db, "debt", itemsId);
    await deleteDoc(userCollection);
    setPopup(false);
    router.refresh();
  };

  const modelClass = `modal ${
    popup ? "open-modal" : ""
  } fixed w-full h-full left-0 top-0 z-20 flex justify-center items-center`;
  const modelOverlay = `modal-overlay absolute w-full h-full left-0 top-0`;
  const modelMain = `modal-main ${
    popup ? "open-modal-main" : ""
  } absolute max-w-[500px] md:max-w-[900px] bg-[#2d2f36] px-3 left-2 sm:left-[15%] right-2 pb-[200px] rounded-3xl shadow-md`;
  return (
    <div className={modelClass}>
      <div className={modelOverlay} onClick={() => setPopup(false)} />
      <div className={modelMain}>
        <div className="flex justify-center items-center mt-5">
          <h4 className="text-[#26a0d9] font-semibold text-lg rounded-2xl py-2 px-3 text-center border border-[#26a0d9]">
            {itemInfo?.name}
          </h4>
        </div>
        <div className="flex flex-col bg-[#231f32] rounded-xl text-white text-lg font-medium items-start mt-5">
          <Link
            href={`/debt/editDebt?itemId=${itemInfo?.id}`}
            className="flex justify-start items-center gap-x-3 py-4 px-3 border-b border-[#42464c] w-full"
          >
            <MdModeEdit className="text-[#26a0d9]" size={24} />{" "}
            <span>Edit အကြွေး</span>
          </Link>
          <p
            className="flex justify-start items-center gap-x-3 py-4 px-3 w-full"
            onClick={() => deleteDebtItem()}
          >
            <MdDelete className="text-[#26a0d9]" size={24} />{" "}
            <span>Delete အကြွေး</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default DebtModal;
