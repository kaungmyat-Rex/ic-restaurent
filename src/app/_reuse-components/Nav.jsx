"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaHome } from "react-icons/fa";
import { FaStore } from "react-icons/fa";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { FaTruckPickup } from "react-icons/fa";
import { FaMoneyCheck } from "react-icons/fa";

const Nav = () => {
  const pathname = usePathname("");
  return (
    <div className="fixed bottom-0 left-0 w-full bg-[#2a253c] shadow-md">
      <div className="flex justify-around items-center pt-2 pb-4">
        <Link
          href={"/"}
          className={`${
            pathname === "/" ? "text-[#26a0d9]" : "text-[#adb6bd]"
          } flex flex-col justify-center items-center`}
        >
          <FaHome size={27} />
          <span className="text-sm">Home</span>
        </Link>
        <Link
          href={"/store"}
          className={`${
            pathname === "/store" ? "text-[#26a0d9]" : "text-[#adb6bd]"
          } flex flex-col justify-center items-center`}
        >
          <FaStore size={27} />
          <span className="text-sm">Store</span>
        </Link>
        <Link
          href={"/money"}
          className={`${
            pathname === "/money" ? "text-[#26a0d9]" : "text-[#adb6bd]"
          } flex flex-col justify-center items-center`}
        >
          <RiMoneyDollarCircleFill size={27} />
          <span className="text-sm">Money</span>
        </Link>
        <Link
          href={"/pickup"}
          className={`${
            pathname === "/pickup" ? "text-[#26a0d9]" : "text-[#adb6bd]"
          } flex flex-col justify-center items-center`}
        >
          <FaTruckPickup size={27} />
          <span className="text-sm">Pickup</span>
        </Link>
        <Link
          href={"/debt"}
          className={`${
            pathname === "/debt" ? "text-[#26a0d9]" : "text-[#adb6bd]"
          } flex flex-col justify-center items-center`}
        >
          <FaMoneyCheck size={27} />
          <span className="text-sm">Debt</span>
        </Link>
      </div>
      <div className="flex justify-center items-center text-xs text-gray-500">
        Developed by{" "}
        <Link
          className="text-[#26a0d9]"
          href={"https://kaungmyat.netlify.app/"}
        >
          @kaungmyat
        </Link>
      </div>
    </div>
  );
};

export default Nav;
