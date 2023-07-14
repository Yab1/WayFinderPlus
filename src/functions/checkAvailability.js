export default function checkAvailability(buildingData, category) {
  if (category.value === "...View All...") return true;
  return buildingData.some(
    (building) => building.buildingCategory === category.value
  );
}
