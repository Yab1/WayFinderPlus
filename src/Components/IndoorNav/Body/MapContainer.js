// React
import { useEffect, useContext, useRef } from "react";

// Contexts
import { MapMetaDataContext } from "../../../Context/mapMetaDataContext";

// MapBox
import mapboxgl from "mapbox-gl/dist/mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

// MUI Components
import Card from "@mui/material/Card";

const MapContainer = () => {
  const { currentMap, handleMap } = useContext(MapMetaDataContext);

  useEffect(() => {
    mapboxgl.accessToken =
      "pk.eyJ1IjoiYWZyb2hhYmVzaGEiLCJhIjoiY2xnb3F0cDYzMGYzNjNlb2d2dXhtdzRqbSJ9.JW2kyDZjoOWoXVPG5Giw7g";
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/outdoors-v12",
      center: [currentMap[0].center.latitude, currentMap[0].center.longitude],
      zoom: 15.5,
      attributionControl: false,
    });
    handleMap(map);

    return () => {
      map.remove();
    };
  }, [currentMap]);

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
