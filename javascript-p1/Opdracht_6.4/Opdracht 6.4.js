function calculate_1(getal_1,getal_2){
    antwoord_1 = getal_1 + getal_2;
    console.log(antwoord_1);
    var resultElement = document.getElementById("result_1");
    resultElement.textContent = getal_1 + " + " + getal_2 + " = " + antwoord_1;
}
function calculate_2(getal_1,getal_2){
    antwoord_2 = getal_1 * getal_2;
    console.log(antwoord_2);
    var resultElement = document.getElementById("result_2");
    resultElement.textContent = getal_1 + " + " + getal_2 + " = " + antwoord_2;
}
function calculate_3(seconds){
    var antwoord_3 = seconds / 60;
    console.log(antwoord_3);
    var resultElement = document.getElementById("result_3");
    resultElement.textContent = seconds + " / " + 60 + " = " + antwoord_3;
}
 