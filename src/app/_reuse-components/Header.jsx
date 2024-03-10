"use client";
import { usePathname } from "next/navigation";
import React from "react";

const Header = () => {
  const pathname = usePathname();

  return pathname.includes("store") ? (
    <></>
  ) : (
    <div className="flex justify-center items-center py-3">
      <h1 className="text-xl text-[#e5f2ff] font-bold">
        <span className="text-[#26a0d9] font-extrabold">IC</span> Restaurent
      </h1>
    </div>
  );
};

export default Header;
