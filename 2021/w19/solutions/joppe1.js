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

const primes = Array.from({ length: 55000 }, (_, i) => isPrime(i));

const compute = (number) => {
    // your solution here
    if (primes[number]) {
        return number * number - 17;
    }

    return Math.sqrt(number + 15) | 0;
};

module.exports = compute;
