// React
import { useEffect, useContext, useState } from "react";

// Contexts
import { StateControllerContext } from "../../../Context/stateControllerContext";
import { MapMetaDataContext } from "../../../Context/mapMetaDataContext";
import { BuildingsContext } from "../../../Context/buildingsContext";

// Functions
import createMarker from "../../../functions/createMarker";

// MapBox
import mapboxgl from "mapbox-gl/dist/mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

// MUI Components
import Card from "@mui/material/Card";

const MapContainer = () => {
  const { setCurrentClickedLocationState } = useContext(StateControllerContext);
  const { map, handleMap } = useContext(MapMetaDataContext);
  const { buildingsData } = useContext(BuildingsContext);

  useEffect(() => {
    mapboxgl.accessToken =
      "pk.eyJ1IjoiYWZyb2hhYmVzaGEiLCJhIjoiY2xnb3F0cDYzMGYzNjNlb2d2dXhtdzRqbSJ9.JW2kyDZjoOWoXVPG5Giw7g";
    const mapBox = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/outdoors-v12",
      center: [39.29039343419677, 8.563261132878523],
      zoom: 15.5,
      attributionControl: false,
    });
    handleMap(mapBox);

    return () => {
      mapBox.remove();
    };
  }, []);

  useEffect(() => {
    if (map && buildingsData) {
      createMarker(map, buildingsData, setCurrentClickedLocationState);
    }
  }, [buildingsData, map]);

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
