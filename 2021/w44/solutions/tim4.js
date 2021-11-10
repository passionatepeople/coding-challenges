function offWithIt(arr) {
    var min = arr.reduce((a, b) => a < b ? a : b);
    var index = arr.indexOf(min);
    var copy = [...arr];
    copy.splice(index, 1);
    return copy;
}

module.exports = offWithIt;
