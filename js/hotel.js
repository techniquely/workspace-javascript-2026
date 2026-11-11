// --- Practice with Object ---

// 1. Fixed typo in database variable name: foddDatabase -> foodDatabase
const foodDatabase = [
    {name: "Apple (1 medium)", cal: 95 },
    {name: "Banana (1 medium)", cal: 105},
    {name: "Orange (1 medium)", cal: 62},
    {name: "Pineapple (1 medium)", cal: 30}
];

let food = { name: "chicken (1 piece)", cal: 150 };
foodDatabase.push(food);

// Add one more food to the food database as requested
let food2 = { name: "Broccoli (1 cup)", cal: 31 };
foodDatabase.push(food2);

console.log(foodDatabase);

// Loop through foodDatabase and fix variable references (cal was undefined)
for (let i in foodDatabase){
    let name = foodDatabase[i].name;
    let cal = foodDatabase[i].cal; // Fixed variable name assignment
    if (cal < 100) {
        console.log("index " + i + " name: " + name + " cal: " + cal);
    }
}


// --- Hotel Reservation Problem ---

let reservationList = [];

function saveReservation(){
    let reservation = {
        name: document.querySelector('#guestname').value,
        checkin: document.getElementById('checkin').value,
        checkout: document.getElementById('checkout').value, // added checkout
        guests: document.getElementById('guestnum').value,    // added guests
        roomtype: document.getElementById('room').value       // Fixed typo: document.getElementByIdq -> document.getElementById
    }; 
    
    reservationList.push(reservation);
    alert("Thank you " + reservation.name + " for your reservation!");
    console.log("the current reservation list -- ", reservationList);
    
    // Call displayR function
    displayR();
}

// Event --- Action (Fixed query selector for id attribute: 'submit' -> '#submit')
const sE = document.querySelector('#submit');
if (sE) {
    sE.addEventListener('click', saveReservation);
}

// Implement display reservation list function (named displayR to match saveReservation call)
function displayR(){
    let resultHTML = "<ul>";
    
    for (let i = 0; i < reservationList.length; i++) {
        let r = reservationList[i];
        resultHTML += `<li>Guest: ${r.name} | Check-in: ${r.checkin} | Room: ${r.roomtype}</li>`;
    }
    
    resultHTML += "</ul>";
    
    // Check if an output area exists, or display it inside a designated element if available
    let outputArea = document.getElementById('reservation-output');
    if (!outputArea) {
        outputArea = document.createElement('div');
        outputArea.id = 'reservation-output';
        document.body.appendChild(outputArea);
    }
    outputArea.innerHTML = resultHTML;
}