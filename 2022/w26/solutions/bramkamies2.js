function gen(i) {
    return `Math.floor(number / 10 ** ${i}) % 10`;
}

function cmp(l, r) {
    return `${gen(l)} === ${gen(r)}`;
}

module.exports = new Function(`
return number => {
    const length = (
        number < 10 ? 1 :
        number < 100 ? 2 :
        number < 1000 ? 3 :
        number < 10000 ? 4 :
        number < 100000 ? 5 :
        6
    );
    switch (length) {
        case 1:
            return true;
        case 2:
            return ${cmp(0, 1)};
        case 3:
            return ${cmp(0, 2)};
        case 4:
            return ${cmp(0, 3)} && ${cmp(1, 2)};
        case 5:
            return ${cmp(0, 4)} && ${cmp(1, 3)};
        case 6:
            return ${cmp(0, 5)} && ${cmp(1, 4)} && ${cmp(2, 3)};
    }
    return false;
};`)();