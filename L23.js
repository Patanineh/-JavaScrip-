function toCelsius(){
    let Fahrenheit = prompt("Fahrenheit : ");
    let value = (Fahrenheit - 32) * 5 / 9;
    document.getElementById("change").innerHTML = value.toFixed(2) + "°C"; 
    //.toFixed(2)การกำหนดจุดทศนิยม
}

function toFahrenheit(){
    let Celsius = prompt("Celsius : ");
    let value = (Celsius) * 9 / 5 + 32;
    document.getElementById("change2").innerHTML = value.toFixed(2) + "°F"; 
    //.toFixed(2)การกำหนดจุดทศนิยม
}
toCelsius();
toFahrenheit();