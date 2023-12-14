function toonTafel(getal) {
    var resultaatDiv = document.getElementById('resultaat');
    var resultaat = '';
  
    for (var i = 1; i <= 10; i++) {
      var vermenigvuldiging = i * getal;
      resultaat += i + ' x ' + getal + ' = ' + vermenigvuldiging + '<br>';
    }
  
    resultaatDiv.innerHTML = resultaat;
  }
  
  // Voorbeeld: toon de tafel van 7
  toonTafel(7);
  