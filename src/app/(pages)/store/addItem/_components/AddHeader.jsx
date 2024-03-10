"use client";
import React from "react";
import { MdOutlineArrowBackIosNew } from "react-icons/md";

import { useRouter } from "next/navigation";
const AddHeader = () => {
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
      <p className="text-[#26a0d9] p-1 font-semibold px-5">
        Store Item Add Page
      </p>
    </div>
  );
};

export default AddHeader;
