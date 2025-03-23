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

        locations.forEach(location => {
            // Append location card
            document.getElementById("locations-list").innerHTML += createLocationCard(location);

            // Add marker for each clinic
            const marker = new google.maps.Marker({
                position: { lat: location.lat, lng: location.lng },
                map: map,
                icon: `assets/marker${location.number}.png`, 
                title: location.name,
            });

            markers.push(marker);
        });

        // Add "You Are Here" marker when search is submitted
        userMarker = new google.maps.Marker({
            position: userLocation,
            map: map,
            icon: "assets/You-here.png", // Custom "You Are Here" marker icon
            title: "You Are Here",
        });

        // Center map on the user's location
        map.setCenter(userLocation);
        map.setZoom(12);
    });

    // Allow pressing "Enter" to submit the input
    document.getElementById("location-input").addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
            document.getElementById("submit-location").click();
        }
    });
}

// Ensure initMap is called when the script loads
window.initMap = initMap;