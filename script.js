//List pubs JSON
const pubs = [
    {
        title: "Lucky Saint Pub",
        lat: 51.5,
        lon: -0.14,
        rating: 3,
    },
    {
        title: "Redemption Bar",
        lat: 51.5,
        lon: -0.13,
        rating: 3,
    }

]

    // Initialize the map
    const map = L.map('map');
    map.setView([52.488, -0.89], 7);

    // Add a tile layer
    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);


 //Defining a function
 function makeMarkers(markerData) {
    //do stuff to each pub.
    markerData.forEach((pub) => { 
        const marker =  L.marker([pub.lat, pub.lon]);
        marker.addTo(map);
        marker.bindPopup("Hello");

    })
 }
 makeMarkers(pubs)