"use client";
import React from "react";
import { TiWarning } from "react-icons/ti";
import {
  collection,
  addDoc,
  doc,
  updateDoc,
  getDocs,
  deleteDoc,
} from "firebase/firestore";
import { db } from "@/app/config/firebase";
import { useRouter } from "next/navigation";

const DeleteAllModal = ({ popup, setPopup }) => {
  const router = useRouter();
  const collectionRef = collection(db, "money");

  const handleDeleteAllData = async () => {
    await getDocs(collectionRef)
      .then((querySnapshot) => {
        const deletePromises = querySnapshot.docs.map((doc) => {
          return deleteDoc(doc.ref);
        });

        return Promise.all(deletePromises);
      })
      .then(() => {
        console.log("All documents deleted successfully from the collection.");
        setPopup(false);
        router.refresh();
      })
      .catch((error) => {
        console.error("Error deleting documents: ", error);
      });
  };

  const modelClass = `modal-delete ${
    popup ? "open-modal-delete" : ""
  } fixed w-full h-full left-0 top-0 z-20 flex justify-center items-center`;
  const modelOverlay = `modal-overlay-delete absolute w-full h-full left-0 top-0`;
  const modelMain = `modal-main-delete ${
    popup ? "open-modal-main-delete" : ""
  } absolute max-w-[500px] md:max-w-[900px] bg-[#2d2f36] left-2 sm:left-[15%] right-2 rounded-md shadow-md p-5`;
  return (
    <div className={modelClass}>
      <div className={modelOverlay} onClick={() => setPopup(false)} />
      <div className={modelMain}>
        <div className="flex flex-col">
          <div className="flex flex-col justify-center items-center">
            <TiWarning className="text-yellow-400" size={40} />
            <h4 className="text-white font-semibold">
              This will be deleted all data
            </h4>
            <p className="text-gray-300">(you should delete after one month)</p>
            <div className="flex justify-center items-center gap-x-4 mt-5">
              <button
                onClick={() => handleDeleteAllData()}
                className="bg-[#26a0d9] text-white font-semibold rounded-md px-4 py-2"
              >
                Delete
              </button>
              <button
                onClick={() => {
                  setPopup(false);
                }}
                className="bg-[#618394] text-white font-semibold rounded-md px-4 py-2"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteAllModal;
