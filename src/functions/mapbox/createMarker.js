import mapboxgl from "mapbox-gl";
import decodeGeoHash from "../firebase/decodeGeoHash";

export function removeMarker(markers) {
  markers.forEach((marker) => marker.remove());
  markers.length = 0;
}

export function createMarker(
  buildingsData,
  selectedCategory,
  setCurrentClickedLocationState,
  setMarkersState
) {
  if (buildingsData === []) return;

  let mapArr = [];
  let filteredData;
  if (selectedCategory.value === "...View All...") {
    filteredData = buildingsData;
  } else {
    filteredData = buildingsData.filter(
      (building) => building.buildingCategory === selectedCategory.value
    );
  }

  filteredData.forEach((building) => {
    const markerElement = document.createElement("div");
    markerElement.className = "buildingMarker";
    markerElement.addEventListener("click", () => {
      setCurrentClickedLocationState(building);
    });
    const { latitude, longitude } = decodeGeoHash(building.geoHash);
    const buildingNumber = document.createTextNode(building.buildingNumber);
    markerElement.appendChild(buildingNumber);

    const marker = new mapboxgl.Marker({
      element: markerElement.cloneNode(true),
      anchor: "center",
    }).setLngLat([longitude, latitude]);
    mapArr.push(marker);
  });
  setMarkersState(mapArr);
}

export function addMarker(map, markers) {
  markers.forEach((marker) => marker.addTo(map));
}
