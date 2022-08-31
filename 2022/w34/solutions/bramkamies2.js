module.exports = function solution(numbers) {
    const length = numbers.length;
    const center = ~~(length / 2);
    if (numbers[center - 1] !== 0 || numbers[center] !== 0 || numbers[center + 1] !== 0) return false;

    let start = 0;
    while (numbers[start] !== 0) {
        start++;
    }

    let end = length - start;

    if (end - start < 3 || numbers[end] === 0 || numbers[end - 1] !== 0) {
        return false;
    }

    for (let i = end + 1; i < length; i++) {
        if (numbers[i] === 0) {
            return false;
        }
    }

    end--;

    for (let i = start+1; i < end; i++) {
        if (numbers[i] !== 0)
            return false;
    }

    return true;
}