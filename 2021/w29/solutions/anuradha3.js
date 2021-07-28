const substring = String.prototype.substring;

const chopMeUp = (str, n=2, s='_') => {
    const result = [];
    for (let i = 0; i < str.length; i += n) {
        let subStr = substring.call(str, i, i + n);
        const subStrLen = subStr.length;
        if (subStrLen < n) {
            subStr += s.repeat(n-subStrLen);
        }
        result.push(subStr);
    }

    return result;
};

module.exports = chopMeUp;
