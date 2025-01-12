//List pubs JSON
const pubs = [
    {
        title: "Lucky Saint Pub",
        lat: 51.5,
        lon: -0.14,
        rating: 5,
    },
    {
        title: "Redemption Bar",
        lat: 51.5,
        lon: -0.13,
        rating: 3,
    },
    {
        title: "Club Soda Tasting Rooms",
        lat: 51.5,
        lon: -0.12,
        rating: 5,
    },

    {
        title: "Mikkeller Bar",
        lat: 51.5,
        lon: -0.07,
        rating: 4,
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
    //amends info for each pub
    markerData.forEach((pub) => { 
        const popupHtml = `
        <strong>${pub.title}</strong>
        <p>Rating:${pub.rating}/5 </p>
        `
        const marker =  L.marker([pub.lat, pub.lon]);
        marker.addTo(map);
        marker.bindPopup(popupHtml);

    })
 }
 makeMarkers(pubs)
//Creation steps
 //1.Define array of pubs using json, included title, location (lat/long) and rating score.
 //2.defined function for the markers, created my own function to iterate over the pubs.
 //3.for each pub in the function wrote html for it line 38 apply to map 39 bind html into pop up
 //line 43 calling the function