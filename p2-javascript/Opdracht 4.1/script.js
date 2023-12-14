window.onload = function() {
    var resultaatDiv = document.getElementById('resultaat');
    var resultaat = '';
  
    for (var i = 1; i <= 10; i++) {
      var vermenigvuldiging = i * 10;
      resultaat += i + ' x 10 = ' + vermenigvuldiging + '<br>';
    }
  
    resultaatDiv.innerHTML = resultaat;
  };
  