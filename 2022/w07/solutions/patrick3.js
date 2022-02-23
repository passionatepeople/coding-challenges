module.exports = (arr) => {
    if (arr.length === 0) return [arr[0], arr[0]]
    return [Math.min.apply(null, arr), Math.max.apply(null, arr)];
}
