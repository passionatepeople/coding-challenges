const withoutFives = (start, end) => {
    let result = 0

    for (let i = start; i <= end; i++) {
        if (!String(i).includes('5')) {
            result++;
        }
    }

    return result;
};

module.exports = withoutFives;