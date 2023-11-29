// Get the div element by its ID
var divElement = document.getElementById("clickableDiv");

// Array of different colors
var colors = ["red", "green", "blue", "yellow", "orange", "purple"];

// Function to change the color when the div is clicked
divElement.addEventListener("click", changeColor);

function changeColor() {
    // Generate a random index to select a color from the 'colors' array
    var randomIndex = Math.floor(Math.random() * colors.length);

    // Get a random color from the 'colors' array using the random index
    var randomColor = colors[randomIndex];

    // Apply the random color to the div background
    divElement.style.backgroundColor = randomColor;
}
