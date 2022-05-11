module.exports = n => {
    let sum = 0, str = n + '', i = 0
    for(i; i < str.length; i++) {
        sum += +str[i]
    }
    return sum
}