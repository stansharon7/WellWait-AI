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

// Diya's Code here
const submitBtn = document.getElementById("submit-location");
const hospitals = [
    { number: 1, name: "Waterloo Walk-in-Clinic", address: "170 University Ave W", travel: "15 minutes"},
    { number: 2, name: "King Street Medical Centre", address: "1718 King St E", travel: "20 minutes"},
    { number: 3, name: "University Help Centre", address: "200 University Ave W", travel: "25 minutes"},
    { number: 4, name: "Park 535 Medical Centre", address: "535 Park St Unit 2", travel: "10 minutes"},
    { number: 5, name: "Benton Medical Centre", address: "51 Benton St", travel: "25 minutes"}
];

let locations = [];

// Function to generate fake wait times with added factors like doctors, patients, and emergencies
function generateFakeWaitTimes(hospitals) {
    return hospitals.map(hospital => ({
        number:hospital.number,
        name: hospital.name,
        address: hospital.address,
        city: hospital.address.split(",").slice(-2).join(",").trim(),
        travelTime: hospital.travel,
        pastWaitTimes: [
            { day: "Monday", time: "10 AM", waitTime: Math.floor(Math.random() * 60) + 10, doctors: Math.floor(Math.random() * 10) + 1, patients: Math.floor(Math.random() * 50) + 10, emergencies: Math.floor(Math.random() * 20) + 1 },
            { day: "Wednesday", time: "2 PM", waitTime: Math.floor(Math.random() * 60) + 10, doctors: Math.floor(Math.random() * 10) + 1, patients: Math.floor(Math.random() * 50) + 10, emergencies: Math.floor(Math.random() * 20) + 1 },
            { day: "Friday", time: "5 PM", waitTime: Math.floor(Math.random() * 60) + 10, doctors: Math.floor(Math.random() * 10) + 1, patients: Math.floor(Math.random() * 50) + 10, emergencies: Math.floor(Math.random() * 20) + 1 }
        ]
    }));
}

// Example Usage:
const fakeData = generateFakeWaitTimes(hospitals);


// // const OpenAI = require('openai');

// const client = new OpenAI({
//     baseURL: 'https://api.studio.nebius.com/v1/',
//     apiKey: 'eyJhbGciOiJIUzI1NiIsImtpZCI6IlV6SXJWd1h0dnprLVRvdzlLZWstc0M1akptWXBvX1VaVkxUZlpnMDRlOFUiLCJ0eXAiOiJKV1QifQ.eyJzdWIiOiJnb29nbGUtb2F1dGgyfDExNTQxOTU0MjUzODkyMDM4MTE2MiIsInNjb3BlIjoib3BlbmlkIG9mZmxpbmVfYWNjZXNzIiwiaXNzIjoiYXBpX2tleV9pc3N1ZXIiLCJhdWQiOlsiaHR0cHM6Ly9uZWJpdXMtaW5mZXJlbmNlLmV1LmF1dGgwLmNvbS9hcGkvdjIvIl0sImV4cCI6MTkwMDMzNTc5NywidXVpZCI6ImNmYjEyM2VlLWU5MzYtNGM5Mi1hOTUwLTE1YTNjNmJlNzJmZCIsIm5hbWUiOiJob3NwaXRhbC13YWl0LXRpbWVzLWFwaS1rZXkiLCJleHBpcmVzX2F0IjoiMjAzMC0wMy0yMVQxNTowMzoxNyswMDAwIn0.N8bYWqUAQ9b_3bopsYsqsXBXd_ecb_qf9EE_CMyLneM'

// });


// // const client = new OpenAI({
// //     baseURL: 'https://api.studio.nebius.com/v1/',
// //     apiKey: 'eyJhbGciOiJIUzI1NiIsImtpZCI6IlV6SXJWd1h0dnprLVRvdzlLZWstc0M1akptWXBvX1VaVkxUZlpnMDRlOFUiLCJ0eXAiOiJKV1QifQ.eyJzdWIiOiJnb29nbGUtb2F1dGgyfDExNTQxOTU0MjUzODkyMDM4MTE2MiIsInNjb3BlIjoib3BlbmlkIG9mZmxpbmVfYWNjZXNzIiwiaXNzIjoiYXBpX2tleV9pc3N1ZXIiLCJhdWQiOlsiaHR0cHM6Ly9uZWJpdXMtaW5mZXJlbmNlLmV1LmF1dGgwLmNvbS9hcGkvdjIvIl0sImV4cCI6MTkwMDMzNTc5NywidXVpZCI6ImNmYjEyM2VlLWU5MzYtNGM5Mi1hOTUwLTE1YTNjNmJlNzJmZCIsIm5hbWUiOiJob3NwaXRhbC13YWl0LXRpbWVzLWFwaS1rZXkiLCJleHBpcmVzX2F0IjoiMjAzMC0wMy0yMVQxNTowMzoxNyswMDAwIn0.N8bYWqUAQ9b_3bopsYsqsXBXd_ecb_qf9EE_CMyLneM' 
// // });

async function getWaitTime(hospital, city, day, time, pastData) {
    const pastWaitTimesText = pastData.map(data => 
        `- Day: ${data.day}, Time: ${data.time}, Wait Time: ${data.waitTime} minutes, Doctors: ${data.doctors}, Patients: ${data.patients}, Emergencies: ${data.emergencies}`
    ).join("\n");

    const prompt = `
    You are an AI assistant that predicts hospital wait times based on historical data and additional factors.

    Hospital: ${hospital}
    City: ${city}

    Here are past wait times with factors (doctors, patients, emergencies):
    ${pastWaitTimesText}

    Now, predict the wait time for:
    - Day: ${day}
    - Time: ${time}

    Consider the number of doctors, patients, and emergencies as factors that influence wait times. Please provide the predicted wait time in minutes only, with no extra explanations and format all answers in same manner.

    Provide a short and clear answer in minutes.
    `;

    try {
        const response = await fetch('http://localhost:3000/getPrediction', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ messages: [{ role: 'system', content: prompt }] }),
        });
        const data = await response.json();
        return data.choices[0].message.content.trim();
    } catch (error) {
        console.error("Error:", error);
        return "N/A";
    }
}


// Function to get the current day and time
function getCurrentDateTime() {
    const now = new Date();
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const currentDay = days[now.getDay()];

    // Get the current hours and minutes
    let hours = now.getHours();
    let minutes = now.getMinutes();

    // Determine AM/PM
    let ampm = hours >= 12 ? 'PM' : 'AM';

    // Convert hours to 12-hour format
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'

    // Ensure minutes are always two digits (e.g., 3:05 PM instead of 3:5 PM)
    minutes = minutes < 10 ? '0' + minutes : minutes;

    const currentTime = `${hours}:${minutes} ${ampm}`;

    return { day: currentDay, time: currentTime };
}


// Example Usage:
// const { day, time } = getCurrentDateTime();
// fakeData.forEach(async (hospital) => {
//     const predictedWaitTime = await getWaitTime(hospital.name, hospital.city, day, time, hospital.pastWaitTimes);
//     locations.push({hospitalName: hospital.name, travelTime:hospital.travel, predictTime:predictedWaitTime, day:day, time:time});
//     console.log(`Wait Time for ${hospital.name}: ${predictedWaitTime}`);
// });

// console.log(locations);



const { day, time } = getCurrentDateTime();

async function processHospitals() {
    const promises = fakeData.map(async (hospital) => {
        const predictedWaitTime = await getWaitTime(hospital.name, hospital.city, day, time, hospital.pastWaitTimes);
        console.log(predictedWaitTime);
        const extractedTime = predictedWaitTime.match(/\d+/g)?.pop() || "N/A";
        return { number:hospital.number, hospitalName: hospital.name, travelTime: hospital.travelTime, address:hospital.address, predictTime: extractedTime, day: day, time: time };
    });

    try {
        locations = await Promise.all(promises);
        console.log(locations);
    } catch (error) {
        console.error("Error processing hospitals:", error);
    }
}

function getTimeInMinutes(timeString) {
    return parseInt(timeString.split(' ')[0], 10); // Extracts the number part from the string
  }
  
  

submitBtn.addEventListener('click', async () => {
    await processHospitals();  // Ensure locations array is populated before rendering
    console.log(locations);
    locations.sort((a, b) => {
        const aTotalTime = getTimeInMinutes(a.travelTime) + parseInt(a.predictTime, 10);
        const bTotalTime = getTimeInMinutes(b.travelTime) + parseInt(b.predictTime, 10);
        return aTotalTime - bTotalTime; // Ascending order
      });
    renderLocations();
});


//Sharon's code here
//<div class="number"> ${location.number}</div>
function createLocationCard(location) {
    return `
        <div class="location-card">
            
            <div class="details">
                <h3>${location.hospitalName}</h3>
                <p>${location.address}</p>
                <div class="timing">
                    <span><img src="assets/car-icon.webp" alt="Car icon" class="icon"> ${location.travelTime}</span>
                    <span><img src="assets/clock-icon-lg.png" alt="Time icon" class="icon"> ${location.predictTime} minutes</span>
                </div>
            </div>
        </div>
    `;
}


function renderLocations() {
    const listContainer = document.getElementById("locations-list");
    listContainer.innerHTML = locations.map(createLocationCard).join("\n");
}

// document.addEventListener("DOMContentLoaded", renderLocations);