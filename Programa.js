var map = L.map('map').setView([4.633956, -74.072919], 16);
var marker = L.marker([4.633956, -74.072919]).addTo(map);
var marker = L.marker([4.633506, -74.073524]).addTo(map);
var marker = L.marker([4.633415, -74.073077]).addTo(map);
var marker = L.marker([4.633109, -74.071407]).addTo(map);
var marker = L.marker([4.633451, -74.072392]).addTo(map);
var marker = L.marker([4.633566, -74.071946]).addTo(map);
var polygon = L.polygon([
    [4.634548, -74.073686],
    [4.634206, -74.071771],
    [4.632543, -74.072125],
    [4.633238, -74.074013]
]).addTo(map);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);