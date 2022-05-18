module.exports = n => {
    let ans = '', i = 0, nLength = n.length
    if (nLength <= 5) return n;
    while (i <= n.length - 5) {
        let value = n.substr(i, 5)
        if (ans < value)
            ans = value;
        i++
    }
    return +ans
}