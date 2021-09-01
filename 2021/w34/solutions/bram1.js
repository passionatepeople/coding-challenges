const mostValuable = (sentence, alfabet = 'abcdefghijklmnopqrstuvwxyz') => {
    const words = sentence.split(' ');

    let result;
    let resultWeight = 0;

    words.forEach(word => {
        const wordWeight = [...word.toLowerCase()].reduce((weight, char) => {
            return weight + alfabet.indexOf(char) + 1
        }, 0)

        if (wordWeight > resultWeight) {
            result = word;
            resultWeight = wordWeight
        }
    })

    return result;
};

module.exports = mostValuable;
