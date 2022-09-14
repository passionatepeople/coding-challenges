const gcd = (a, b) => b == 0 ? a : gcd(b, a % b);

module.exports = ([f1, f2]) => {
    const divident = gcd(f1, f2)

    return [f1 / divident, f2 / divident];
}