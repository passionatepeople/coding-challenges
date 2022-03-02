module.exports = (arr, tills) => {
    const arrLength = arr.length;
    if (tills == 1) {
        let count = 0, i = 0
        while (i < arrLength) {
            count = count + arr[i];
            i++
        }
        return count
    }

    const sums = Array(tills).fill(0);
    let i = 0
    while (i < arrLength) {
        sums[sums.indexOf(Math.min(...sums))] += arr[i];
        i++
    }
    return Math.max(...sums);
};