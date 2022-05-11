module.exports = n => {
    let sum = 0, str = n + '', i = 0, strLength = str.length

    if (strLength == 1) {
        return n;
    }

    for (i; i < strLength; i++) {
        sum += +str.charAt(i)
    }
    return sum
}