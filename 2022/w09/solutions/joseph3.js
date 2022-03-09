const goAround = (str) => {
    const strLen = str.length;
    const result = [];

    for (let i = 0; i < strLen; i++) {
        result.push(str.slice(i + 1) + str.slice(0, i + 1))
    }

    return result;
};

module.exports = goAround;