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
import { MapSharp } from "@mui/icons-material";

const MapContainer = () => {
  const {
    selectedCategory,
    markers,
    setCurrentClickedLocationState,
    setShowCardState,
    setMarkersState,
  } = useContext(StateControllerContext);
  const { map, handleMap } = useContext(MapMetaDataContext);
  const { buildingsData } = useContext(BuildingsContext);

  useEffect(() => {
    const handleMarkerClick = (event) => {
      const clickedMarker = event.target.closest(".buildingMarker");
      if (clickedMarker) {
        const currentBuilding = buildingsData.filter(
          (building) => building.id === clickedMarker.id
        );
        setShowCardState();
        setCurrentClickedLocationState(...currentBuilding);
      }
    };
    if (map) {
      const mapBox = document.querySelector("#map");
      mapBox.addEventListener("click", (event) => handleMarkerClick(event));
      return () => {
        mapBox.removeEventListener("click", (event) =>
          handleMarkerClick(event)
        );
      };
    }
  }, [map]);

  useEffect(() => {
    if (map && buildingsData) {
      removeMarker(markers);
      createMarker(buildingsData, selectedCategory, setMarkersState);
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
