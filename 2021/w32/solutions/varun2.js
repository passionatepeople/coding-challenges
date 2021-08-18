const imSpecial = (arr) => {
    let first = arr[0];
    if (first !== arr[1] && first !== arr[2]) {
        return first
    }
    let i = 1;
    while (arr[i++] === first) { }
    return arr[i - 1];
};

module.exports = imSpecial;
