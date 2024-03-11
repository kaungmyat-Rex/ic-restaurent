import React from "react";
import EditMoneyElements from "./_components/EditMoneyElements";
import { db } from "@/app/config/firebase";
import { collection, doc, getDoc } from "firebase/firestore";
const page = async ({ searchParams }) => {
  const documentRef = doc(db, "money", searchParams?.itemId);
  const documentSnapshot = await getDoc(documentRef);
  const data = { ...documentSnapshot.data(), id: documentSnapshot.id };

  return <EditMoneyElements data={data} itemId={searchParams?.itemId} />;
};

export default page;
