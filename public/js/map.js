mapboxgl.accessToken = mapToken;

let coords = listing.geometry.coordinates;

// If it's accidentally a string (for safety), parse it
if (typeof coords === "string") {
  try {
    coords = JSON.parse(coords);
  } catch (err) {
    console.error("Invalid coordinate format:", coords);
  }
}

console.log("Final coordinates array:", coords);

const map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/standard",
  center: coords, // [lng, lat]
  zoom: 10,
});

new mapboxgl.Marker({color : "red"})
  .setLngLat(coords)
  .setPopup(new mapboxgl.Popup({offset: 25})
    .setHTML(`<h4> ${listing.location}</h4><p> Exact location provided after booking</p>`)
)
    .addTo(map);
  