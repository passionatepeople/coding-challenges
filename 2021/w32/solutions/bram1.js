const imSpecial = (arr) => {
    const lastIndex = arr.length -1;
    const last = arr[lastIndex];

    const lastIsUnique = arr.indexOf(last) === lastIndex;

    if (lastIsUnique) {
        return last;
    }

    return arr.find(i => i !== last);
};

module.exports = imSpecial;
