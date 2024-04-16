
// first pop

function openPopup() {
    const popup = document.getElementById("popup");
    popup.style.display = "block";
}

function closePopup() {
    const popup = document.getElementById("popup");
    popup.style.display = "none";
}

document.addEventListener("DOMContentLoaded", function() {
    const reserveButton = document.querySelector(".reserve-button");
    const closeButton = document.getElementById("close-button");

    if (reserveButton) {
        reserveButton.addEventListener("click", openPopup);
    }

    if (closeButton) {
        closeButton.addEventListener("click", closePopup);
    }
});

//second reserve

document.addEventListener('DOMContentLoaded', function() {
    // Function to open the reservation popup
    function openPopup() {
        document.getElementById('popup').classList.remove('hidden');
        document.body.style.overflow = 'hidden'; // Prevent scrolling
    }

    // Function to close the reservation popup
    function closePopup() {
        document.getElementById('popup').classList.add('hidden');
        document.body.style.overflow = 'auto'; // Allow scrolling
    }

    // Function to open the reservation popup for repopup
    function openRepopup() {
        document.getElementById('repopup').classList.remove('hidden');
        document.body.style.overflow = 'hidden'; // Prevent scrolling
    }

    // Function to close the reservation popup for repopup
    function reclosePopup() {
        document.getElementById('repopup').classList.add('hidden');
        document.body.style.overflow = 'auto'; // Allow scrolling
    }

    // Close the reservation popup for repopup when clicking outside of it
    window.onclick = function(event) {
        if (event.target == document.getElementById('repopup')) {
            reclosePopup();
        }
    };
});


function togglePopup() {
    var white = document.getElementById('white');
    white.style.display = white.style.display === 'none' ? 'block' : 'none';
}


      
// to show description


function showDescription(carType) {
    let titleElement = document.getElementById('car-title');
    let infoElement = document.getElementById('car-info');

    if (titleElement && infoElement) {
        let description = document.getElementById('popup');
        description.classList.remove('hidden');

        if (carType === 'SUV') {
            titleElement.textContent = 'SUV';
            infoElement.textContent = 'SUVs are a type of vehicle that combines elements of a traditional passenger car with features from off-road vehicles, such as higher ground clearance and four-wheel drive capabilities. They often offer more space and versatility compared to sedans or hatchbacks.';
        } else if (carType === 'Sedans') {
            titleElement.textContent = 'Sedans';
            infoElement.textContent = 'Sedans are passenger cars with separate compartments for engine, passenger, and cargo, typically characterized by two rows of seating and a fixed roof. They are designed primarily for passenger transportation rather than cargo or towing.';
        } else if (carType === 'Economy') {
            titleElement.textContent = 'Economy Cars';
            infoElement.textContent = 'Economy vehicles are compact cars that prioritize cost-effectiveness in terms of purchase price, fuel efficiency, and maintenance. They are typically smaller in size, making them easy to maneuver and park in urban environments.';
        }
    } else {
        console.error("Element with id 'car-title' or 'car-info' not found.");
    }
}

const reserveButtons = document.querySelectorAll(".reserve-button");
if (reserveButtons) {
    reserveButtons.forEach(button => {
        button.addEventListener("click", openPopup);
    });
}

const closeButton = document.getElementById("close-button");
if (closeButton) {
    closeButton.addEventListener("click", closePopup);
}

const carSections = document.querySelectorAll(".car-section");
if (carSections) {
    carSections.forEach(section => {
        section.addEventListener("click", function() {
            showDescription(section.dataset.name);
        });
    });
}