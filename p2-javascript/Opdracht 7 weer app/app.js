document.addEventListener('DOMContentLoaded', function () {
    // Variabelen voor UI-elementen
    const locationInput = document.getElementById('location');
    const getWeatherButton = document.getElementById('getWeather');
    const weatherResultDiv = document.getElementById('weatherResult');
  
    // Voeg een eventlistener toe aan de knop
    getWeatherButton.addEventListener('click', getWeather);
  
    function getWeather() {
      // Haal de locatie op uit het invoerveld
      const location = locationInput.value;
  
      // Vervang 'YOUR_API_KEY' door je eigen OpenWeatherMap API-sleutel
      const apiKey = '69c059b930e00d7d7ba25cf134a4cd77';
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`;
  
      // Doe een Fetch API-aanroep om weergegevens op te halen
      fetch(apiUrl)
        .then(response => {
          // Controleer of de API-aanroep succesvol was
          if (!response.ok) {
            throw new Error('Locatie niet gevonden');
          }
          return response.json();
        })
        .then(data => {
          // Haal weergegevens op uit de JSON-respons
          const temperatureKelvin = data.main.temp;
          const temperature = (temperatureKelvin - 273.15).toFixed(2); // Converteer Kelvin naar Celsius
          const humidity = data.main.humidity;
          const description = data.weather[0].description;
  
          // Stel de tekst samen en update de DOM
          const resultText = `Temperatuur: ${temperature}°C, Luchtvochtigheid: ${humidity}%, Beschrijving: ${description}`;
          weatherResultDiv.textContent = resultText;
        })
        .catch(error => {
          // Toon foutbericht als er een probleem is
          weatherResultDiv.textContent = `Fout: ${error.message}`;
        });
    }
  });
  