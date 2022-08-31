module.exports = (numbers) => {
    const length = numbers.length;
    if (length < 3) return false;
    if (numbers[~~(length / 2)] !== 0) return false;

    let start = 0;
    while (numbers[start] !== 0) {
        start++;
    }
    let end = length - 1;
    while (numbers[end] !== 0) {
        end--;
    }
    end++;

    if ((end - start) < 3 || start !== length - end) return false;
    start++;
    end--;

    for (let i = start; i < end; i++) {
        if (numbers[i] !== 0) return false;
    }

    return true;
};