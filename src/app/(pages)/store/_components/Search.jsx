"use client";
import useDebounce from "@/app/hook/useDebounce";
import React, { useEffect, useState } from "react";
import { IoSearch } from "react-icons/io5";
import { PiSpinnerBold } from "react-icons/pi";

const Search = ({ setSearchStoreData, data, loading, setLoading }) => {
  const [searchInput, setSearchInput] = useState("");

  const debouncedValue = useDebounce(searchInput, 300);

  const handleChange = (e) => {
    setSearchInput(e.target.value);
    setLoading(true);
  };

  useEffect(() => {
    const searchFilter = async () => {
      try {
        const filterSearch = data.filter((item) =>
          item.item.toLowerCase().includes(debouncedValue.toLowerCase())
        );
        setSearchStoreData(filterSearch);
      } finally {
        setLoading(false);
      }
    };

    searchFilter();
  }, [debouncedValue, data, setSearchStoreData]);

  return (
    <div className="w-full px-3 pb-2">
      <div className="relative w-full h-9">
        <input
          type="text"
          placeholder="Search"
          value={searchInput}
          onChange={(e) => handleChange(e)}
          className="w-full bg-[#2a253c] h-full rounded-3xl text-white placeholder:text-[#99aab5] placeholder:text-sm placeholder:font-semibold placeholder:indent-10 text-sm font-semibold indent-10 focus:outline-none focus:text-sm focus:border-[1px] focus:border-[#26a0d9]"
        />
        {loading ? (
          <PiSpinnerBold
            className="absolute top-2 left-3 text-[#26a0d9] animate-spin"
            size={19}
          />
        ) : (
          <IoSearch className="absolute top-2 left-3 text-white" size={19} />
        )}
      </div>
    </div>
  );
};

export default Search;
