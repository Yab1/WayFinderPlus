// React
import { useEffect, useContext, useState } from "react";

// Contexts
import { StateControllerContext } from "../../../Context/stateControllerContext";
import { MapMetaDataContext } from "../../../Context/mapMetaDataContext";
import { BuildingsContext } from "../../../Context/buildingsContext";

// Functions
import {
  removeMarker,
  createMarker,
  addMarker,
} from "../../../functions/mapbox/createMarker";

// MUI Components
import Card from "@mui/material/Card";

const MapContainer = () => {
  const {
    selectedCategory,
    markers,
    setCurrentClickedLocationState,
    setMarkersState,
  } = useContext(StateControllerContext);
  const { map, handleMap } = useContext(MapMetaDataContext);
  const { buildingsData } = useContext(BuildingsContext);

  useEffect(() => {
    if (map && buildingsData) {
      removeMarker(markers);
      createMarker(
        buildingsData,
        selectedCategory,
        setCurrentClickedLocationState,
        setMarkersState
      );
    }
  }, [buildingsData, selectedCategory, map]);

  useEffect(() => {
    addMarker(map, markers);
  }, [markers]);

  return (
    <Card
      variant="outlined"
      sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        mx: "auto",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div id="map"></div>
    </Card>
  );
};

export default MapContainer;
