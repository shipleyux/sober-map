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

    //L.marker([51.522220250000004,-0.1441884678939735]).addTo(map);
    // copy these 
 // lucky saint pub 	51.522220250000004,-0.1441884678939735

 //Defining a function
 function makeMarkers(markerData) {
    //do stuff to each pub.
    markerData.forEach((pub) => { 
        L.marker([pub.lat, pub.lon]).addTo(map);
    })
 }
 makeMarkers(pubs)