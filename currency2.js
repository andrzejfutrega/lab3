class Currency {
    constructor() {
        this.exchangeRates = {
            USD: 4.02,
            EUR: 4.34,
            GBP: 5.22,
            CHF: 4.63,
            JPY: 0.026
        };
    }

    convertToPLN(amount, currency) {
        if (!this.exchangeRates[currency]) {
            throw new Error(`Waluta ${currency} jest nieobsługiwana.`);
        }
        return amount * this.exchangeRates[currency];
    }
}

module.exports = Currency;
