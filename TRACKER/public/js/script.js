const socket = io();

if (navigator.geolocation) {
  navigator.geolocation.watchPosition(
    (position) => {
      const { latitude, longitude } = position.coords;
      console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
      socket.emit("send-location", { latitude, longitude });
    },
    (error) => {
      console.error(`Error: ${error.message}`);
    },
    {
      enableHighAccuracy: true,
      maximumAge: 0,
      timeout: 5000,
    }
  );
} else {
  console.log("Geolocation is not supported by this browser.");
}

const map = L.map("map").setView([0, 0], 16);
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
}).addTo(map);

const markers = {}; // Define the markers object

socket.on("receive-location", (data) => {
  const { id, latitude, longitude } = data;
  map.setView([latitude, longitude]);
  if (markers[id]) {
    markers[id].setLatLng([latitude, longitude]); // Corrected method name
  } else {
    markers[id] = L.marker([latitude, longitude]).addTo(map);
  }
});
socket.on("user-disconnected", (id)=> {
    if(markers[id]){
        map.removeLayer(markers[id]);
        delete markers[id];
    }
})