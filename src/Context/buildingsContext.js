import { createContext, useState, useEffect } from "react";
import { app } from "../Services/firebaseConnection";
import {
  getFirestore,
  collection,
  onSnapshot,
  query,
  orderBy,
} from "firebase/firestore";

export const BuildingsContext = createContext();

export default function BuildingsContextProvider({ children }) {
  const db = getFirestore(app);
  const [buildingsData, setBuildingsData] = useState([]);
  useEffect(() => {
    const colRef = collection(
      db,
      "Locations",
      "Adama Science And Technology",
      "BuildingsData"
    );
    const queuedRef = query(colRef, orderBy("buildingNumber"));
    const unsubscribe = onSnapshot(queuedRef, (snapshot) => {
      let data = [];
      snapshot.docs.forEach((doc) => {
        data.push({ ...doc.data(), id: doc.id });
      });
      setBuildingsData(data);
    });
    return () => unsubscribe();
  }, []);

  const value = { buildingsData };
  return (
    <BuildingsContext.Provider value={value}>
      {children}
    </BuildingsContext.Provider>
  );
}
