const imSpecial = (arr) => {
    const second = arr[2];

    const firstIsNotSameAsSecond = arr.indexOf(second) === 2;

    if (firstIsNotSameAsSecond) {
        return second
    }

    return  arr.find(i => i !== second);
};

module.exports = imSpecial;
