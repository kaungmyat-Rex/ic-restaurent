import React from "react";
import PickupElements from "./_components/PickupElements";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { db } from "@/app/config/firebase";
export const dynamic = "force-dynamic";
export const revalidate = 0;
const page = async () => {
  const queryData = await getDocs(
    query(collection(db, "pickup"), orderBy("date", "desc"))
  );

  const pickupData = queryData.docs.map((doc) => {
    return { id: doc.id, ...doc.data() };
  });

  return <PickupElements pickupData={pickupData || []} />;
};

export default page;
