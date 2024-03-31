"use client";
import Input from "@/app/_reuse-components/Input";
import React, { useState } from "react";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { db } from "@/app/config/firebase";
import { useRouter } from "next/navigation";
import CalendarModal from "./CalendarModal";
const MoneyForm = () => {
  const [buy, setBuy] = useState(0);
  const [out, setOut] = useState(0);
  const [sell, setSell] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");
  const [errorCode, setErrorCode] = useState("");
  const moneyAddCollection = collection(db, "money");
  const router = useRouter();

  const [showModal, setShowModal] = useState(false);

  const [value, onChange] = useState(new Date());

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const totalOut = Number(buy) + Number(out);
      const profit = Number(sell) - totalOut;

      await addDoc(moneyAddCollection, {
        buy: buy,
        out: out,
        sell: sell,
        profit: profit,
        date: value,
      });

      router.back();
      router.refresh();
    } catch (error) {
      console.log("🚀 ~ handleSubmit ~ error:", error);
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="mx-3 mt-20 flex flex-col justify-center items-center"
      >
        <div className="w-fit float-left">
          <p
            className="text-white border-[1px] border-white rounded-md p-3 bg-[#28243a] cursor-pointer"
            onClick={() => setShowModal(!showModal)}
          >
            {value.toDateString()}
          </p>
        </div>
        <Input
          name="buy"
          type="number"
          placeholder="Enter your item name"
          value={buy}
          label="စျေးဝယ်‌‌ငွေ"
          errorcode={errorCode}
          errorMessage={errorMessage}
          onchange={(e) => setBuy(e.target.value)}
        />
        <Input
          name="out"
          type="number"
          placeholder="Enter your item count"
          value={out}
          label="ထွက်ငွေ"
          errorcode={errorCode}
          errorMessage={errorMessage}
          onchange={(e) => setOut(e.target.value)}
        />
        <Input
          name="sell"
          type="number"
          placeholder="Enter your item price"
          value={sell}
          label="ရောင်းငွေ"
          errorcode={errorCode}
          errorMessage={errorMessage}
          onchange={(e) => setSell(e.target.value)}
        />

        <button
          type="submit"
          className="w-full h-[45px] bg-[#26a0d9] text-base text-white font-semibold rounded-md mt-5 hover:bg-[#26a0d962]"
        >
          Submit
        </button>
      </form>
      {showModal && (
        <CalendarModal
          popup={showModal}
          onChange={onChange}
          value={value}
          setShowModal={setShowModal}
        />
      )}
    </>
  );
};

export default MoneyForm;
