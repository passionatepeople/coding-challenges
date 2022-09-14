const tz = (i) => {
    let t = 1;
    let r = 0;
    while ((i & t) === 0) {
        t <<= 1;
        r++;
    }
    return r;
};
const ans = [0, 0];
module.exports = (input) => {
    let a = input[0];
    if (a === 0) {
        return b;
    }
    let b = input[1];
    if (b === 0) {
        return a;
    }
    const az = tz(a);
    a >>= az;
    const bz = tz(b);
    b >>= bz;
    const k = Math.min(az, bz);
    while (b !== a) {
        if (a > b) {
            [a, b] = [b, a];
        }
        b -= a;
        b >>= tz(b);
    }
    const divisor = a << k;
    if (divisor === 1) {
        return input;
    } else {
        ans[0] = input[0] / divisor;
        ans[1] = input[1] / divisor;
        return ans;
    }
};