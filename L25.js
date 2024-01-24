function toCelsius(Fahrenheit){
    let value = (Fahrenheit - 32) * 5 / 9;
    return value.toFixed(2) + "°C"; 
    //.toFixed(2)การกำหนดจุดทศนิยม
}

function toFahrenheit(Celsius){
    let value = (Celsius) * 9 / 5 + 32;
    return value.toFixed(2) + "°F"; 
    //.toFixed(2)การกำหนดจุดทศนิยม
}

function display(strid, value){
    console.log(strid, value)
}
toCelsius(150);
toFahrenheit(150);
console.log(toCelsius(150));
display("Aswwww ",toCelsius(150));
display("Aswwww ",toFahrenheit(150));