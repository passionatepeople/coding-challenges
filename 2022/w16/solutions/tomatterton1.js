module.exports = (dice) => {
    let total = 0, i = 0, dlength = dice.length
    if (dlength < 3) return 0
    let n = {
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0,
        6: 0,
    }

    while (i < dlength) {
        n[dice[i]]++
        i++
    }

    if (n[1] >= 3) {
        total += 1000
        total += n[1] % 3 * 100
    } else {
        total += n[1] * 100
    }
    if (n[5] >= 3) {
        total += 500
        total += n[5] % 3 * 50

    } else {
        total += n[5] * 50
    }

    if (n[6] >= 3) total += 600;
    if (n[4] >= 3) total += 400;
    if (n[3] >= 3) total += 300;
    if (n[2] >= 3) total += 200;
    
    return total;
}