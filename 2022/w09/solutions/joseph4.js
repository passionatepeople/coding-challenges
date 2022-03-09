const slice = String.prototype.slice;

const goAround = (str) => {
    const strLen = str.length;
    const result = [];

    for (let i = 0; i < strLen; i++) {
        result.push(slice.call(str, i + 1) + slice.call(str, 0, i + 1))
    }

    return result;
};

module.exports = goAround;