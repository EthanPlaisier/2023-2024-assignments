let Value1;
let Value2;
let Result;
let ResultH1 = document.getElementById("ResultH1");

function Multiply() {
    GetValues();
    Result = Value1 * Value2;
    SetResult(Result);
}

function Subtract() {
    GetValues();
    Result = Value1 - Value2;
    SetResult(Result);
}

function Sum() {
    GetValues();
    Result = Value1 + Value2;
    SetResult(Result);
}

function Divide() {
    GetValues();
    Result = Value1 / Value2;
    SetResult(Result);
}

function GetValues() {
    Value1 = parseInt(document.getElementById("Value1").value);
    Value2 = parseInt(document.getElementById("Value2").value);
}

function SetResult(result) {
    ResultH1.innerHTML = "Result: " + result;
}
