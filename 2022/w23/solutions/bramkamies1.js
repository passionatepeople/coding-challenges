module.exports = (a, b) => {
    let aPow = 10 ** ~~Math.log10(a);
    let bPow = 10 ** ~~Math.log10(b);
    let aBig = (a / aPow) >> 0;
    let aSmall = a - aBig * aPow;
    let bBig = (b / bPow) >> 0;
    let bSmall = b - bBig * bPow;

    return Math.abs((bBig * aPow + aSmall) - (aBig * bPow + bSmall));
};