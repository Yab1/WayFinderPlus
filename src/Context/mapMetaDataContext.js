import { useState, useEffect, createContext, useRef } from "react";
import { getFirestore, collection, onSnapshot } from "firebase/firestore";

// Firebase
import { app } from "../Services/firebaseConnection";
import decodeGeoHash from "../functions/firebase/decodeGeoHash";

// Mapbox
import mapboxgl from "mapbox-gl/dist/mapbox-gl";

export const MapMetaDataContext = createContext();

export default function MapMetaDataContextProvider({ children }) {
  const [map, setMap] = useState(null);
  const [metaData, setMetaData] = useState(null);

  const db = getFirestore(app);
  useEffect(() => {
    const colRef = collection(db, "Locations");
    const unsubscribe = onSnapshot(colRef, (snapshot) => {
      let data = [];
      snapshot.docs.forEach((doc) => {
        data.push({ ...doc.data(), id: doc.id });
      });
      setMetaData(data);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (metaData) {
      const { latitude, longitude } = decodeGeoHash(metaData[0].center);
      mapboxgl.accessToken = process.env.REACT_APP_MAP_BOX_ACCESS_TOKEN;
      const mapBox = new mapboxgl.Map({
        container: "map",
        style: "mapbox://styles/mapbox/outdoors-v12",
        center: [longitude, latitude],
        zoom: 15.5,
        attributionControl: false,
      });
      setMap(mapBox);

      return () => {
        mapBox.remove();
      };
    }
  }, [metaData]);

  function resetView() {
    if (map && metaData) {
      const { latitude, longitude } = decodeGeoHash(metaData[0].center);
      map.flyTo({ center: [longitude, latitude], zoom: 15.5 });
    }
  }

  const value = {
    map,
    metaData,
    resetView,
  };
  return (
    <MapMetaDataContext.Provider value={value}>
      {children}
    </MapMetaDataContext.Provider>
  );
}
