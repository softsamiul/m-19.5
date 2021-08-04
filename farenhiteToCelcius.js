function farenhiteToCelcius(celcius) {
    let farenhite = ((celcius - 32) * 5) / 9;
    return farenhite;
}
let inputCelcius = 32;
const result = farenhiteToCelcius(inputCelcius);
console.log(result);