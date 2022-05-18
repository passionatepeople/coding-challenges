module.exports = n => {
    let nLength = n.length
    if (nLength <= 5) return n;
    let ans = n.slice(0, 5), i = 0
    while (i <= n.length - 5) {
        let value = n.substr(i, 5)
        if (value > ans)
            ans = value;
        i++
    }

    return Number(ans)
}