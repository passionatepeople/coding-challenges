const abs = Math.abs;
module.exports = (a, b, c) => c > abs(a - b) && c < a + b;