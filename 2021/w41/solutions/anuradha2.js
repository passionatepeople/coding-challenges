const addUpWithoutTens = n => {
    const numOfTens = ~~(n / 10);
    return n * (n + 1) / 2 - numOfTens * (numOfTens + 1) * 5;
}

module.exports = addUpWithoutTens;