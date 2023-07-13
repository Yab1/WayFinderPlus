import mapboxgl from "mapbox-gl";
import decodeGeoHash from "../Services/Firebase/decodeGeoHash";

export default function createMarker(
  map,
  collections,
  setCurrentClickedLocationState
) {
  collections.map((collection) => {
    const { latitude, longitude } = decodeGeoHash(collection.geoHash);
    const markerElement = document.createElement("div");
    markerElement.className = "buildingMarker";
    markerElement.id = collection.id;
    markerElement.addEventListener("click", (e) => {
      setCurrentClickedLocationState(collection);
    });
    const buildingNumber = document.createTextNode(collection.buildingNumber);
    markerElement.appendChild(buildingNumber);
    new mapboxgl.Marker({
      element: markerElement,
      anchor: "center",
    })
      .setLngLat([longitude, latitude])
      .addTo(map);
  });
}
