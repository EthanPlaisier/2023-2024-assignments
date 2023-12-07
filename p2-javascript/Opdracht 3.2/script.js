// Selecteer het element waar je de tekst wilt weergeven
const outputElement = document.getElementById('opdracht');

// De tekst die je wilt herhalen
const tekst = "Dit is een herhaalde tekst. ";

// Gebruik een for loop om de tekst 100 keer op het scherm te schrijven
for (let i = 0; i < 100; i++) {
    outputElement.innerHTML += tekst + "<br>";
}
