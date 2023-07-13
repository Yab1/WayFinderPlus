// import mapboxgl from "mapbox-gl/dist/mapbox-gl";

// let start;
// let map;
// export default async function route(mapBox, origin, end) {
//   start = origin;
//   map = mapBox;
//   const query = await fetch(
//     `https://api.mapbox.com/directions/v5/mapbox/cycling/${start[0]},${start[1]};${end[0]},${end[1]}?steps=true&geometries=geojson&access_token=${mapboxgl.accessToken}`,
//     { method: "GET" }
//   );
//   const json = await query.json();
//   const data = json.routes[0];
//   const route = data.geometry.coordinates;
//   const geojson = {
//     type: "Feature",
//     properties: {},
//     geometry: {
//       type: "LineString",
//       coordinates: route,
//     },
//   };
//   if (map.getSource("route")) {
//     map.getSource("route").setData(geojson);
//   } else {
//     map.addLayer({
//       id: "route",
//       type: "line",
//       source: {
//         type: "geojson",
//         data: geojson,
//       },
//       layout: {
//         "line-join": "round",
//         "line-cap": "round",
//       },
//       paint: {
//         "line-color": "#3887be",
//         "line-width": 5,
//         "line-opacity": 0.75,
//       },
//     });
//   }
// }

// map.on("load", () => {
//   route(start);
//   map.addLayer({
//     id: "point",
//     type: "circle",
//     source: {
//       type: "geojson",
//       data: {
//         type: "FeatureCollection",
//         features: [
//           {
//             type: "Feature",
//             properties: {},
//             geometry: {
//               type: "Point",
//               coordinates: start,
//             },
//           },
//         ],
//       },
//     },
//     paint: {
//       "circle-radius": 10,
//       "circle-color": "#3887be",
//     },
//   });
// });
