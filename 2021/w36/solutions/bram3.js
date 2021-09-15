const findMinInt = (array) => {
    const firstInt = array.find(x => Number.isInteger(x));

    return array.reduce((r, i) => {
        if (Number.isInteger(i) && i < r) {
            return i;
        } else {
            return r;
        }
    }, firstInt);
};

module.exports = findMinInt;
