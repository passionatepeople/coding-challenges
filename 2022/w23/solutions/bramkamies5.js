module.exports = (a, b) => {
    let aPow = 10_000_000;
    while (aPow > a) {
        aPow /= 10;
    }

    let bPow = 10_000_000;
    while (bPow > b) {
        bPow /= 10;
    }

    const ans = a - b + (~(a / aPow) - ~(b / bPow)) * (aPow + bPow);
    return ans < 0 ? -ans : ans;
};