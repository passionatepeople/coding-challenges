// Based on https://oeis.org/A346495
module.exports = (isbn) => {
    const c1 = isbn.charCodeAt(0) - 48;
    const c2 = isbn.charCodeAt(1) - 48;
    const c3 = isbn.charCodeAt(2) - 48;
    const c4 = isbn.charCodeAt(3) - 48;
    const c5 = isbn.charCodeAt(4) - 48;
    const c6 = isbn.charCodeAt(5) - 48;
    const c7 = isbn.charCodeAt(6) - 48;
    const c8 = isbn.charCodeAt(7) - 48;
    const c9 = isbn.charCodeAt(8) - 48;
    const c10 = isbn.charCodeAt(9) - 48;

    const d1 = c1;
    const d2 = c2 * 2;
    const d3 = c3 * 3;
    const d4 = c4 * 4;
    const d5 = c5 * 5;
    const d6 = c6 * 6;
    const d7 = c7 * 7;
    const d8 = c8 * 8;
    const d9 = c9 * 9;
    const d10 = c10 < 10 ? c10 * 10 : 100;
    const sum = BigInt(d1 + d2 + d3 + d4 + d5 + d6 + d7 + d8 + d9 + d10);

    const mul = sum * 3123612579n;
    const ans = mul / 34359738368n;
    return sum == ans * 11n;
};