mapboxgl.accessToken =
  "pk.eyJ1IjoiZGRpYXo4NiIsImEiOiJja3RrZ2Rqd3kxbGs0MzBudHBzZGE3ZjVsIn0.JvHu5nk1wC_ngPgBwFpV6A";

// Code to create a new map
var map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/ddiaz86/cktlph4ol05pe17mzxwx6e1ub",
  center: [-71.104081, 42.3655541],
  pitch: 40, // Map tilt
  bearing: -20,
  zoom: 14,
});

//Adding the styles for "marker" located in styles.css
var el = document.createElement("div");
el.className = "marker";

// Create a marker
let marker = new mapboxgl.Marker(el)
  .setLngLat([-71.092761, 42.357575])
  .addTo(map);

//Created a loop to have the marker run through busStops
var counter = 0;
function move() {
  setTimeout(() => {
    if (counter >= busStops.length) return;
    marker.setLngLat(busStops[counter]);
    counter++;
    move();
  }, 2000);
}

//The bus stop coordinates on Mass Ave between MIT and Harvard
const busStops = [
  [-71.093729, 42.359244],
  [-71.094915, 42.360175],
  [-71.0958, 42.360698],
  [-71.099558, 42.362953],
  [-71.103476, 42.365248],
  [-71.106067, 42.366806],
  [-71.108717, 42.368355],
  [-71.110799, 42.369192],
  [-71.113095, 42.370218],
  [-71.115476, 42.372085],
  [-71.117585, 42.373016],
  [-71.118625, 42.374863],
];
