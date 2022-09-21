module.exports = (number) => {
    if (number.length < 3) return number
    let sorted = [...number].sort((a, b) => b - a), ranked = []

    for (let num of number) {
        ranked.push(sorted.indexOf(num) + 1);
    }
    return ranked;

};