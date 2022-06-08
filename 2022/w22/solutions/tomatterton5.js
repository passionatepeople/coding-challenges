const pow2 = (num) => num * num
const expand = n => {
    if (n < 10) {
        return n * n
    }

    let x = ~~(n / 10)
    if (x === 0) {
        return x
    } else {
        const lastNSquared = pow2(n % 10);
        return expand(x) * (lastNSquared > 10 ? 100 : 10) + lastNSquared;
    }
}
module.exports = expand