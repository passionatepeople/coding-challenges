const simplify = (arr) => {
    let res = `${arr[0]},`;
    const arrLen = arr.length - 1;

    for (let i = 1; i < arrLen; i++) {
        if (arr[i - 1] === arr[i] - 1 && arr[i + 1] === arr[i] + 1) {
            res += ',';
        } else {
            res += `${arr[i]},`;
        }
    }

    return res.replace(/,,+/g, '-') + arr[arrLen];
};

module.exports = simplify;