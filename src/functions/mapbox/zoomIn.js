export default function zoomIn(map) {
  if (map) {
    const currentZoom = map.getZoom();
    const newZoom = currentZoom + 0.5;
    map.setZoom(newZoom);
  }
}
