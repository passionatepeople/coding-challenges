const offWithIt = (arr) => {
    const array = arr.slice();

    array.splice(array.indexOf(Math.min(...arr)), 1);

    return array;
};

module.exports = offWithIt;
