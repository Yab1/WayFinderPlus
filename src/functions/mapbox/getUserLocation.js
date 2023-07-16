import mapboxgl from "mapbox-gl";

export default function getUserLocation(map, setUserLocationState) {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setUserLocationState([latitude, longitude]);
        addMarkerToMap(map, latitude, longitude);
      },
      (error) => {
        alert("Error getting user location:", error);
      }
    );
  } else {
    alert("Geolocation is not supported by this browser.");
  }
}

let userMarker = null;
const addMarkerToMap = (map, latitude, longitude) => {
  if (map) {
    if (userMarker) {
      userMarker.remove();
    }
    const markerElement = document.createElement("div");
    markerElement.className = "userMarker";
    userMarker = new mapboxgl.Marker({
      element: markerElement,
      anchor: "center",
    })
      .setLngLat([longitude, latitude])
      .addTo(map);
    map.flyTo({ center: [longitude, latitude], zoom: 16 });
  }
};
