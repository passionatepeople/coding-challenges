const whatsMissing = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        const firstCharCode = arr[i].charCodeAt(0);
        const secondCharCode = arr[i + 1].charCodeAt(0)
        if ((secondCharCode - firstCharCode) === 2) return String.fromCharCode(firstCharCode + 1)
    }
};

module.exports = whatsMissing;