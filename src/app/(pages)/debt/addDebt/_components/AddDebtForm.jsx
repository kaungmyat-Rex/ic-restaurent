"use client";
import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "@/app/config/firebase";
import { useRouter } from "next/navigation";
import Input from "@/app/_reuse-components/Input";

const AddDebtForm = () => {
  const [creditor, setCreditor] = useState("");
  const [debtAmount, setDebtAmount] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [errorCode, setErrorCode] = useState("");
  const debtAddCollection = collection(db, "debt");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addDoc(debtAddCollection, {
        Creditor: creditor,
        debtAmount: Number(debtAmount),
      });

      router.back();
      router.refresh();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-3 mt-20 flex flex-col justify-center items-center"
    >
      <Input
        name="name"
        type="text"
        placeholder="Enter your အကြွေးရှင် name"
        value={creditor}
        label="အကြွေးရှင် name"
        errorcode={errorCode}
        errorMessage={errorMessage}
        onchange={(e) => setCreditor(e.target.value)}
      />
      <Input
        name="count"
        type="number"
        placeholder="Enter your item count"
        value={debtAmount}
        label="အကြွေး Amount"
        errorcode={errorCode}
        errorMessage={errorMessage}
        onchange={(e) => setDebtAmount(e.target.value)}
      />

      <button
        type="submit"
        className="w-full h-[45px] bg-[#26a0d9] text-base text-white font-semibold rounded-md mt-5 hover:bg-[#26a0d962]"
      >
        Submit
      </button>
    </form>
  );
};

export default AddDebtForm;
