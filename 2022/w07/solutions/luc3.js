module.exports = a => {
    let b = a[0];
    let c = b;
    for (let e of a) {
        if (e < b) {
            b = e;
        } else if (e > c) {
            c = e;
        }
    }
    return [b,c];
}