const winkelmandje = ["bananen", "whiskey", "chips", "bonen", "aardappelen"];
var aantal = winkelmandje.length;

document.getElementById('opdracht1').innerHTML = "aantal producten in de winkelmandje:" + aantal;

document.getElementById('opdracht2').innerHTML = winkelmandje.join('<br>');

document.getElementById('opdracht3').innerHTML = 'het 4e product is:' + winkelmandje[3];


winkelmandje[1] ='bier';
document.getElementById('opdracht4').innerHTML = 'wiskey is vervangen door bier:' + winkelmandje.join(', ');

function addproduct() {
    const nieuwproduct = prompt("voer het nieuwe product in:");
    winkelmandje.push(nieuwproduct);
    document.getElementById('opdracht5').innerHTML = winkelmandje;
}

if (winkelmandje.length > 1) {
    document.getElementById('opdracht6').innerHTML = "<p>u heeft genoeg producten om te tonen:</p>"
    + winkelmandje.join('<br>') ;
} else {
    document.getElementById('opdracht6').innerHTML = "<p>u heeft niet genoeg producten om te tonen:</p>"
}

if (winkelmandje[4] == "drop") {
    document.getElementById('opdracht7').innerHTML = "<p>u heeft drop:</p>"
} else {
    document.getElementById('opdracht7').innerHTML = "<p>u heeft geen drop:</p>"
}

document.getElementById('opdracht8').innerHTML = "<p>producten met spaties:</p>"
+ winkelmandje.join(' ') ;

document.getElementById('opdracht9').innerHTML = "oude winkelmand: " + winkelmandje.join(', ');

winkelmandje.splice(0, 2);
document.getElementById('nieuwewinkelmand').innerHTML = "nieuwe winkelmand: " + winkelmandje.join(', ');

const winkelmand = ["bananen", "whiskey", "chips", "bonen", "aardappelen"];
winkelmand.sort();
document.getElementById('opdracht10').innerHTML = 'gesorteerde array: ' + winkelmand.join(', ');