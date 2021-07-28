const substring = String.prototype.substring;

const chopMeUp = (str, n=2, s='_') => {
    const result = [];
    for (let i = 0; i < str.length; i += n) {
        let subStr = substring.call(str, i, i + n);
        const subStrLen = subStr.length;
        if (subStrLen < n) {
            for (let j = subStrLen; j < n; j++) {
                subStr += s;
            }
        }
        result.push(subStr);
    }

    return result;
  };
  
  module.exports = chopMeUp;