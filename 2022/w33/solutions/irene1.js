const sevenAteNine = (numbers) => {
    let result = numbers[0];
    let previous, current, next;

    for (let i = 1; i < numbers.length -1; i++) {
        previous = numbers[i - 1]
        current = numbers[i]
        next = numbers[i + 1];

        if (current === '9' && previous === next && previous === '7') {
            continue;
        };

        result += current;
    }

    return result + next;
};

module.exports = sevenAteNine;