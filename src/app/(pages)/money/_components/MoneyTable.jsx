import formatDate from "@/app/hook/useFormatDate";
import React, { useState, useEffect } from "react";
import { FaShoppingBag } from "react-icons/fa";
import { FaMoneyBillAlt } from "react-icons/fa";
import { FaHandHoldingDollar } from "react-icons/fa6";
const MoneyTable = ({ moneyData, setItemInfo, setModalPopup }) => {
  return (
    <div className="w-full px-3">
      <div className="flex flex-col gap-y-5 mt-28 pb-10">
        {moneyData?.map((item) => {
          const dateKey = new Date(
            item.date.seconds * 1000
          ).toLocaleDateString();

          return (
            <div
              onClick={() => {
                const id = item.id;
                const date = formatDate(dateKey);
                setModalPopup(true);
                setItemInfo({
                  id,
                  date,
                });
              }}
              key={item.id}
              className="w-full flex-[1] bg-[#231f32] p-3 rounded-lg"
            >
              <div className="flex items-center justify-end text-[#26a0d9] font-bold">
                {formatDate(dateKey)}
              </div>
              <div className="flex flex-col gap-y-5 mt-4">
                <div className="flex justify-between items-center">
                  <p className="text-white flex justify-center items-center gap-x-2">
                    <FaShoppingBag className="text-[#26a0d9]" size={23} />
                    စျေးဝယ်‌‌ငွေ
                  </p>
                  <p className="text-red-400">-{item.buy} Ks</p>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-white flex justify-center items-center gap-x-2">
                    <FaMoneyBillAlt className="text-[#26a0d9]" size={23} />
                    ထွက်ငွေ
                  </p>
                  <p className="text-red-400">-{item.out} Ks</p>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-white flex justify-center items-center gap-x-2">
                    <FaHandHoldingDollar className="text-[#26a0d9]" size={23} />
                    ရောင်းငွေ
                  </p>
                  <p className="text-green-400">+{item.sell} Ks</p>
                </div>
              </div>
              <div className="flex justify-start items-center my-3 border-t-[1px] border-[#1b1828] pt-5">
                <p className="flex justify-center items-center gap-x-5 text-white">
                  ယနေ့အမြတ်
                  <span className="text-[#26a0d9] font-bold text-lg">
                    {item.profit} Ks
                  </span>
                </p>
              </div>
            </div>
          );
        })}
        {/* <div className="w-full flex-[1] bg-[#231f32] p-3 rounded-lg">
          <div className="flex items-center justify-end text-[#26a0d9] font-bold">
            10 March 2024
          </div>
          <div className="flex flex-col gap-y-5 mt-4">
            <div className="flex justify-between items-center">
              <p className="text-white flex justify-center items-center gap-x-2">
                <FaShoppingBag className="text-[#26a0d9]" size={23} />
                စျေးဝယ်‌‌ငွေ
              </p>
              <p className="text-red-400">-2000 Ks</p>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-white flex justify-center items-center gap-x-2">
                <FaMoneyBillAlt className="text-[#26a0d9]" size={23} />
                ထွက်ငွေ
              </p>
              <p className="text-red-400">-2000 Ks</p>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-white flex justify-center items-center gap-x-2">
                <FaHandHoldingDollar className="text-[#26a0d9]" size={23} />
                ရောင်းငွေ
              </p>
              <p className="text-green-400">+7000 Ks</p>
            </div>
          </div>
          <div className="flex justify-start items-center my-3 border-t-[1px] border-[#1b1828] pt-5">
            <p className="flex justify-center items-center gap-x-5 text-white">
              ယနေ့အမြတ်
              <span className="text-[#26a0d9] font-bold text-lg">2000 Ks</span>
            </p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default MoneyTable;
