module.exports = number => {
    if (number >= 100_000) {
        return (number) % 10 == ~~(number / 100_000) && ~(number / 10) % 10 == ~(number / 10_000) % 10 && ~(number / 100) % 10 == ~(number / 1_000) % 10;
    }
    if (number >= 10000) {
        return (number) % 10 == ~~(number / 10_000) && ~(number / 10) % 10 == ~(number / 1_000) % 10;
    }
    if (number >= 1000) {
        return (number) % 10 == ~~(number / 1_000) && ~(number / 10) % 10 == ~(number / 100) % 10;
    }
    if (number >= 100) {
        return (number) % 10 === ~~(number / 100);
    }
    if (number >= 10) {
        return (number / 11) % 1 === 0;
    }
    return true;
};