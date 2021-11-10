const offWithIt = (arr) => {
    const a = arr.slice();

    a.splice(a.indexOf(Math.min.apply(Math, arr)), 1);

    return a;
};

module.exports = offWithIt;
