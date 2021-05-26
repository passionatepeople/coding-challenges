const mergeArrays = (arr1, arr2, direction) => {
    // your solution here
    const result = arr1.concat(arr2);
    const correction = direction === 'asc' ? 1 : -1;

    result.sort((a, b) => {
        return correction * (a - b);
    });

    return result;
};

module.exports = mergeArrays;
