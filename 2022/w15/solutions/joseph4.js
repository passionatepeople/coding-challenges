const simplify = (arr) => {
    let result = '', start = arr[0], end = arr[0], count = 1, len = arr.length;

    for (let i = 1; i <= len; i++) {
        if (arr[i] === end + 1) {
            end = arr[i];
            count++;
        } else {
            if (count === 1) {
                result += start + ',';
            } else if (count === 2) {
                result += start + ',' + end + ',';
            } else {
                result += start + '-' + end + ',';
            }
            start = arr[i];
            end = arr[i];
            count = 1;
        }
    }

    return result.slice(0, -1);
};

module.exports = simplify;