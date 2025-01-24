// List of pubs JSON
const pubs = [
  
    {
      title: "Albany Pub",
      lat: 51.5245,
      lon: -0.1443,
      rating: 4,
      area: "Central London"
    },
    {
      title: "Badger Badger",
      lat: 51.47903,
      lon: -0.02631,
      rating: 4,
      area: "Deptford"
    },
    {
      title: "Claridge's Bar",
      lat: 51.5125,
      lon: -0.1483,
      rating: 5,
      area: "Mayfair"
    },
    {
      title: "Club Soda Tasting Room",
      lat: 51.5120,
      lon: -0.1230,
      rating: 5,
      area: "Covent Garden"
    },
    {
      title: "Duck and Waffle",
      lat: 51.5161,
      lon: -0.0839,
      rating: 4,
      area: "Central London"
    },
    {
      title: "Empress Pub",
      lat: 51.5401,
      lon: -0.0329,
      rating: 4,
      area: "Hackney"
    },
    {
      title: "Fox and Anchor",
      lat: 51.5199,
      lon: -0.1023,
      rating: 4,
      area: "Farringdon"
    },
    {
      title: "Gold",
      lat: 51.5147,
      lon: -0.1991,
      rating: 4,
      area: "Notting Hill"
    },
    {
      title: "Hawksmoor Bar Wood Wharf",
      lat: 51.5047,
      lon: -0.0186,
      rating: 5,
      area: "Canary Wharf"
    },
    {
      title: "Island, The",
      lat: 51.5359,
      lon: -0.2214,
      rating: 4,
      area: "Kensal Rise"
    },
    {
      title: "Lucky Saint Pub",
      lat: 51.5194,
      lon: -0.1492,
      rating: 5,
      area: "Central London"
    },
    {
      title: "Redemption Bar",
      lat: 51.5234,
      lon: -0.0787,
      rating: 3,
      area: "Shoreditch"
    },
    {
      title: "Tonight Josephine",
      lat: 51.5138,
      lon: -0.1298,
      rating: 4,
      area: "Soho"
    },
    {
      title: "North Star",
      lat: 51.5148,
      lon: -0.3041,
      rating: 4,
      area: "Ealing"
    },
    {
      title: "Ozone Coffee Roasters",
      lat: 51.5261,
      lon: -0.0875,
      rating: 4,
      area: "Shoreditch"
    },
    {
      title: "Prince of Wales",
      lat: 51.5345,
      lon: -0.1414,
      rating: 4,
      area: "Camden"
    },
    {
      title: "Q Shoreditch",
      lat: 51.5238,
      lon: -0.0815,
      rating: 5,
      area: "Shoreditch"
    },
    {
      title: "Seed Library",
      lat: 51.5233,
      lon: -0.0805,
      rating: 4,
      area: "Shoreditch"
    },
    {
      title: "Understudy",
      lat: 51.5066,
      lon: -0.1135,
      rating: 3,
      area: "Southbank"
    },
    
    {
      title: "Vins Bar",
      lat: 51.5688,
      lon: -0.0663,
      rating: 4,
      area: "East London"
    },
    {
      title: "Zephyr",
      lat: 51.5231,
      lon: -0.0736,
      rating: 5,
      area: "London"
    },
    {
      title: "John Snow Pub",
      lat: 51.5131,
      lon: -0.1379,
      rating: 4,
      area: "Soho"
    },
    {
      title: "Kenzo Bar",
      lat: 51.4842,
      lon: -0.1688,
      rating: 5,
      area: "Chelsea"
    },
    {
      title: "Lady Mildmay",
      lat: 51.5462,
      lon: -0.0924,
      rating: 4,
      area: "East London"
    },
    {
      title: "Madison Bar",
      lat: 51.5136,
      lon: -0.0946,
      rating: 3,
      area: "St Paul's"
    },
    {
      title: "Willian IV",
      lat: 51.5461,
      lon: -0.0322,
      rating: 4,
      area: "Hackney"
    },
    {
      title: "XOYO",
      lat: 51.5266,
      lon: -0.0878,
      rating: 3,
      area: "Shoreditch"
    },
    {
      title: "Yorkshire Grey",
      lat: 51.5259,
      lon: -0.1092,
      rating: 4,
      area: "North London"
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

      // If the name includes first letter of search term make it visible, else hide it
      if (title.startsWith(value) ) {
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


