//It determines the celsius input value
function celsiusValue() {
    var x = document.getElementById("input1");
    return x.value;
}
//Uses this formula to convert celsius to fahrenheit
function celToFah() {
    var catchCel = document.getElementById("input1");
    if (catchCel.value != "") {
        return celsiusValue() * 9 / 5 + 32;
    }
    return NaN;
}
//outputs a result in fahrenheits
function celToFahOutput() {
    var e = document.getElementById("input2");
    let valueOutput = celToFah();
    e.value = Number.isNaN(valueOutput) ? '' : valueOutput.toFixed(1).replace(',', '.');
}
// determines fahrenheit input value
function fahValue() {
    var f = document.getElementById("input2");

    return f.value;
}
// uses this formula to calculate degree celsius
function fahToCel() {
    var catchFah = document.getElementById("input2");
    if (catchFah.value != "") {
        var r = fahValue() - 32;
        return (r * 5 / 9);
    }
    return undefined;
}
//outputs a result in celsius
function fahToCelOutput() {
    var j = document.getElementById("input1");
    let val = fahToCel();
    j.value = Number.isNaN(val) || !val ? '' : val.toFixed(1).replace(',', '.');
    if (Number.isNaN(val) || !val) j.value = ''; else j.value = val.toFixed(1).replace(',', '.');
}
