 class MyMathModule {
    squareRoot(a) {
        if (a < 0) throw new Error("Liczba nie może być ujemna dla pierwiastka kwadratowego.");
        return Math.sqrt(a);
    }

    naturalLog(a) {
        if (a <= 0) throw new Error("Logarytm naturalny jest zdefiniowany tylko dla liczb dodatnich.");
        return Math.log(a);
    }

    factorial(n) {
        if (n < 0) throw new Error("Silnia jest zdefiniowana tylko dla liczb nieujemnych.");
        if (n === 0 || n === 1) return 1;
        let result = 1;
        for (let i = 2; i <= n; i++) {
            result *= i;
        }
        return result;
    }

    sine(angle) {
        return Math.sin(angle);
    }

    nextPrime(n) {
        if (n < 2) return 2;
        let prime = n;
        while (true) {
            prime++;
            if (this.isPrime(prime)) return prime;
        }
    }

    isPrime(num) {
        if (num < 2) return false;
        for (let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++) {
            if (num % i === 0) return false;
        }
        return true;
    }
}

module.exports = MyMathModule;
