const count = (n) => {
    let string = n + '', c = 0, i = 0
    const strLength = string.length
    for (i; i < strLength; i++) {
        let current = string.charAt(i)
        c = 9 * c + +(current - (current >= '5' ? 1 : 0));
        if (current === '5') {
            while (i + 1 < strLength) {
                c = 9 * c + 8;
                i++
            }
        }
    }
    return c;
}

module.exports = (start, end) => {
    return start > 0 ? count(end) - count(start - 1) :
        end < 0 ? count(-start) - count(-end - 1) :
            count(end) + count(-start) + 1;
}