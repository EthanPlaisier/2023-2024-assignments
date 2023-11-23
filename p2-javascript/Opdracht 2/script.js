// Get the div element by its ID
var divElement = document.getElementById("movingDiv");

// Set initial position variables
var position = 0; // Initial position (left)
var speed = 2; // Speed of movement (pixels per 100 milliseconds)

// Function to move the div
function moveDiv() {
    // Update the position by adding the speed value
    position += speed;

    // Apply the updated position as inline CSS
    divElement.style.left = position + "px";

    // Call the moveDiv function every 100 milliseconds for smooth movement
    setTimeout(moveDiv, 100);
}

// Start moving the div
moveDiv();
