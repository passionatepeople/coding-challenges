const minAndMax = (arr) => {
    let lowest = arr[0];
    let highest = arr[0];

    for (let i = 1; i < arr.length; i++) {
        const num = arr[i];

        if (num < lowest) {
            lowest = num
        }

        if (highest < num) {
            highest = num
        }
    }

    return [lowest, highest];
};

module.exports = minAndMax;
