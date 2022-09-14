const ans = [0, 0];
module.exports = (input) => {
    let a = input[0], b = input[1], az = 0, bz = 0, A = a, B = b;
    while ((a & 1) === 0) {
        a >>= 1;
        az++;
    }
    while ((b & 1) === 0) {
        b >>= 1;
        bz++;
    }
    while (b !== a) {
        if (a > b) {
            [a, b] = [b, a];
        }
        b -= a;
        while ((b & 1) === 0) {
            b >>= 1;
        }
    }
    const k = az < bz ? az : bz, divisor = a << k;
    ans[0] = A / divisor;
    ans[1] = B / divisor;
    return ans;
};