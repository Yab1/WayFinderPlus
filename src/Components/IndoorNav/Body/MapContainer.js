// React
import { useEffect } from "react";

// MapBox
import mapboxgl from "mapbox-gl/dist/mapbox-gl";

// MUI Components
import Card from "@mui/material/Card";

const MapContainer = () => {
  useEffect(() => {
    mapboxgl.accessToken =
      "pk.eyJ1IjoiYWZyb2hhYmVzaGEiLCJhIjoiY2xnb3F0cDYzMGYzNjNlb2d2dXhtdzRqbSJ9.JW2kyDZjoOWoXVPG5Giw7g";
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/outdoors-v12",
      center: [39.29039343419677, 8.563261132878523],
      zoom: 15.5,
      attributionControl: false,
    });

    return () => {
      map.remove();
    };
  }, []);

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
