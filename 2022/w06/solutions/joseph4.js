const charCodeAt = String.prototype.charCodeAt;
const fromCharCode = String.fromCharCode;

const whatsMissing = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        const firstCharCode = charCodeAt.call(arr[i], 0);
        const secondCharCode = charCodeAt.call(arr[i + 1], 0)
        if ((secondCharCode - firstCharCode) === 2) return fromCharCode(firstCharCode + 1)
    }
};

module.exports = whatsMissing;