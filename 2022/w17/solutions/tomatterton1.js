module.exports = (a, b) => {
    let negative = '', aLen = a.length, bLen = b.length, res = '', borrow = 0
    a = a.padStart(bLen, '0');
    b = b.padStart(aLen, '0');
    if (a === b) return '0';

    if (b > a) [a, b, negative] = [b, a, '-'];

    let i = a.length - 1

    for (i; i >= 0; --i) {
        let val = +a[i] - +b[i] - borrow;
        if (val < 0) {
            borrow = 1;
            res = (val + 10) + res;
        } else {
            borrow = 0;
            res = val + res;
        }
    }
    borrow = 0
    i = 0;
    let value;
    for (i; i < 3; ++i) {
            if (res[i] == 0) {
                ++borrow
                continue;
            }
        break;
    }
    return negative + res.slice(borrow, res.length)
}