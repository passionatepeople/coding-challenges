function isPrime(number) {
    if (number === 1) {
        return false;
    }

    let i = (number / 2) | 0;

    while (i > 1) {
        const result = number % i;

        if (result === 0) {
            return false;
        }

        i -= 1;
    }

    return true;
}

function getFactor(number) {
    const max = (number / 2) | 0;
    let factor = 2;

    while (factor <= max) {
        if (isPrime(factor) && number % factor === 0) {
            return factor;
        }

        factor += 1;
    }

    return number;
}

const getPrimeFactors = (number) => {
    // your solution here
    const factors = [];
    let target = number;

    while (target > 1) {
        const result = isPrime(target) ? target : getFactor(target);

        factors.push(result);

        target /= result;
    }

    return factors;
};

module.exports = getPrimeFactors;
