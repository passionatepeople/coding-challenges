const OPEN = '(';
const CLOSE = ')';

const isValid = (code) => {
    // your solution here
    let stack = 0;

    for (let i = 0, char; i < code.length; i += 1) {
        char = code[i];

        if (char === OPEN) {
            stack += 1;
        } else if (char === CLOSE) {
            stack -= 1;
        }
    }

    return stack === 0;
};

module.exports = isValid;
