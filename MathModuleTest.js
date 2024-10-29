const readline = require('readline');
const math1 = require('./myMathModule1');
const MyMathModule = require('./myMathModule2');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Funkcja do wykonania obliczeń i wyświetlenia wyników
function performCalculations(a) {
    // Moduł myMathModule1.js
    console.log("\nWyniki dla myMathModule1:");
    console.log(`Pierwiastek kwadratowy: ${math1.squareRoot(a)}`);
    console.log(`Logarytm naturalny: ${math1.naturalLog(a)}`);
    console.log(`Silnia: ${math1.factorial(Math.floor(a))}`);
    console.log(`Sinus: ${math1.sine(a)}`);
    console.log(`Następna liczba pierwsza: ${math1.nextPrime(Math.floor(a))}`);
    
    // Moduł myMathModule2.js
    const math2 = new MyMathModule();
    console.log("\nWyniki dla myMathModule2:");
    console.log(`Pierwiastek kwadratowy: ${math2.squareRoot(a)}`);
    console.log(`Logarytm naturalny: ${math2.naturalLog(a)}`);
    console.log(`Silnia: ${math2.factorial(Math.floor(a))}`);
    console.log(`Sinus: ${math2.sine(a)}`);
    console.log(`Następna liczba pierwsza: ${math2.nextPrime(Math.floor(a))}`);
}

// Wczytanie danych z konsoli
rl.question("Podaj liczbę: ", (inputNumber) => {
    const a = parseFloat(inputNumber);

    if (isNaN(a)) {
        console.log("Podano nieprawidłową liczbę.");
    } else {
        performCalculations(a);
    }

    rl.close();
});
