const indexOf = Array.prototype.indexOf;
const slice = Array.prototype.slice;

module.exports = (arr, tills) => {
    if (tills == 1) {
        let count = 0, i = 0, a = arr.length;
        while (i < a) {
            count += arr[i];
            i++
        }
        return count
    }

    let sums = slice.call(arr, 0, tills),
        custCount = tills,
        max = 0,
        counter = 0,
        min = sums[0],
        i = 0,
        sumLen = sums.length;

    while (custCount < arr.length) {
        min = sums[0];
        counter = 0;

        while (counter < sumLen) {
            if (sums[counter] < min) {
                min = sums[counter]
            }
            counter++
        }

        sums[indexOf.call(sums, min)] += arr[custCount];
        custCount++
    }

    while (i < sumLen) {
        if (sums[i] > max) {
            max = sums[i]
        }
        i++
    }

    return max
};