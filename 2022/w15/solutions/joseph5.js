const simplify = (arr) => {
    let result = '', start = arr[0], count = 1, len = arr.length;

    for (let i = 1; i <= len; i++) {
        const last = arr[i - 1], current = arr[i];

        if (current === last + 1) {
            count++;
        } else {
            if (count === 1) {
                result += start + ',';
            } else if (count === 2) {
                result += start + ',' + last + ',';
            } else {
                result += start + '-' + last + ',';
            }
            start = current;
            count = 1;
        }
    }

    return result.slice(0, -1);
};

module.exports = simplify;