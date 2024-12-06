const sum = (a,b) => {
    return a + b
}
console.log(sum(7,3))


const fromEuroToDollar = function(valueInEuro) {
    let valueInDollar = valueInEuro * 1.07;
    return valueInDollar;
}

const fromDollarToYen = function(valueInDollar) {
    let valueInEuro = valueInDollar / 1.07;
    let valueInYen = valueInEuro * 156.5;
    return parseFloat(valueInYen.toFixed(2));
}

const fromYenToPound = function(valueInYen) {
    let valueInEuro = valueInYen / 156.5;
    let valueInPound = valueInEuro * 0.87;
    return parseFloat(valueInPound.toFixed(2));
}


module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };