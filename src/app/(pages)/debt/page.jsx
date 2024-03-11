import React from "react";
import DebtElements from "./_components/DebtElements";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/app/config/firebase";
export const dynamic = "force-dynamic";
export const revalidate = 0;
const page = async () => {
  const Collection = collection(db, "debt");
  const data = await getDocs(Collection);
  const DebtData = data.docs.map((e) => ({ ...e.data(), id: e.id }));

  return <DebtElements DebtData={DebtData || []} />;
};

export default page;
