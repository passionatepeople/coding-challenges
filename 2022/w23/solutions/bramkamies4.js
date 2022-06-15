module.exports = (a, b) => {
    let aPow = 10_000_000;
    while (aPow > a) {
        aPow /= 10;
    }
    let bPow = 10_000_000;
    while (bPow > b) {
        bPow /= 10;
    }

    const aBig = (a / aPow) >> 0;
    const aSmall = a - aBig * aPow;
    const bBig = (b / bPow) >> 0;
    const bSmall = b - bBig * bPow;

    const ans = bBig * aPow + aSmall - aBig * bPow - bSmall;
    return ans < 0 ? -ans : ans;
};