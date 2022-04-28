module.exports = (dice) => {
    let total = 0, i = 0
    let n = [0, 0, 0, 0, 0, 0, 0]
    for (i; i < 7; i++) {
        let die = dice[i]
        if (++n[die] > 2) {
            total += (die == 1) ? 1000 : die * 100;
            n[die] = 0;
        }
    }
    return total + n[1] * 100 + n[5] * 50
}