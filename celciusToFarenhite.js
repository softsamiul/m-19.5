function celciusToFarenhite(celcius) {
    let farenhite = ((celcius * 9) / 5) + 32;
    return farenhite;
}
let inputCelcius = 1;
const result = celciusToFarenhite(inputCelcius);
console.log(result);