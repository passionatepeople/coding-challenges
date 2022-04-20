const simplify = (arr) => {
    let result = [],
        start = arr[0],
        end = arr[0],
        arrLength = arr.length;

    for (let i = 1; i <= arrLength; i++) {
        if (arr[i] - end === 1) {
            end = arr[i];
        } else {
            if (start === end) {
                result.push(`${start}`);
            } else {
                if (start === end - 1) {
                    result.push(`${start},${end}`);
                } else {
                    result.push(`${start}-${end}`);
                }
            }
            start = arr[i];
            end = arr[i];
        }
    }

    return result.join(',');
};

module.exports = simplify;