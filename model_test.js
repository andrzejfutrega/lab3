const currency1 = require('./currency1');
const Currency = require('./currency2');

// Testowanie modułu currency1.js
try {
    console.log("Moduł currency1:");
    console.log("100 USD to PLN:", currency1.convertToPLN(100, "USD"));
    console.log("200 EUR to PLN:", currency1.convertToPLN(200, "EUR"));
} catch (error) {
    console.error(error.message);
}

// Testowanie modułu currency2.js
try {
    const currency2 = new Currency();
    console.log("\nModuł currency2:");
    console.log("300 GBP to PLN:", currency2.convertToPLN(300, "GBP"));
    console.log("150 JPY to PLN:", currency2.convertToPLN(250, "JPY"));
} catch (error) {
    console.error(error.message);
}
