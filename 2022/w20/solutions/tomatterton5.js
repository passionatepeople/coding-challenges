const count = (n) => {
    let c = 0, i = 1
    while (n > 0) {
        const d = n % 10;
        if (d === 5) {
            c = 4 * i + i - 1;
        } else {
            c += (d - (d > 5)) * i;
        }
        n = ~~(n / 10)
        i *= 9
    }
    return c;
}

module.exports = (start, end) => {
    if(end < start) return 0
    return start > 0 ? count(end) - count(start - 1) :
        end < 0 ? count(-start) - count(-end - 1) :
            count(end) + count(-start) + 1;
}