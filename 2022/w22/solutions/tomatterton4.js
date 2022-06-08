const pow2 = (num) => num * num
const expand = n => {
    if (n < 10) {
        return n*n
    }
    const lastNSquared = pow2(n % 10);
    return expand(~~(n / 10)) * (lastNSquared > 10 ? 100 : 10) + lastNSquared;
}
module.exports = expand