const expand = n => {
    if (n < 10) {
        return Math.pow(n, 2);
    }
    const lastNSquared = Math.pow(n % 10, 2);
    return expand(~~(n / 10)) * (lastNSquared > 10 ? 100 : 10) + lastNSquared;
}
module.exports = expand