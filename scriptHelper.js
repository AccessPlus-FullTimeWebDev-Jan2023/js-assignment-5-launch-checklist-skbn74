// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
}

function validateInput(testInput) {
    let numInput = Number(testInput);

    if(testInput === "") {
        return "Empty";
    } else if (isNaN(numInput)) {
        return "Not a Number";
    } else if (isNaN(numInput) === false) {
        return "Is a Number";
    }
   
};

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    let pilotNameInput = document.getElementById("pilotStatus");
    let copilotNameInput = document.getElementById("copilotStatus");
    let fuelStatusInput = document.getElementById("fuelStatus");
    let cargoStatusInput = document.getElementById("cargoStatus");
    let launchStatusInput = document.getElementById("launchStatus");
   
   if(validateInput(pilot) === "Empty" || validateInput(copilot)=== "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) === "Empty") {
    window.alert("All fields are required!");
   } else if (validateInput(pilot) === "Is a Number" || validateInput(copilot)=== "Is a Number" || validateInput(fuelLevel) === "Not a Number" || validateInput(cargoLevel) === "Not a Number") {
    window.alert("Make sure to enter valid information for each field!");
   } else {
    list.style.visibilty = "visible";
    pilotNameInput.innerHTML = `Pilot ${pilotNameInput} is Ready`;
    copilotNameInput.innerHTML = `Co-pilot ${copilotNameInput} is Ready`;
   }
   
        if(fuelStatusInput < 10000 && cargoStatusInput <= 10000) {
            fuelStatusInput.innerHTML = "Fuel level too low for launch";
            cargoStatusInput.innerHTML = "Cargo mass low enough for launch";
            launchStatusInput.innerHTML = "Shuttle Not Ready for Launch";
            launchStatusInput.style.color = "#C7254E";
        } else if (fuelStatusInput >= 10000 && cargoStatusInput > 10000) {
            fuelStatusInput.innerHTML = "Fuel level high enough for launch";
            cargoStatusInput.innerHTML = "Cargo mass too heavy for launch";
            launchStatusInput.innerHTML = "Shuttle Not Ready for Launch";
            launchStatusInput.style.color = "#C7254E";
        } else if (fuelStatusInput < 10000 && cargoStatusInput > 10000) {
            fuelStatusInput.innerHTML = "Fuel level too low for launch";
            cargoStatusInput.innerHTML = "Cargo mass too heavy for launch";
            launchStatusInput.innerHTML = "Shuttle Not Ready for Launch";
            launchStatusInput.style.color = "#C7254E";
        } else {
            fuelStatusInput.innerHTML = "Fuel level high enough for launch";
            cargoStatusInput.innerHTML = "Cargo mass low enough for launch";
            launchStatusInput.innerHTML = "Shuttle is Ready for Launch";
            launchStatusInput.style.color = "rgb(65, 159, 106)";
        }; 
};

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        return response.json();
        });

    return planetsReturned;
}

function pickPlanet(planets) {
    let index = Math.floor(Math.random()*planets.length);
    return planets[index]
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
 