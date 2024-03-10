import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA69OLqTf165xjPg4DXcaNV8S7cIL9Nc5Q",
  authDomain: "ic-restaurent.firebaseapp.com",
  projectId: "ic-restaurent",
  storageBucket: "ic-restaurent.appspot.com",
  messagingSenderId: "641921286101",
  appId: "1:641921286101:web:b44a164cbf480432cfc75c",
  measurementId: "G-8PFRFWQ5NW",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
