function offWithIt(arr) {
    var min = getSmallestNumberInArray(arr);
    var index = arr.indexOf(min);
    var copy = [...arr];
    copy.splice(index, 1);
    return copy;
}

function getSmallestNumberInArray(arr) {
    return arr.reduce((a, b) => a < b ? a : b);
}

module.exports = offWithIt;
