import React from "react";

import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../app/config/firebase";
import StoreElements from "./_components/StoreElements";
export const dynamic = "force-dynamic";
export const revalidate = 0;
const page = async () => {
  const Collection = collection(db, "store");
  const data = await getDocs(Collection);
  const storeData = data.docs.map((e) => ({ ...e.data(), id: e.id }));

  return <StoreElements storeData={storeData} />;
};

export default page;
