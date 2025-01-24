// List of pubs JSON
const pubs = [
  {
    title: "Lucky Saint Pub",
    lat: 51.5,
    lon: -0.14,
    rating: 5,
    area: "Central London" 
  },
  {
    title: "Redemption Bar",
    lat: 51.5,
    lon: -0.13,
    rating: 3,
    area: "Shoreditch"
  },
  {
    title: "Club Soda Tasting Rooms",
    lat: 51.5,
    lon: -0.12,
    rating: 5,
    area: "Covent Garden"
  },
  {
    title: "Mikkeller Bar",
    lat: 51.5,
    lon: -0.07,
    rating: 4,
    area: "London Bridge"
  },
  {
    title: "Tonight Josephine",
    lat: 51.5,
    lon: -0.11,
    rating: 4,
    area: "Soho"
  }
];

// Initialize the map
const map = L.map('map');
map.setView([52.488, -0.89], 7);

// Add a tile layer
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

/**
 * Creates markers for each pub and binds popups
 * @param {Array} markerData - Array of pub objects with lat, lon, and rating
 */
function makeMarkers(markerData) {
  // Amend info for each pub
  markerData.forEach((pub) => { 
    const popupHtml = `
      <strong>${pub.title}</strong>
      <p>Rating: ${pub.rating}/5</p>
      <p>Area: ${pub.area}</p>
    `;
    const marker = L.marker([pub.lat, pub.lon]);
    marker.addTo(map);
    marker.bindPopup(popupHtml);

    // Code snippet from Leaflet amended coordinates for London
    map.fitBounds([
      [51.47, -0.09],
      [51.55, -0.14]
    ]);
  });
}

// Venue search bar
const venueCardTemplate = document.querySelector("[data-venue-template]"); // Links to the HTML template where the grids are hidden
const searchBar = document.querySelector("[data-search]"); // Links to the search bar input using data-search

searchBar.addEventListener("input", e => {
  const value = e.target.value.toUpperCase();

  // Get all the list items in the pubs list
  const thePubs = document.getElementById("pubs").getElementsByTagName("li");

          
  // Loop through all the pubs
  for (i = 0; i < thePubs.length; i++) {
  
      thePub = thePubs[i];
      // get the title text
      titleTag = thePub.getElementsByTagName('h5')[0];
      title = titleTag.textContent || titleTag.innerText;

      // make it upper case
      title = title.toUpperCase();

      // If the name includes our search term make it visible, else hide it
      if (title.includes(value) ) {
          thePub.style.display='';
          //thePub.style.visibility='visible';
        } else {
          thePub.style.display='none';
          //thePub.style.visibility='hidden';
      }
    

  }
});


// Create the markers for the pubs on the map
makeMarkers(pubs);

// Creation steps:
// 1. Defined an array of pubs using JSON, including title, location (lat/long), rating score, and area.
// 2. Defined a function for the markers, created a custom function to iterate over the pubs.
// 3. For each pub in the function, wrote HTML for it (line 38), applied it to the map (line 39), and bound the HTML into a popup (line 43).
// 4. Calling the function to create and display the markers on the map.


