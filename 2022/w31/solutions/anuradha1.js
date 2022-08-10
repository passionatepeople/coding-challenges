const { slice, match } = String.prototype

const bumpMe = (str) => {
    const numStr = match.call(str, /\d*$/);
    const incrementedNum = +numStr[0] + 1;
    const numOfLeadingZeros = match.call(numStr[0], /^0*/)[0].length;
    const incrementedNumStr = '' + incrementedNum;

    if (numOfLeadingZeros > 0) {
        return slice.call(str, 0, numStr.index) +
            '0'.repeat(incrementedNumStr.length == ('' + +numStr).length && incrementedNum !== 1 ? numOfLeadingZeros : (numOfLeadingZeros - 1)) +
            incrementedNumStr;
    }

    return slice.call(str, 0, numStr.index) + incrementedNumStr;
};

module.exports = bumpMe;