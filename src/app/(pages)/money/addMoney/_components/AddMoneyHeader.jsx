"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { MdOutlineArrowBackIosNew } from "react-icons/md";

const AddMoneyHeader = () => {
  const router = useRouter();
  return (
    <div className="flex justify-between items-center py-3 px-3 border-b border-black">
      <MdOutlineArrowBackIosNew
        size={25}
        className="text-white"
        onClick={() => {
          router.back();
        }}
      />
      <p className="text-[#26a0d9] font-semibold">Add Today Checkout</p>
    </div>
  );
};

export default AddMoneyHeader;
