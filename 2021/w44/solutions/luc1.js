 module.exports = (a) => {
    let l = a[0];
    let x = 0;
    for (let i = 0; i < a.length; i++) {
        let f = a[i];
        if (f == 1) {
            x = i;
            break;
        }
        if (f < l) {
            l = f;
            x = i;
        }
    }
    return [...a.slice(0, x), ...a.slice(x+1,a.length)];
}