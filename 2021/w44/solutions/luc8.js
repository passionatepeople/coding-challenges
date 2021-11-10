const slice = Array.prototype.slice;
module.exports = a => {
    let m = a[0];
    let b = 0;
    for (let i = 1; i < a.length; i++) {
        let v = a[i];
        b = (v < m) ? i : b;
        m = (v < m) ? v : m;
    }
    return [...slice.call(a, 0, b), ...slice.call(a, b + 1, a.length)];
}