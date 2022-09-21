const cmp = (a, b) => b - a;
module.exports = (numbers) => {
    const sorted = numbers.slice().sort(cmp);
    const map = new Map();
    let prev = sorted[0] - 1;
    let rank = 1;
    for (let index = 0; index < sorted.length; index++) {
        const value = sorted[index];
        if (value !== prev) {
            prev = value;
            map.set(value, rank);
        }
        rank++;
    }
    return numbers.map(num => map.get(num));
};