module.exports = a => {
    let b = a[0];
    let c = a[0];
    const d = a.length;
    for (let i = 1; i < d; i++) {
        const e = a[i];
        if (e < b) {
            b = e;
        } else if (e > c) {
            c = e;
        }
    }
    return [b,c];
}