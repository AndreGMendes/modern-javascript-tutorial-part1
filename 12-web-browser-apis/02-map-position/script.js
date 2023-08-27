const map = L.map('map').setView([0, 0], 2);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

const marker = L.marker([0, 0]).addTo(map);


navigator.geolocation.getCurrentPosition(function (position) {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;

  marker.setLatLng([lat, lng]).update();
  map.setView([lat, lng], 13);

  console.log(marker.getLatLng())
  marker.bindPopup('<strong>Hello World</strong> <br> This is my location');
});



