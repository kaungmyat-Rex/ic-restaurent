import React from "react";

import Link from "next/link";

const StoreHeader = () => {
  return (
    <div className="flex justify-between items-center py-3 px-3">
      <h4 className="text-[#26a0d9] text-lg font-bold mb-2">
        Store <span className="text-white">List</span>
      </h4>
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
