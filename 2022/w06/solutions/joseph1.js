const whatsMissing = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        if ((arr[i + 1].charCodeAt(0) - arr[i].charCodeAt(0)) === 2) return String.fromCharCode(arr[i].charCodeAt(0) + 1)
    }
};

module.exports = whatsMissing;