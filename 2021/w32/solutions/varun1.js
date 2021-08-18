const imSpecial = (arr) => {
    const elements = Array.from(new Set(arr));
    if (arr.indexOf(elements[0]) === arr.lastIndexOf(elements[0])) {
        return elements[0]
    }

    return elements[1];
};

module.exports = imSpecial;
