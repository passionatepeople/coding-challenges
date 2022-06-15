const abs = (x) => {
    return x < 0 ? x * -1 : x;
}
module.exports = (first, second) => {
    if (first < 10 && second < 10) return second - first
    let f = first + '', s = second + ''
    return abs((s.charAt(0) + f.substring(1)) - (f.charAt(0) + s.substring(1)))
};