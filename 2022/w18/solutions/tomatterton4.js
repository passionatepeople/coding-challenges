module.exports = n => {
    let sum = 0, str = n + '', i = 0

    if (n < 10) return n;
    if (str.length > 10) return n % 9

    for (i; i < str.length; i++) {
        sum += +str.charAt(i)
    }
    return sum
}