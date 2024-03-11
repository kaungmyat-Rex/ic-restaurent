import React from "react";
import { MdDeleteForever } from "react-icons/md";
import Link from "next/link";
const MoneyHeader = ({ setpopup }) => {
  return (
    <div className="flex justify-between items-center w-full px-3 py-3 fixed bg-[#1b1828] top-0 left-0">
      <h4 className="text-[#26a0d9] text-lg font-bold mb-2">
        Profit <span className="text-white">History</span>
      </h4>
      <div className="flex justify-center items-center gap-x-4">
        <Link
          href={"/money/addMoney"}
          className="text-[#26a0d9] border border-[#26a0d9] p-1 rounded-full font-semibold px-5 bg-[#231f32]"
        >
          Add Profit
        </Link>
        <MdDeleteForever
          className="text-red-500"
          size={30}
          onClick={() => {
            setpopup(true);
          }}
        />
      </div>
    </div>
  );
};

export default MoneyHeader;
