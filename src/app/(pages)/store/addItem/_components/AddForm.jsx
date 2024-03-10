"use client";
import Input from "@/app/_reuse-components/Input";

import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "@/app/config/firebase";
import validate from "@/app/hook/useValidate";
import { useRouter } from "next/navigation";
const AddForm = () => {
  const [name, setName] = useState("");
  const [itemCount, setItemCount] = useState("");
  const [price, setPrice] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [errorCode, setErrorCode] = useState("");
  const itemAddCollection = collection(db, "store");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const [error, errorCode] = validate(name, itemCount, price);

    if (error === "") {
      try {
        await addDoc(itemAddCollection, {
          item: name,
          count: Number(itemCount),
          price: Number(price),
        });

        router.back();
        router.refresh();
      } catch (error) {
        console.log(error);
      }
    } else {
      setErrorMessage(error);
      setErrorCode(errorCode);
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
        placeholder="Enter your item name"
        value={name}
        label="Item Name"
        errorcode={errorCode}
        errorMessage={errorMessage}
        onchange={(e) => setName(e.target.value)}
      />
      <Input
        name="count"
        type="number"
        placeholder="Enter your item count"
        value={itemCount}
        label="Item Count"
        errorcode={errorCode}
        errorMessage={errorMessage}
        onchange={(e) => setItemCount(e.target.value)}
      />
      <Input
        name="price"
        type="number"
        placeholder="Enter your item price"
        value={price}
        label="Item Price"
        errorcode={errorCode}
        errorMessage={errorMessage}
        onchange={(e) => setPrice(e.target.value)}
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

export default AddForm;
