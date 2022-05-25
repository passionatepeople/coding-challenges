module.exports = (start, end) => {
    if (end < start) return 0
    let sum = 0, j, isFive, str
    for (let i = start; i <= end; i++) {
        str = i + '';
        j = 0;
        while (!isFive && j < str.length) {
            if (str[j] == '5') {
                isFive = true;
                break;
            }
            j++
        }
        if (isFive) {
            isFive = false;
            continue;
        }
        sum++
    }
    return sum;
}