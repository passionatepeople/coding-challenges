module.exports = (dice) => {
    let total = 0, dlength = dice.length, i = 0
    if (dlength < 3) return 0
    let n = [0, 0, 0, 0, 0, 0, 0]
    let pointsMap = [0, 1000, 200, 300, 400, 500, 600];
    for (i; i < dlength; i++) {
        if (++n[dice[i]] === 3) {
            total += pointsMap[dice[i]];
            n[dice[i]] = 0;
        }
    }
    total += n[1] * 100
    total += n[5] * 50
    return total
}