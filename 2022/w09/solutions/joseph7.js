const goAround = (str) => {
    const strLen = str.length;
    const result = [];

    let i = 0;
    while (i < strLen) {
        result.push(str.slice(i + 1) + str.slice(0, i + 1))
        i++
    }

    return result;
};

module.exports = goAround;