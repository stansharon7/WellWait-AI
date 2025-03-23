let map;
let markers = [];
let service;
let infowindow;

window.initMap = function () {
    const waterlooLocation = { lat: 43.4516, lng: -80.4925 };

    map = new google.maps.Map(document.getElementById("map"), {
        center: waterlooLocation,
        zoom: 12
    });

    service = new google.maps.places.PlacesService(map);
    infowindow = new google.maps.InfoWindow();

    const searchBox = new google.maps.places.SearchBox(document.getElementById("searchBox"));
    const clinicTypeSelect = document.getElementById("clinicType");

    map.addListener("bounds_changed", () => {
        searchBox.setBounds(map.getBounds());
    });

    document.getElementById("searchBtn").addEventListener("click", () => {
        const places = searchBox.getPlaces();
        if (places.length === 0) return;

        const place = places[0];
        const location = place.geometry.location;

        map.setCenter(location);
        map.setZoom(15);

        // Remove previous markers
        clearMarkers();

        // Add a red marker for the selected clinic
        addMarker(location, 'red');

        // Open the InfoWindow with clinic details
        displayClinicDetails(place);
    });

    clinicTypeSelect.addEventListener("change", () => {
        searchNearbyClinics(waterlooLocation, clinicTypeSelect.value);
    });

    searchNearbyClinics(waterlooLocation, clinicTypeSelect.value);
};

// Function to add a marker with optional color
function addMarker(location, color = 'blue') {
    const marker = new google.maps.Marker({
        position: location,
        map: map,
        icon: {
            url: `http://maps.google.com/mapfiles/ms/icons/${color}-dot.png`
        }
    });

    markers.push(marker);
}

// Function to clear all markers
function clearMarkers() {
    for (let i = 0; i < markers.length; i++) {
        markers[i].setMap(null);
    }
    markers = [];
}

// Function to display clinic details in the InfoWindow
function displayClinicDetails(place) {
    let contentString = `<h3>${place.name}</h3><p><strong>Address:</strong> ${place.vicinity}</p>`;

    // Add Rating if available
    if (place.rating) {
        contentString += `<p><strong>Rating:</strong> ${place.rating} / 5</p>`;
    }

    // Add Opening Hours if available
    if (place.opening_hours) {
        contentString += `<p><strong>Opening Hours:</strong> ${place.opening_hours.weekday_text.join(", ")}</p>`;
    }

    // Add Waiting Time if available (Note: Places API doesn't provide this by default)
    if (place.waiting_time) {
        contentString += `<p><strong>Estimated Waiting Time:</strong> ${place.waiting_time} minutes</p>`;
    }

    // Add Website if available
    if (place.website) {
        contentString += `<p><a href="${place.website}" target="_blank">Visit Website</a></p>`;
    }

    // Add Directions link
    const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${place.geometry.location.lat()},${place.geometry.location.lng()}`;
    contentString += `<p><a href="${directionsUrl}" target="_blank">Get Directions</a></p>`;

    infowindow.setContent(contentString);
    infowindow.open(map, markers[markers.length - 1]);
}

// Function to search nearby clinics
function searchNearbyClinics(location, clinicType) {
    const request = {
        location: location,
        radius: 5000,
        type: [clinicType]
    };

    service.nearbySearch(request, (results, status) => {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
            for (let i = 0; i < results.length; i++) {
                const place = results[i];

                const clinicMarker = new google.maps.Marker({
                    position: place.geometry.location,
                    map: map
                });

                google.maps.event.addListener(clinicMarker, 'click', () => {
                    displayClinicDetails(place);
                });
            }
        }
    });
}
