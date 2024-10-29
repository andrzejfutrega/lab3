const exchangeRates = {
    USD: 4.02,
    EUR: 4.34,
    GBP: 5.22,
    CHF: 4.63,
    JPY: 0.026
};

function convertToPLN(amount, currency) {
    if (!exchangeRates[currency]) {
        throw new Error(`Waluta ${currency} jest nieobsługiwana.`);
    }
    return amount * exchangeRates[currency];
}

exports.convertToPLN = convertToPLN;
exports.exchangeRates = exchangeRates;
