const pop = Array.prototype.pop;
const push = Array.prototype.push;

const braceful = (input) => {
    const pairs = {
        '{': '}',
        '[': ']',
        '(': ')',
    };

    const stack = [];

    const inputLength = input.length;
    for (let i = 0; i < inputLength; i++) {
        const char = input[i];

        if(pairs[char]) {
            push.call(stack, char);
        } else if(pairs[pop.call(stack)] !== char) {
            return false;
        }
    }

    return stack.length === 0;
};

module.exports = braceful;