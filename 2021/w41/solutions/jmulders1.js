const addUp = (n) => ((n / 2) + 0.5) * n;

const addUpWithoutTens = (n) => addUp(n) - addUp(~~(n / 10)) * 10;

module.exports = addUpWithoutTens;