const offWithIt = (arr) => {
    const array = [...arr];

    array.splice(array.indexOf(arr.reduce((a, b) => Math.min(a, b))), 1);

    return array;
};

module.exports = offWithIt;
