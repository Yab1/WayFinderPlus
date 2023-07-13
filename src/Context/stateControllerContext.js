import { useState, createContext, useRef, useEffect } from "react";
import useFetch from "../hooks/useFetch";

export const StateControllerContext = createContext();

export default function StateControllerContextProvider({ children }) {
  const [userLocation, setUserLocation] = useState("");
  const [destinations, setDestinations] = useState("");
  const [startPoint, setStartPoint] = useState("");
  const [currentClickedLocation, setCurrentClickedLocation] = useState("");
  const [routes, setRoutes] = useState("");
  const [url, setUrl] = useState("");

  const setUserLocationState = (location) => {
    setUserLocation({ latitude: location[0], longitude: location[1] });
  };

  const setDestinationsState = (newDestinations) => {
    setDestinations(newDestinations);
  };

  const setStartPointState = (point) => {
    setStartPoint(point);
  };

  const setCurrentClickedLocationState = (building) => {
    setCurrentClickedLocation(building);
  };

  useEffect(() => {
    if (destinations) {
      // setUrl(
      //   `https://api.mapbox.com/directions/v5/mapbox/walking/${start[0]},${start[1]};${destinations[0]},${destinations[1]}?steps=true&geometries=geojson&access_token=pk.eyJ1IjoiYWZyb2hhYmVzaGEiLCJhIjoiY2xnb3F0cDYzMGYzNjNlb2d2dXhtdzRqbSJ9.JW2kyDZjoOWoXVPG5Giw7g`
      // );
    }
  }, [startPoint, destinations]);

  const { promise } = useFetch(url);

  useEffect(() => {
    if (promise) {
      promise.then((data) => setRoutes(data.routes[0].geometry.coordinates));
    }
  }, [promise]);

  const value = {
    userLocation,
    destinations,
    startPoint,
    routes,
    currentClickedLocation,
    setUserLocationState,
    setDestinationsState,
    setStartPointState,
    setCurrentClickedLocationState,
  };

  return (
    <StateControllerContext.Provider value={value}>
      {children}
    </StateControllerContext.Provider>
  );
}
