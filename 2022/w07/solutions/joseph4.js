module.exports = (arr) => {
    var arrLength = arr.length;
    var lowest = arr[0];
    var highest = arr[0];

    var i = 1
    while (i < arrLength) {
        if (arr[i] < lowest) {
            lowest = arr[i]
        }

        if (highest < arr[i]) {
            highest = arr[i]
        }

        i++
    }

    return [lowest, highest];
};
