const gcd = (a, b) => {
    if (a == 0) return b;
    if (b == 0) return a;
    return gcd(b, a % b)
}
module.exports = (fraction) => {
    let a = fraction[0]
    let b = fraction[1]

    let divisor = gcd(a, b);
    if (divisor == 1) return fraction;
    return [a / divisor, b / divisor];
};