import { useState, useEffect, createContext } from "react";
import mapboxgl from "mapbox-gl";
// import { app } from "../Services/Firebase/connection";
// import {
//   getFirestore,
//   collection,
//   onSnapshot,
//   query,
//   orderBy,
// } from "firebase/firestore";

export const MapMetaDataContext = createContext();

export default function MapMetaDataContextProvider({ children }) {
  // const db = getFirestore(app);
  const [metadata, setMetadata] = useState([
    {
      name: "Adama Science And Technology",
      about: "",
      center: {
        latitude: "",
        longitude: "",
      },
    },
  ]);
  const [map, setMap] = useState(null);
  const [userLocation, setUserLocation] = useState(null);
  const [currentMap, setCurrentMap] = useState([
    {
      name: "Adama Science And Technology",
      about: "",
      center: {
        latitude: 39.29039343419677,
        longitude: 8.563261132878523,
      },
    },
  ]);
  // useEffect(() => {
  //   const colRef = collection(db, "Locations", `${currentMap}`);
  //   const queuedRef = query(colRef, orderBy("buildingNumber"));
  //   const unsubscribe = onSnapshot(queuedRef, (snapshot) => {
  //     let data = [];
  //     snapshot.docs.forEach((doc) => {
  //       data.push({ ...doc.data(), id: doc.id });
  //     });
  //     setCurrentMap(data);
  //   });
  //   return () => unsubscribe();
  // }, []);

  // useEffect(() => {
  //   addMarkerToMap();
  // }, [userLocation]);

  function handleMap(map) {
    setMap(map);
  }

  function getUserLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          console.log(latitude, longitude);
          addMarkerToMap(latitude, longitude);
        },
        (error) => {
          alert("Error getting user location:", error);
        }
      );
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }

  let userMarker = null;
  const addMarkerToMap = (latitude, longitude) => {
    if (map) {
      if (userMarker) {
        userMarker.remove();
      }
      const markerElement = document.createElement("div");
      markerElement.className = "userMarker";
      userMarker = new mapboxgl.Marker({
        element: markerElement,
        anchor: "center",
      })
        .setLngLat([longitude, latitude])
        .addTo(map);
      map.setCenter([longitude, latitude]);
      map.setZoom(19);
    }
  };

  function zoomIn() {
    if (map) {
      const currentZoom = map.getZoom();
      const newZoom = currentZoom + 0.5;
      map.setZoom(newZoom);
    }
  }
  function zoomOut() {
    if (map) {
      const currentZoom = map.getZoom();
      if (currentZoom > 15.5) {
        const newZoom = currentZoom - 0.5;
        map.setZoom(newZoom);
      }
    }
  }

  const value = {
    metadata,
    currentMap,
    getUserLocation,
    zoomIn,
    zoomOut,
    handleMap,
  };
  return (
    <MapMetaDataContext.Provider value={value}>
      {children}
    </MapMetaDataContext.Provider>
  );
}
