const goAround = (str) => {
    const strLen = str.length;
    const result = [];

    for (let i = 0; i < strLen; i++) {
        result.push(str.substring(i + 1, strLen) + str.substring(0, i + 1))
    }

    return result;
};

module.exports = goAround;