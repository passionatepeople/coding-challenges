const gcd = (a, b) => b ? gcd(b, a % b) : a
module.exports = (fraction) => {
    let a = fraction[0]
    let b = fraction[1]

    let divisor = gcd(a, b)
    return [a / divisor, b / divisor]
};