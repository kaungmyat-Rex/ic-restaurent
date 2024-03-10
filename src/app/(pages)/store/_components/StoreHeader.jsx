"use client";
import React from "react";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import Link from "next/link";
import { useRouter } from "next/navigation";
const StoreHeader = () => {
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
      <Link
        href={"/store/addItem"}
        className="text-[#26a0d9] border border-[#26a0d9] p-1 rounded-full font-semibold px-5 bg-[#231f32]"
      >
        Add Item
      </Link>
    </div>
  );
};

export default StoreHeader;
