import React from "react";
import { db } from "@/app/config/firebase";
import { collection, doc, getDoc } from "firebase/firestore";
import EditDebtElements from "./_components/EditDebtElements";
const page = async ({ searchParams }) => {
  const documentRef = doc(db, "debt", searchParams?.itemId);
  const documentSnapshot = await getDoc(documentRef);
  const data = { ...documentSnapshot.data(), id: documentSnapshot.id };

  return <EditDebtElements data={data} itemId={searchParams?.itemId} />;
};

export default page;
