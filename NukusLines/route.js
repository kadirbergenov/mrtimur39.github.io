L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);



function loadGpxFile(fileURL) {
    fetch(fileURL)
    .then(response => response.text())
    .then(gpxData => {
        parseAndDrawRoute(gpxData);
    })
    .catch(error => {
        console.error('Error loading GPX file:', error);
    });
}

function parseAndDrawRoute(gpx) {
    var parser = new DOMParser();
    var xmlDoc = parser.parseFromString(gpx, 'text/xml');
    var trackSegments = xmlDoc.getElementsByTagName('trkpt');
    var latLngs = [];

    for (var i = 0; i < trackSegments.length; i++) {
    var lat = parseFloat(trackSegments[i].getAttribute('lat'));
    var lon = parseFloat(trackSegments[i].getAttribute('lon'));
    latLngs.push([lat, lon]);
    }

    // Clear existing layers before drawing the new route
    map.eachLayer(function (layer) {
    if (layer !== map && !(layer instanceof L.TileLayer)) {
        map.removeLayer(layer);
    }
    });

    // Create a Leaflet polyline from the latLngs array
    var routePolyline = L.polyline(latLngs, { color: 'blue' });

    // Add the polyline to the map
    routePolyline.addTo(map);

    // Fit the map to the bounds of the route polyline
    map.fitBounds(routePolyline.getBounds());
}

function handleSearch(event) {
    event.preventDefault();
    var address = searchInput.value;
    if (address) {
        try {
            var gpxFileURL = address + '.gpx';
            loadGpxFile(gpxFileURL);
        }
        catch {}
    }
}

loadGpxFile("1.gpx")
searchButton.addEventListener('click', handleSearch);

// Example: Load the GPX file from the server
