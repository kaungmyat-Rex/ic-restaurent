import React from "react";
import EditStoreElements from "./_components/EditStoreElements";
import { db } from "@/app/config/firebase";
import { collection, doc, getDoc } from "firebase/firestore";
const page = async ({ searchParams }) => {
  const documentRef = doc(db, "store", searchParams?.itemId);
  const documentSnapshot = await getDoc(documentRef);
  const data = { ...documentSnapshot.data(), id: documentSnapshot.id };

  return <EditStoreElements data={data} itemId={searchParams?.itemId} />;
};

export default page;
