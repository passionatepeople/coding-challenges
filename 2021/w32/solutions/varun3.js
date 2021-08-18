const imSpecial = (arr) => {
    let first = arr[0];
    if (first !== arr[1] && first !== arr[2]) return first;
    let i = 0;
    for (; first === arr[i]; i++) { }
    return arr[i]
};

module.exports = imSpecial;
