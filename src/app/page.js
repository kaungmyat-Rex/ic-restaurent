import HomeElements from "./_reuse-components/HomeElements";
import {
  collection,
  getDocs,
  orderBy,
  query,
  Timestamp,
  where,
} from "firebase/firestore";
import { db } from "./config/firebase";

export default async function Home() {
  const data = await getDocs(
    query(collection(db, "store"), orderBy("count", "asc"))
  );

  const DescStoreData = data.docs.map((doc) => {
    return { id: doc.id, ...doc.data() };
  });

  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const todayDate = Timestamp.fromDate(today);
  const queryData = await getDocs(
    query(collection(db, "pickup"), where("date", ">=", todayDate))
  );

  const pickupData = queryData.docs.map((doc) => {
    return { id: doc.id, ...doc.data() };
  });
  console.log("🚀 ~ pickupData ~ pickupData:", pickupData);

  return (
    <main>
      <HomeElements
        DescStoreData={DescStoreData || []}
        pickupData={pickupData || []}
      />
    </main>
  );
}
