const braceful = (input) => {
    let brackets = "[]{}()"
    let res = []
    for (let i = 0; i <= input.length - 1; i++) {
        let bracketsIndex = brackets.indexOf(input[i])
        if (bracketsIndex % 2 === 0) {
            res.push(bracketsIndex + 1)
        } else if (res.pop() !== bracketsIndex) {
            return false;
        }
    }
    return res.length === 0;
};

module.exports = braceful;
