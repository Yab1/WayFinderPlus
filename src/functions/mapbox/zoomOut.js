export default function zoomOut(map) {
  if (map) {
    const currentZoom = map.getZoom();
    if (currentZoom > 15.5) {
      const newZoom = currentZoom - 0.5;
      map.flyTo({ zoom: newZoom });
    }
  }
}
