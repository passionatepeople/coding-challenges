module.exports = (dice) => {
    let total = 0, i = 0
    let n = [0, 0, 0, 0, 0, 0, 0]
    while (i < 5) {
        if (++n[dice[i]] == 3) {
            if (dice[i] == 1) {
                total += 1000
            } else {
                total += dice[i] * 100;
            }
            n[dice[i]] = 0;
        }
        i++
    }
    return total + n[1] * 100 + n[5] * 50
}