const imSpecial = (str) => {
    const charArray = str.toLowerCase();
    const countMap = {};

    for (const char of charArray) {
        countMap[char] = (char in countMap) ? countMap[char] + 1 : 1
    }

    for (let i = 0; i < charArray.length; i++) {
        if (countMap[charArray[i]] === 1) {
            return str[i]
        }
    }

    return ''
};

module.exports = imSpecial;