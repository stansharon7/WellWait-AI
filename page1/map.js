let map;
let markers = [];
let userMarker = null; // Store the "You Are Here" marker

function initMap() {
    const waterloo = { lat: 43.4643, lng: -80.5204 }; // Default map center
    const userLocation = { lat: 43.4686, lng: -80.5251 }; // KW Headshots - 57 Albert St, Waterloo, ON

    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 12,
        center: waterloo,
    });

    // Hide location cards initially
    document.getElementById("locations-list").style.display = "none";

    document.getElementById("submit-location").addEventListener("click", function () {
        const input = document.getElementById("location-input").value.trim();
        console.log("Input submitted: ", input);

        // Clear existing markers and location cards
        markers.forEach(marker => marker.setMap(null));
        markers = [];
        if (userMarker) userMarker.setMap(null); // Remove previous "You Are Here" marker
        document.getElementById("locations-list").innerHTML = "";

        if (input === "") {
            // If input is empty, hide everything
            document.getElementById("locations-list").style.display = "none";
            return;
        }

        // Show all location cards
        document.getElementById("locations-list").style.display = "block";

        // Manually add markers for each location with fixed latitudes and longitudes
        const locations = [
            { name: "Waterloo Walk-in-Clinic", lat: 43.47214619157909, lng: -80.53902531900451 },
            { name: "King Street Medical Centre", lat: 43.483506505297456, lng: -80.5259174636284 },
            { name: "University Help Centre", lat: 43.469551463538394, lng: -80.54370898566026 },
            { name: "Park 535 Medical Centre", lat: 43.45651245334418, lng: -80.51558424660361 },
            { name: "Benton Medical Centre", lat: 43.44775491685125, lng: -80.48863506656221}
        ];

        locations.forEach(location => {
            // Append location card (you can modify this part as needed)
            document.getElementById("locations-list").innerHTML += createLocationCard(location);

            // Add marker for each clinic with custom icon (marker.png)
            const marker = new google.maps.Marker({
                position: { lat: location.lat, lng: location.lng },
                map: map,
                icon: {
                    url: 'assets/marker.png',  // Custom marker icon from assets
                    scaledSize: new google.maps.Size(30, 40), // Set the marker size (width, height)
                },
                title: location.name,
            });

            // Store the marker in the markers array
            markers.push(marker);
        });

        // Add the "You Are Here" marker (user's location)
        userMarker = new google.maps.Marker({
            position: userLocation,
            map: map,
            icon: "assets/You-here.png", // Custom "You Are Here" marker icon
            title: "You Are Here",
        });
    });
}
