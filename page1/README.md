# Hospital-wait-time-frontend
This is frontend. 

/* Edit location button */
.submit-location {
    background-color: #007bff;  /* Blue background for the button */
    color: white;  /* White text color */
    border: none;  /* Remove border */
    padding: 6px 10px;  /* Padding inside the button */
    border-radius: 5px;  /* Rounded corners */
    cursor: pointer;  /* Change cursor to pointer on hover */
    font-size: 14px;  /* Set font size */
    position: absolute;  /* Position absolutely within the sidebar */
    top: 25px;  /* Distance from the top */
    right: 20px;  /* Distance from the right */
}

.submit-location:hover{
    background-color: rgb(43, 145, 255); 
    color: #ffffff;
}

/* Styling for the input text bar */
.location-input {
    width: 79%;  /* Make the input bar take full width of the sidebar */
    padding: 10px;  /* Add padding inside the input bar */
    margin-bottom: 0px;  /* Add space below the input bar */
    font-size: 16px;  /* Set font size */
    border: 1px solid #ccc;  /* Light gray border */
    border-radius: 5px;  /* Rounded corners */
    background-color: #fff;  /* Set background to white */
    box-sizing: border-box;  /* Ensure padding doesn't affect the width */
}

            <input type="text" id="location-input" class="location-input" placeholder="Enter location...">
            <button class="submit-location" id="submit-location">Submit</button>


// const locations = [
//     { number: 1, name: "Waterloo Walk-in-Clinic", address: "170 University Ave W", travel: "15 minutes", wait: "25 minutes", lat: 43.4643, lng: -80.5204 },
//     { number: 2, name: "King Street Medical Centre", address: "1718 King St E", travel: "20 minutes", wait: "30 minutes", lat: 43.4660, lng: -80.5150 },
//     { number: 3, name: "University Help Centre", address: "200 University Ave W", travel: "25 minutes", wait: "35 minutes", lat: 43.4685, lng: -80.5105 },
//     { number: 4, name: "Park 535 Medical Centre", address: "535 Park St Unit 2", travel: "10 minutes", wait: "55 minutes", lat: 43.4630, lng: -80.5305 },
//     { number: 5, name: "Benton Medical Centre", address: "51 Benton St", travel: "25 minutes", wait: "1 hour", lat: 43.4600, lng: -80.5250 }
// ];

// function createLocationCard(location) {
//     return `
//         <div class="location-card">
//             <div class="number">${location.number}</div>
//             <div class="details">
//                 <h3>${location.name}</h3>
//                 <p>${location.address}</p>
//                 <div class="timing">
//                     <span><img src="assets/car-icon.webp" alt="Car icon" class="icon"> ${location.travel}</span>
//                     <span><img src="assets/clock-icon-lg.png" alt="Time icon" class="icon"> ${location.wait}</span>
//                 </div>
//             </div>
//         </div>
//     `;
// }

// function renderLocations() {
//     const listContainer = document.getElementById("locations-list");
//     listContainer.innerHTML = locations.map(createLocationCard).join("\n");
// }

// document.addEventListener("DOMContentLoaded", renderLocations);

// function findLocationByName(name) {
//     return locations.filter(location => location.name.toLowerCase().includes(name.toLowerCase()));
// }

// const locations = [
//     { number: 1, name: "Waterloo Walk-in-Clinic", address: "170 University Ave W", travel: "15 minutes", wait: "25 minutes" },
//     { number: 2, name: "King Street Medical Centre", address: "1718 King St E", travel: "20 minutes", wait: "30 minutes" },
//     { number: 3, name: "University Help Centre", address: "200 University Ave W", travel: "25 minutes", wait: "35 minutes" },
//     { number: 4, name: "Park 535 Medical Centre", address: "535 Park St Unit 2", travel: "10 minutes", wait: "55 minutes" },
//     { number: 5, name: "Benton Medical Centre", address: "51 Benton St", travel: "25 minutes", wait: "1 hour" }
// ];

// Example of a static array of hospitals in Waterloo
// const hospitals = [
//     { name: "Waterloo General Hospital", address: "123 Main St, Waterloo, ON" },
//     { name: "Laurier Health Clinic", address: "456 University Ave, Waterloo, ON" },
//     { name: "Waterloo Regional Medical Center", address: "789 King St, Waterloo, ON" }
// ];