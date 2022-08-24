const { indexOf, replace } = String.prototype;

const sevenAteNine = (numbers, result = numbers) => {
    if (indexOf.call(result, '797') > -1) {
        while (indexOf.call(result, '797') > -1) {
            result = replace.call(result, '797', '77');
        }
    }
    return result;
};

module.exports = sevenAteNine;