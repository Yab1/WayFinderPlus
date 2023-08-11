import { useState, createContext, useEffect } from "react";
import useFetch from "../hooks/useFetch";

export const StateControllerContext = createContext();

export default function StateControllerContextProvider({ children }) {
  const [userLocation, setUserLocation] = useState("");
  const [destinations, setDestinations] = useState("");
  const [startPoint, setStartPoint] = useState("");
  const [currentClickedLocation, setCurrentClickedLocation] = useState(null);
  const [showCard, setShowCard] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState({
    value: "...View All...",
    key: 17,
  });
  const [markers, setMarkers] = useState([]);
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
  const setShowCardState = () => {
    setShowCard(!showCard);
  };
  const setSelectedCategoryState = (category) => {
    setSelectedCategory(category);
  };

  const setMarkersState = (data) => {
    setMarkers(data);
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
    selectedCategory,
    markers,
    routes,
    currentClickedLocation,
    setUserLocationState,
    setDestinationsState,
    setStartPointState,
    setCurrentClickedLocationState,
    showCard,
    setShowCardState,
    setSelectedCategoryState,
    setMarkersState,
  };

  return (
    <StateControllerContext.Provider value={value}>
      {children}
    </StateControllerContext.Provider>
  );
}
