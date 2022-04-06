const pop = Array.prototype.pop;
const push = Array.prototype.push;

const braceful = (input) => {
    const inputLength = input.length;
    if (inputLength === 0) return true;
    if (inputLength % 2 !== 0) return false;

    const pairs = {
        '{': '}',
        '[': ']',
        '(': ')',
    };

    const stack = [];

    for(const item of input) {
        if(pairs[item]) {
            push.call(stack, item);
        } else if(pairs[pop.call(stack)] !== item) {
            return false;
        }
    }

    return stack.length === 0;
};

module.exports = braceful;