import { useState, createContext } from "react";

export const MapMetaDataContext = createContext();

export default function MapMetaDataContextProvider({ children }) {
  const [map, setMap] = useState(null);

  function handleMap(map) {
    setMap(map);
  }
  const value = {
    map,
    handleMap,
  };
  return (
    <MapMetaDataContext.Provider value={value}>
      {children}
    </MapMetaDataContext.Provider>
  );
}
