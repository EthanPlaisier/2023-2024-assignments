const winkelmandje = ["bananen", "whiskey", "chips", "bonen", "aardappelen"];
var aantal = winkelmandje.length;

document.getElementById('opdracht1').innerHTML = "Aantal producten in het winkelmandje: " + aantal;

// Loop om de producten weer te geven
let productenHtml = "";
for (let i = 0; i < winkelmandje.length; i++) {
    productenHtml += winkelmandje[i] + "<br>";
}

document.getElementById('opdracht2').innerHTML = productenHtml;
