/*jslint browser */
/*global bootstrap, document */
/*global L, document */

const pubs = [
    {
        area: "Central London",
        lat: 51.5245,
        lon: -0.1443,
        soberPoints: 4,
        title: "Albany Pub"
    },
    {
        area: "Deptford",
        lat: 51.47903,
        lon: -0.02631,
        soberPoints: 4,
        title: "Badger Badger"
    },
    {
        area: "Mayfair",
        lat: 51.5125,
        lon: -0.1483,
        soberPoints: 5,
        title: "Claridge's Bar"
    },
    {
        area: "Covent Garden",
        lat: 51.512,
        lon: -0.123,
        soberPoints: 5,
        title: "Club Soda Tasting Room"
    },
    {
        area: "Central London",
        lat: 51.5161,
        lon: -0.0839,
        soberPoints: 4,
        title: "Duck and Waffle"
    },
    {
        area: "Hackney",
        lat: 51.5401,
        lon: -0.0329,
        soberPoints: 4,
        title: "Empress Pub"
    },
    {
        area: "Farringdon",
        lat: 51.5199,
        lon: -0.1023,
        soberPoints: 4,
        title: "Fox and Anchor"
    },
    {
        area: "Notting Hill",
        lat: 51.5147,
        lon: -0.1991,
        soberPoints: 4,
        title: "Gold"
    },
    {
        area: "Canary Wharf",
        lat: 51.5047,
        lon: -0.0186,
        soberPoints: 5,
        title: "Hawksmoor Bar Wood Wharf"
    },
    {
        area: "Kensal Rise",
        lat: 51.5359,
        lon: -0.2214,
        soberPoints: 4,
        title: "Island, The"
    },
    {
        area: "Central London",
        lat: 51.5194,
        lon: -0.1492,
        soberPoints: 5,
        title: "Lucky Saint Pub"
    },
    {
        area: "Shoreditch",
        lat: 51.5234,
        lon: -0.0787,
        soberPoints: 3,
        title: "Redemption Bar"
    },
    {
        area: "Soho",
        lat: 51.5138,
        lon: -0.1298,
        soberPoints: 4,
        title: "Tonight Josephine"
    },
    {
        area: "Ealing",
        lat: 51.5148,
        lon: -0.3041,
        soberPoints: 4,
        title: "North Star"
    },
    {
        area: "Shoreditch",
        lat: 51.5261,
        lon: -0.0875,
        soberPoints: 4,
        title: "Ozone Coffee Roasters"
    },
    {
        area: "Camden",
        lat: 51.5345,
        lon: -0.1414,
        soberPoints: 4,
        title: "Prince of Wales"
    },
    {
        area: "Shoreditch",
        lat: 51.5238,
        lon: -0.0815,
        soberPoints: 5,
        title: "Q Shoreditch"
    },
    {
        area: "Shoreditch",
        lat: 51.5233,
        lon: -0.0805,
        soberPoints: 4,
        title: "Seed Library"
    },
    {
        area: "Southbank",
        lat: 51.5066,
        lon: -0.1135,
        soberPoints: 3,
        title: "Understudy"
    },
    {
        area: "East London",
        lat: 51.5688,
        lon: -0.0663,
        soberPoints: 4,
        title: "Vins Bar"
    },
    {
        area: "London",
        lat: 51.5231,
        lon: -0.0736,
        soberPoints: 5,
        title: "Zephyr"
    },
    {
        area: "Soho",
        lat: 51.5131,
        lon: -0.1379,
        soberPoints: 4,
        title: "John Snow Pub"
    },
    {
        area: "Chelsea",
        lat: 51.4842,
        lon: -0.1688,
        soberPoints: 5,
        title: "Kenzo Bar"
    },
    {
        area: "East London",
        lat: 51.5462,
        lon: -0.0924,
        soberPoints: 4,
        title: "Lady Mildmay"
    },
    {
        area: "St Paul's",
        lat: 51.5136,
        lon: -0.0946,
        soberPoints: 3,
        title: "Madison Bar"
    },
    {
        area: "Hackney",
        lat: 51.5461,
        lon: -0.0322,
        soberPoints: 4,
        title: "Willian IV"
    },
    {
        area: "Shoreditch",
        lat: 51.5266,
        lon: -0.0878,
        soberPoints: 3,
        title: "XOYO"
    },
    {
        area: "North London",
        lat: 51.5259,
        lon: -0.1092,
        soberPoints: 4,
        title: "Yorkshire Grey"
    }
];




// Initialize the map
var map = L.map("map");
map.setView([52.488, -0.89], 7);


// Tile layer source from Carto: https://carto.com
// Attribution and tile URL provided by Carto's basemap service
// Used under open license for performance and visual clarity
// Add a tile layer
L.tileLayer("https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png", {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/">CARTO</a>',
    subdomains: 'abcd',
    maxZoom: 18
}).addTo(map);


/**
 * Creates markers for each pub and binds popups
 * @param {Array} markerData
 * - Array of pub objects with lat, lon, and soberPoints
 */
function makeMarkers(markerData) {
    markerData.forEach(function (pub) {
        const popupHtml = (
            "<strong>" + pub.title + "</strong>" +
            "<p>Sober Points: " + pub.soberPoints + "/5</p>" +
            "<p>Area: " + pub.area + "</p>"
        );
        const marker = L.marker([pub.lat, pub.lon]);
        marker.addTo(map);
        marker.bindPopup(popupHtml);
    });

    map.fitBounds([
        [51.47, -0.09],
        [51.55, -0.14]
    ]);
}


// Venue search bar
const venueCardTemplate = document.querySelector("[data-venue-template]");
const searchBar = document.querySelector("[data-search]");

searchBar.addEventListener("input", function (e) {
    const value = e.target.value.toUpperCase();
    const thePubs = document.getElementById("pubs").getElementsByTagName("li");
    var i = 0;

    while (i < thePubs.length) {
        const thePub = thePubs[i];
        const titleTag = thePub.getElementsByTagName("h2")[0];
        var title = titleTag.textContent || titleTag.innerText;
        title = title.toUpperCase();

        if (title.startsWith(value)) {
            thePub.style.display = "";
        } else {
            thePub.style.display = "none";
        }
        i += 1;
    }
});

// Create the markers for the pubs on the map
makeMarkers(pubs);

// Creation steps:
// 1. Defined an array of pubs using JSON,
//including title, location (lat/long),
// soberPoints score, and area.

// 2. Defined a function for the markers,
//created a custom function to iterate over the pubs.

// 3. For each pub in the function, wrote HTML for it (line 38),
// applied it to the map (line 39),
//and bound the HTML into a popup (line 43).

// 4. Calling the function to create and
//display the markers on the map.



document.addEventListener("DOMContentLoaded", function () {
    "use strict";


    // Delay to ensure layout stabilises before recalculating map size
    setTimeout(function () {
        map.invalidateSize();
    }, 300);

    var modalElement = document.getElementById("venueModal");
    var modal = new bootstrap.Modal(modalElement);
    var modalTitle = document.getElementById("venueModalLabel");
    var modalBody = document.getElementById("venueModalBody");
    var modalLink = document.getElementById("venueModalLink");
    var buttons = document.querySelectorAll(".open-modal");

    buttons.forEach(function (button) {
        button.addEventListener("click", function () {
            var title = button.getAttribute("data-title");
            var body = button.getAttribute("data-body");
            var link = button.getAttribute("data-link");

            modalTitle.textContent = title;
            modalBody.innerHTML = body;
            modalLink.href = link;

            modal.show();
        });
    });
});

  