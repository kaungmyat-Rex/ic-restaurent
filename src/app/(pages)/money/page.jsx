import React from "react";
import MoneyElements from "./_components/MoneyElements";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { db } from "@/app/config/firebase";
export const dynamic = "force-dynamic";
export const revalidate = 0;
const page = async () => {
  const queryData = await getDocs(
    query(collection(db, "money"), orderBy("date", "desc"))
  );

  const moneyData = queryData.docs.map((doc) => {
    return { id: doc.id, ...doc.data() };
  });

  const totalProfit = moneyData.reduce(
    (acc, item) => acc + (item.profit || 0),
    0
  );

  return (
    <MoneyElements moneyData={moneyData || []} totalProfit={totalProfit || 0} />
  );
};

export default page;
